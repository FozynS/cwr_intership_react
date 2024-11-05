import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as NewPatientsDashboardApi from "../../../../api/pages/new-patients-dashboard-page";
import * as NewPatientsDashboardReducer from "../../../../store/reducers/newPatientsDashboard.reducer";
import CustomSelect from "./components/CustomSelect";

const FileTypeSelectorModal = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.app);

    const { selectedCardData, fileTypeSelection, documentTypes } = useSelector(
        (state) => state.newPatientsDashboard,
    );

    const [selectedTypeId, setSelectedTypeId] = useState(null);
    const [visibleOnlyForAdmin, setVisibleOnlyForAdmin] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const convertToFormat = (node) => {
        const result = [];

        const processNode = (currentNode) => {
            const options = [];
            for (const key in currentNode) {
                if (currentNode.hasOwnProperty(key)) {
                    const group = {
                        label: currentNode[key].type,
                        options: [],
                    };
                    if (currentNode[key].childs) {
                        const nestedOptions = processNode(
                            currentNode[key].childs,
                        );
                        if (nestedOptions.length > 0) {
                            group.options = nestedOptions;
                        }
                    }
                    if (group.options.length === 0) {
                        options.push({
                            value: currentNode[key].id,
                            label: group.label,
                        });
                    } else {
                        options.push(group);
                    }
                }
            }
            return options;
        };

        result.push(...processNode(node));
        return result;
    };

    const formattedData = convertToFormat(documentTypes);

    const findDocumentTypeById = (id, data) => {
        let value = "";
        for (const el of data) {
            if (el.value === id) {
                value = el.label;
                break;
            }

            if (el.options) {
                const foundOption = findDocumentTypeById(id, el.options);
                if (foundOption) {
                    value = foundOption.label || foundOption;
                    break;
                }
            }
        }
        return value;
    };

    const selectedTypeValue = selectedTypeId
        ? findDocumentTypeById(selectedTypeId, formattedData)
        : "";

    const deleteDocument = () => {
        if (fileTypeSelection.patientIsCreated) {
            return NewPatientsDashboardApi.deletePatientDocument({
                id: fileTypeSelection.fileId,
            });
        }

        return NewPatientsDashboardApi.deletePatientLeadDocument(
            fileTypeSelection.fileId,
        );
    };

    window.onbeforeunload = () => {
        deleteDocument();
    };

    const resetState = () => {
        setSelectedTypeId(null);
        setVisibleOnlyForAdmin(false);
        setIsLoading(false);
    };

    const closeModal = () => {
        deleteDocument();
        dispatch(
            NewPatientsDashboardReducer.setFileTypeSelectionAC({
                data: {
                    showModal: false,
                    fileId: null,
                    patientIsCreated: false,
                },
            }),
        );
        resetState();
    };

    const handleChangeType = () => {
        setIsLoading(true);

        const payload = {
            document_id: fileTypeSelection.fileId,
            document_type_id: selectedTypeId,
            other_document_type: "",
            visible_only_for_admin: visibleOnlyForAdmin,
        };

        const handleSuccessChangeType = (res) => {
            const { original_document_name, document_type, document_uploader, created_at } =
                res.data;

            const comment = {
                model: "PatientDocument",
                full_admin_name: `${user.firstname} ${user.lastname}`,
                document_type: document_type.type,
                document_uploader: document_uploader,
                created_at,
                original_document_name,
            };
            dispatch(
                NewPatientsDashboardReducer.setCommentsInSelectedCardDataAC({
                    data: [comment, ...selectedCardData.comments],
                }),
            );

            dispatch(
                NewPatientsDashboardReducer.setFileTypeSelectionAC({
                    data: {
                        showModal: false,
                        fileId: null,
                        patientIsCreated: false,
                    },
                }),
            );
            resetState();
        };

        if (fileTypeSelection.patientIsCreated) {
            NewPatientsDashboardApi.setPatientDocumentType(payload).then(
                (res) => {
                    handleSuccessChangeType(res);
                },
            );
        } else {
            NewPatientsDashboardApi.setPatientLeadDocumentType(payload).then(
                (res) => {
                    handleSuccessChangeType(res);
                },
            );
        }
    };

    const handleOnSelect = (value) => {
        setSelectedTypeId(value);
    };

    return (
        <Modal
            show={fileTypeSelection.showModal}
            centered
            onHide={closeModal}
            className="custom-modal custom-modal-sm"
        >
            <Modal.Header closeButton>
                <h4 className='modal-title m-0'>File Type</h4>
            </Modal.Header>

            <Modal.Body className="container">
                {fileTypeSelection.fileId ? (
                    <div className="d-flex flex-column align-items-end gap-3">
                        <div className="w-100">
                            <CustomSelect
                                options={formattedData}
                                selectedOption={selectedTypeValue}
                                onSelect={handleOnSelect}
                            />
                        </div>
                        <div className="w-100 form-group custom-form-group">
                            <div className="checkbox prompt-checkbox">
                                <label htmlFor="checkbox" className='d-flex gap-2' style={{ width: 'fit-content' }}>
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        defaultChecked={visibleOnlyForAdmin}
                                        onChange={(e) => setVisibleOnlyForAdmin(e.target.checked)}
                                    />
                                    <span>Visible Only For Administrator</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            {isLoading ? (
                                <div
                                    className="spinner-border text-primary"
                                    role="status"></div>
                            ) : (
                                <button
                                    onClick={handleChangeType}
                                    className="btn btn-primary"
                                    disabled={!selectedTypeId}>
                                    Ok
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="p-1 d-flex align-items-center justify-content-center">
                        <div
                            className="spinner-border text-primary"
                            role="status"></div>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default FileTypeSelectorModal;
