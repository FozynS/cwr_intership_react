import React, { useContext, useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";
import { useOnClickOutside } from "usehooks-ts";
import SendDocumentByFaxModal from "../SendDocumentByFaxModal";
import SendDocumentByEmailModal from "../SendDocumentByEmailModal";
import styles from "./index.module.scss";
import {
    EMAIL_LOG_ID,
    FAX_LOG_ID,
    PATIENT_DOCUMENT_MODEL,
    PATIENT_ELECTRONIC_DOCUMENT_MODEL,
    PHONE_LOG_ID,
} from "../../../../../../constants/reauthorization-request-dashboard";
import SaveLogModal from "../SaveLogModal";
import { createLog } from "../../../../../../api/pages/reauthorization-request-dashboard-page";
import NotificationsContext from "../../../../../../contexts/NotificationsContext";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { setDataInTableAC } from "../../../../../../store/reducers/reauthorizationRequestsDashboard.reducer";
import moment from "moment-timezone";
import { getSendMethodNameFromId } from "../../../../../../utilities/reauthorizationRequestsDashboardUtils";
import StageChangeHistoryModal from "../StageChangeHistoryModal";

const ActionsButton = ({ requestForm }) => {
    const dispatch = useDispatch();

    const { tableData } = useSelector(
        (state) =>
            state.reauthorizationRequestsDashboard
                .submittedReauthorizationRequestForms,
    );

    const [showMenu, setShowMenu] = useState(false);
    const [showSendByEmailModal, setShowSendByEmailModal] = useState(false);
    const [showSendByFaxModal, setShowSendByFaxModal] = useState(false);
    const [showEmailLogModal, setShowEmailLogModal] = useState(false);
    const [showFaxLogModal, setShowFaxLogModal] = useState(false);
    const [showLogPhoneCallModal, setShowLogPhoneCallModal] = useState(false);
    const [showStageHistory, setShowStageHistory] = useState(false);

    const { enqueueNotification } = useContext(NotificationsContext);

    const dotsRef = useRef(null);
    const menuRef = useRef(null);

    const document = requestForm.document;

    useOnClickOutside(menuRef, (e) => {
        if (!dotsRef.current || !dotsRef.current.contains(e.target)) {
            setShowMenu(false);
        }
    });

    const toggleMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const getDocumentModel = () => {
        const parts = document.document_type.split("\\");
        return parts[parts.length - 1];
    };

    const handleDownloadClick = () => {
        const documentModel = getDocumentModel();

        if (documentModel === PATIENT_DOCUMENT_MODEL) {
            return window.open(
                `/patient/download-document/${document.aws_document_name}`,
                "_blank",
            );
        }

        if (documentModel === PATIENT_ELECTRONIC_DOCUMENT_MODEL) {
            return window.open(
                `/patient/electronic-document/${document.id}/download`,
                "_blank",
            );
        }
    };

    const handleSendViaEmailClick = () => {
        setShowSendByEmailModal(true);
    };

    const handleSendViaFaxClick = () => {
        setShowSendByFaxModal(true);
    };

    const handleEmailLogClick = () => {
        setShowEmailLogModal(true);
    };

    const handleFaxLogClick = () => {
        setShowFaxLogModal(true);
    };

    const handleLogPhoneCallClick = () => {
        setShowLogPhoneCallModal(true);
    };

    const handleStageHistoryClick = () => {
        setShowStageHistory(true);
    };

    const handleCloseStageHistory = () => {
        setShowStageHistory(false);
    };

    const handleCloseSendViaEmailModal = () => {
        setShowSendByEmailModal(false);
    };

    const handleCloseSendViaFaxModal = () => {
        setShowSendByFaxModal(false);
    };

    const handleCloseEmailLogModal = () => {
        setShowEmailLogModal(false);
    };

    const handleCloseFaxLogModal = () => {
        setShowFaxLogModal(false);
    };

    const handleCloseLogPhoneCallModal = () => {
        setShowLogPhoneCallModal(false);
    };

    const handleCreateLog = async (log_type, comment) => {
        const payload = { log_type, comment };
        const response = await createLog(requestForm.id, payload);

        const newTableData = tableData.map((row) => {
            if (row.id === requestForm.id) {
                const newLog = response.data;
                const newLogs = _.cloneDeep(row.logs);
                newLogs.unshift(newLog);
                return {
                    ...row,
                    send_method: getSendMethodNameFromId(newLog.log_type),
                    sent_at: moment(newLog.created_at).format("MM/DD/YYYY"),
                    logs: newLogs,
                };
            }
            return row;
        });

        dispatch(
            setDataInTableAC({
                tableName: "submittedReauthorizationRequestForms",
                value: newTableData,
            }),
        );

        enqueueNotification("Success", "Log successfully created");
    };

    const handleSaveEmailLog = (comment) => {
        handleCreateLog(EMAIL_LOG_ID, comment);
    };

    const handleSaveFaxLog = (comment) => {
        handleCreateLog(FAX_LOG_ID, comment);
    };

    const handleSaveLogPhoneCall = (comment) => {
        handleCreateLog(PHONE_LOG_ID, comment);
    };

    const createLogModals = [
        {
            handleClick: handleSaveEmailLog,
            show: showEmailLogModal,
            closeModal: handleCloseEmailLogModal,
            title: "Log Sending via Email",
        },
        {
            handleClick: handleSaveFaxLog,
            show: showFaxLogModal,
            closeModal: handleCloseFaxLogModal,
            title: "Log Sending via Fax",
        },
        {
            handleClick: handleSaveLogPhoneCall,
            show: showLogPhoneCallModal,
            closeModal: handleCloseLogPhoneCallModal,
            title: "Log Phone Call",
        },
    ];

    return (
        <div>
            <div className={styles.actionsButton} onClick={toggleMenu}>
                <div ref={dotsRef}>
                    <Icon path={mdiDotsVertical} size={1} />
                </div>
                {showMenu && (
                    <div ref={menuRef} className={styles.menuDialog}>
                        {document ? (
                            <div>
                                <div
                                    className={styles.menuItem}
                                    onClick={handleDownloadClick}>
                                    Download
                                </div>
                                <div
                                    className={styles.menuItem}
                                    onClick={handleSendViaEmailClick}>
                                    Send via Email
                                </div>
                                <div
                                    className={styles.menuItem}
                                    onClick={handleEmailLogClick}>
                                    Log Sending via Email
                                </div>
                                <div
                                    className={styles.menuItem}
                                    onClick={handleSendViaFaxClick}>
                                    Send via Fax
                                </div>
                                <div
                                    className={styles.menuItem}
                                    onClick={handleFaxLogClick}>
                                    Log Sending via Fax
                                </div>
                            </div>
                        ) : (
                            <div
                                className={styles.menuItem}
                                onClick={handleLogPhoneCallClick}>
                                Log Phone Call
                            </div>
                        )}
                        <div
                            className={styles.menuItem}
                            onClick={handleStageHistoryClick}>
                            Show Stage History
                        </div>
                    </div>
                )}
            </div>
            <SendDocumentByEmailModal
                document={document}
                show={showSendByEmailModal}
                closeModal={handleCloseSendViaEmailModal}
            />
            <SendDocumentByFaxModal
                document={document}
                show={showSendByFaxModal}
                closeModal={handleCloseSendViaFaxModal}
            />
            {createLogModals.map((modal, index) => (
                <SaveLogModal
                    key={index}
                    handleClick={modal.handleClick}
                    show={modal.show}
                    closeModal={modal.closeModal}
                    title={modal.title}
                />
            ))}
            <StageChangeHistoryModal
                requestForm={requestForm}
                show={showStageHistory}
                closeModal={handleCloseStageHistory}
            />
        </div>
    );
};

export default ActionsButton;
