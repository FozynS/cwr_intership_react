import React, { useContext, useEffect, useState } from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "react-bootstrap";
import moment from "moment-timezone";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getSelectStyles } from "../../../../../../utilities/react-select-styles";
import classNames from "classnames";
import _ from "lodash";
import NotificationsContext from "../../../../../../contexts/NotificationsContext";
import PhoneInput from "../../../../../../components/Inputs/PhoneInput";
import CircleLoaderWithOverlay from "../../../../../../components/CircleLoaderWithOverlay";
import { sendDocumentFax } from "../../../../../../api/pages/reauthorization-request-dashboard-page";
import * as ReauthorizationRequestsDashboardReducer from "../../../../../../store/reducers/reauthorizationRequestsDashboard.reducer";
import { FAX_SEND_METHOD_NAME } from "../../../../../../constants/reauthorization-request-dashboard";
import styles from "./index.module.scss";

const SendDocumentByFaxModal = ({ document, show, closeModal }) => {
    const dispatch = useDispatch();

    const { documentDefaultFaxesList, submittedReauthorizationRequestForms } =
        useSelector((state) => state.reauthorizationRequestsDashboard);

    const { tableData, tableParams } = submittedReauthorizationRequestForms;

    const tableName = "submittedReauthorizationRequestForms";

    const { enqueueNotification } = useContext(NotificationsContext);

    const selectedFaxInitialValue = { value: "", label: "" };

    const [isLoading, setIsLoading] = useState(false);
    const [selectedFax, setSelectedFax] = useState(selectedFaxInitialValue);
    const [customPhone, setCustomPhone] = useState("");
    const [errors, setErrors] = useState({});

    const selectStyles = getSelectStyles({
        backgroundColor: "rgb(243, 246, 249)",
    });

    const resetModal = () => {
        setSelectedFax(selectedFaxInitialValue);
        setCustomPhone("");
        setErrors({});
        setIsLoading(false);
    };

    const handleCustomPhoneInput = (value) => {
        if (value.length === 10) {
            setErrors({});
        }

        setCustomPhone(value);
    };

    const getDocumentModel = () => {
        const parts = document.document_type.split("\\");
        return parts[parts.length - 1];
    };

    const getRecipient = () => {
        if (!selectedFax.value) {
            return "";
        }

        if (selectedFax.value === -1) {
            return `+1${customPhone}`;
        }

        return `+1${selectedFax.value}`;
    };

    const calculateLastPage = (total) => {
        return Math.max(1, Math.ceil(total / tableParams.per_page));
    };

    const updateTableData = (newData) => {
        dispatch(
            ReauthorizationRequestsDashboardReducer.setDataInTableAC({
                tableName,
                value: newData,
            }),
        );

        if (newData.length !== tableParams.total) {
            dispatch(
                ReauthorizationRequestsDashboardReducer.setTotalInTableAC({
                    tableName,
                    value: newData.length,
                }),
            );
        }

        const lastPage = calculateLastPage(newData.length);

        if (lastPage !== tableParams.last_page) {
            dispatch(
                ReauthorizationRequestsDashboardReducer.setLastPageInTableAC({
                    tableName,
                    value: lastPage,
                }),
            );
        }
    };

    const validate = () => {
        let errors = {};
        if (!selectedFax.value) {
            errors.selectedFax = true;
        }

        if (selectedFax.value === -1) {
            if (customPhone.length !== 10) {
                errors.customPhone = true;
            }
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSendClick = () => {
        if (!validate()) {
            return;
        }

        setIsLoading(true);

        const sendMethod = FAX_SEND_METHOD_NAME;

        const newData = tableData.map((el) => {
            if (JSON.stringify(el.document) === JSON.stringify(document)) {
                const newDocumentShared = {
                    created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
                };
                const sharedDocuments = _.cloneDeep(document.document_shared);
                sharedDocuments.unshift(newDocumentShared);

                return {
                    ...el,
                    send_method: sendMethod,
                    sent_at: moment().format("MM/DD/YYYY"),
                    document: {
                        ...el.document,
                        document_shared: sharedDocuments,
                    },
                };
            }
            return el;
        });

        const payload = {
            document_model: getDocumentModel(),
            method: sendMethod,
            patient_documents_id: document.id,
            recipient: getRecipient(),
        };
        sendDocumentFax(payload)
            .then(() => {
                updateTableData(newData);
                resetModal();
                closeModal();
                enqueueNotification("Success", "Document sent successfully");
            })
            .catch(() => enqueueNotification("Error", "Something went wrong"))
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        setErrors({});
    }, [selectedFax]);

    return (
        <Modal
            show={show}
            size="sm"
            onHide={closeModal}
            id={styles.sendByFaxDialog}
            centered
            className={"custom-modal"}>
            <ModalHeader className="h6" closeButton>
                Send this document via fax
            </ModalHeader>
            <ModalBody className="container p-3">
                <div className="d-flex align-items-center gap-2 w-100">
                    <div className="fw-bold">To:</div>
                    <div className="w-100">
                        <Select
                            value={selectedFax}
                            onChange={(selectedOption) =>
                                setSelectedFax(selectedOption)
                            }
                            options={[
                                ...documentDefaultFaxesList,
                                { fax: -1, title: "Enter another fax number" },
                            ].map((item) => ({
                                value: item.fax,
                                label: item.title,
                            }))}
                            styles={selectStyles}
                            className={classNames(
                                errors.selectedFax && "is-invalid",
                            )}
                        />
                    </div>
                </div>
                {selectedFax.value && (
                    <div>
                        {selectedFax.value === -1 ? (
                            <div className="d-flex flex-column gap-1">
                                <div className="fw-bold">
                                    Please enter fax number, digits only.
                                </div>
                                <PhoneInput
                                    phone={customPhone}
                                    setPhone={(value) =>
                                        handleCustomPhoneInput(
                                            value.replace(/\D+/g, ""),
                                        )
                                    }
                                    error={!!errors.customPhone}
                                    alwaysShowMask={true}
                                />
                            </div>
                        ) : (
                            <div className="d-flex gap-2">
                                <div className="fw-bold">Fax:</div>
                                <div>{selectedFax.value}</div>
                            </div>
                        )}
                    </div>
                )}
            </ModalBody>
            <ModalFooter className="p-2 border-top">
                <div className="d-flex justify-content-end">
                    <Button onClick={handleSendClick}>Send</Button>
                </div>
            </ModalFooter>
            {isLoading && <CircleLoaderWithOverlay />}
        </Modal>
    );
};

export default SendDocumentByFaxModal;
