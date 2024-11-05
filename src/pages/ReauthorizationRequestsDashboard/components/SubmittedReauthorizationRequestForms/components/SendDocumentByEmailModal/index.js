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
import { getSelectStyles } from "../../../../../../utilities/react-select-styles";
import Select from "react-select";
import classNames from "classnames";
import _ from "lodash";
import NotificationsContext from "../../../../../../contexts/NotificationsContext";
import { sendDocumentEmail } from "../../../../../../api/pages/reauthorization-request-dashboard-page";
import CircleLoaderWithOverlay from "../../../../../../components/CircleLoaderWithOverlay";
import * as ReauthorizationRequestsDashboardReducer from "../../../../../../store/reducers/reauthorizationRequestsDashboard.reducer";
import { EMAIL_SEND_METHOD_NAME } from "../../../../../../constants/reauthorization-request-dashboard";
import styles from "./index.module.scss";

const SendDocumentByEmailModal = ({ document, show, closeModal }) => {
    const dispatch = useDispatch();

    const { documentDefaultEmailsList, submittedReauthorizationRequestForms } =
        useSelector((state) => state.reauthorizationRequestsDashboard);

    const { tableData, tableParams } = submittedReauthorizationRequestForms;

    const tableName = "submittedReauthorizationRequestForms";

    const { enqueueNotification } = useContext(NotificationsContext);

    const selectedEmailInitialValue = { value: "", label: "" };

    const [isLoading, setIsLoading] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(
        selectedEmailInitialValue,
    );
    const [customEmail, setCustomEmail] = useState("");
    const [customPassword, setCustomPassword] = useState("");
    const [errors, setErrors] = useState({});

    const selectStyles = getSelectStyles({
        backgroundColor: "rgb(243, 246, 249)",
    });

    const resetModal = () => {
        setSelectedEmail(selectedEmailInitialValue);
        setCustomEmail("");
        setErrors({});
        setIsLoading(false);
    };

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return emailRegex.test(email);
    }

    const getDocumentModel = () => {
        const parts = document.document_type.split("\\");
        return parts[parts.length - 1];
    };

    const getRecipient = () => {
        if (!selectedEmail.value) {
            return "";
        }
        if (selectedEmail.value === -1) {
            return customEmail;
        }

        return selectedEmail.value;
    };

    const getSharedLinkPassword = () => {
        if (!selectedEmail.value) {
            return "";
        }
        if (selectedEmail.value === -1) {
            return customPassword;
        }

        const selectedValue = documentDefaultEmailsList.find(
            (el) => el.email === selectedEmail.value,
        );

        return selectedValue.password;
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
        if (!selectedEmail.value) {
            errors.selectedEmail = true;
        }

        if (selectedEmail.value === -1) {
            if (!isValidEmail(customEmail)) {
                errors.customEmail = true;
            }

            if (!customPassword) {
                errors.customPassword = true;
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

        const sendMethod = EMAIL_SEND_METHOD_NAME;

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
            shared_link_password: getSharedLinkPassword(),
        };
        sendDocumentEmail(payload)
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

    const handleCustomEmailInput = (e) => {
        if (isValidEmail(e.target.value)) {
            setErrors({});
        }

        setCustomEmail(e.target.value);
    };

    const handleCustomPasswordInput = (e) => {
        if (e.target.value) {
            setErrors({});
        }

        setCustomPassword(e.target.value);
    };

    useEffect(() => {
        setErrors({});
    }, [selectedEmail]);

    return (
        <Modal
            show={show}
            size="sm"
            onHide={closeModal}
            id={styles.sendByEmailDialog}
            centered
            className={"custom-modal"}>
            <ModalHeader className="h6" closeButton>
                Send this document via email
            </ModalHeader>
            <ModalBody className="container p-3">
                <div className="d-flex align-items-center gap-2 w-100">
                    <div className="fw-bold">To:</div>
                    <div className="w-100">
                        <Select
                            value={selectedEmail}
                            onChange={(selectedOption) =>
                                setSelectedEmail(selectedOption)
                            }
                            options={[
                                ...documentDefaultEmailsList,
                                {
                                    email: -1,
                                    title: "Enter another email address",
                                },
                            ].map((item) => ({
                                value: item.email,
                                label: item.title,
                            }))}
                            styles={selectStyles}
                            className={classNames(
                                errors.selectedEmail && "is-invalid",
                            )}
                        />
                    </div>
                </div>
                {selectedEmail.value && (
                    <div className="d-flex flex-column gap-2">
                        <label className="d-flex align-items-center gap-2">
                            <div className={styles.label}>Email:</div>
                            {selectedEmail.value === -1 ? (
                                <input
                                    className={classNames(
                                        "form-control",
                                        !!errors.customEmail && "is-invalid",
                                    )}
                                    value={customEmail}
                                    onChange={handleCustomEmailInput}
                                />
                            ) : (
                                <div>{selectedEmail.value}</div>
                            )}
                        </label>
                        <label className="d-flex align-items-center gap-2">
                            <div className={styles.label}>Password:</div>
                            {selectedEmail.value === -1 ? (
                                <input
                                    className={classNames(
                                        "form-control",
                                        !!errors.customPassword && "is-invalid",
                                    )}
                                    value={customPassword}
                                    onChange={handleCustomPasswordInput}
                                />
                            ) : (
                                <div>{getSharedLinkPassword()}</div>
                            )}
                        </label>
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

export default SendDocumentByEmailModal;
