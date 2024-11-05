import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import classNames from "classnames";
import styles from "./index.module.scss";
import { useState } from "react/index";
import {
    downloadPatientDocuments,
    getBase64PatientDocument,
} from "../../../../../api/common/patientForms";
import printJS from "print-js";
import _ from "lodash";
import NotificationsContext from "../../../../../contexts/NotificationsContext";
import { useContext } from "react";
import HelpIcon from "../../../../HelpIcon";
import { PAYMENT_FOR_SERVICE_FORM_TYPE_ID } from "../../../../../constants/new-patients-dashboard";

const FormRequestLogsTable = ({ logs, patient, needTooltip }) => {
    const [showSentAtTooltip, setShowSentAtTooltip] = useState(false);
    const { enqueueNotification } = useContext(NotificationsContext);

    const isFailure = (log) => {
        return (
            log.rejected_at ||
            log.bounced_at ||
            log.soft_bounced_at ||
            log.spam_at ||
            log.unsub_at ||
            log.deferral_at ||
            log.hard_bounced_at
        );
    };

    const getFailureTitle = (log) => {
        if (log.rejected_at) {
            return "Rejected";
        } else if (log.bounced_at) {
            return "Bounced";
        } else if (log.soft_bounced_at) {
            return "Soft-Bounced";
        } else if (log.spam_at) {
            return "Spam";
        } else if (log.unsub_at) {
            return "Unsub";
        } else if (log.deferral_at) {
            return "Deferral";
        } else {
            return "Hard-Bounced";
        }
    };

    const getFailureDate = (log) => {
        if (log.rejected_at) {
            return log.rejected_at;
        } else if (log.bounced_at) {
            return log.bounced_at;
        } else if (log.soft_bounced_at) {
            return log.soft_bounced_at;
        } else if (log.spam_at) {
            return log.spam_at;
        } else if (log.unsub_at) {
            return log.unsub_at;
        } else if (log.deferral_at) {
            return log.deferral_at;
        } else {
            return log.hard_bounced_at;
        }
    };

    const getFormattedDateTime = (date) => {
        return moment(date).format("MM/DD/YYYY hh:mm A");
    };

    const printDocument = (item) => {
        return new Promise((resolve) => {
            printJS({
                printable: item,
                type: "pdf",
                base64: true,
                onPrintDialogClose: () => {
                    resolve(item);
                },
            });
        });
    };

    const printDocuments = (documents) => {
        const documentsId = _.clone(documents);
        const docId = documentsId.pop();

        if (docId) {
            getBase64PatientDocument(patient.id, docId.id)
                .then((response) => {
                    const documentBase64 = response.data.document;

                    printDocument(documentBase64).then(() => {
                        printDocuments(documentsId);
                    });
                })
                .catch((error) => {
                    enqueueNotification(
                        "Error",
                        "Something went wrong during document printing",
                    );
                    console.log(error);
                });
        }
    };

    const downloadDocuments = (documents) => {
        const documentsIds = documents.map((doc) => doc.id);

        downloadPatientDocuments(patient.id, documentsIds)
            .then((response) => {
                const file = new Blob([response.data]);
                const url = window.URL.createObjectURL(file);
                const link = document.createElement("a");
                let filename = "";

                if (documentsIds.length === 1) {
                    filename = documents.find(
                        (doc) => documentsIds[0] === doc.id,
                    ).original_document_name;
                } else {
                    filename = "documents.zip";
                }

                link.href = url;
                link.setAttribute("download", filename);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                enqueueNotification(
                    "Error",
                    "Something went wrong during document downloading",
                );
                console.log(error);
            });
    };

    const getPaymentForServiceTooltipText = (log) => {
        const paymentForServiceRequestItem = log.items.find(
            (item) => item.form_type_id === PAYMENT_FOR_SERVICE_FORM_TYPE_ID,
        );

        if (!paymentForServiceRequestItem) {
            return null;
        }

        const {
            co_pay,
            payment_for_session_not_converted,
            self_pay,
            charge_for_cancellation,
            other_charges_price,
            other_charges,
            comment,
        } = paymentForServiceRequestItem.metadata;

        return `<span>Co-pay and/or co-insurance for session: ${
            co_pay || "-"
        }</span>
                <span>Payment for session not covered due to deductible: ${
                    payment_for_session_not_converted || "-"
                }</span>
                <span>Self-pay for session when paid out-of-pocket: ${
                    self_pay || "-"
                }</span>
                <span>Charge for cancellation without 24 hours’ notice: ${
                    charge_for_cancellation || "-"
                }</span>
                <span>Other charges (price): ${
                    other_charges_price || "-"
                }</span>
                <span>Other charges (specify): ${other_charges || "-"}</span>
                <span>Comment: ${comment || "-"}</span>`;
    };

    return (
        <div>
            <label className={styles.tableCaption}>
                History of requests and submissions
            </label>

            <div className="table-responsive">
                <table className={styles.tableLogs}>
                    <thead>
                        <tr>
                            <th>Date Sent</th>
                            <th>Date Signed</th>
                            <th>Sent By</th>
                            <th>Email / Phone Used</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No records
                                </td>
                            </tr>
                        ) : (
                            logs.map((log) => (
                                <tr key={log.id}>
                                    <td>
                                        {isFailure(log) ? (
                                            <OverlayTrigger
                                                show={showSentAtTooltip}
                                                placement="bottom"
                                                overlay={
                                                    <Tooltip className="mytooltip">
                                                        {getFailureTitle(log)}
                                                    </Tooltip>
                                                }>
                                                <span
                                                    className={
                                                        styles.eventFailed
                                                    }
                                                    onMouseEnter={() =>
                                                        setShowSentAtTooltip(
                                                            true,
                                                        )
                                                    }
                                                    onMouseLeave={() =>
                                                        setShowSentAtTooltip(
                                                            false,
                                                        )
                                                    }>
                                                    {getFormattedDateTime(
                                                        getFailureDate(log),
                                                    )}
                                                </span>
                                            </OverlayTrigger>
                                        ) : (
                                            <td className="d-flex align-items-center gap-1 flex-wrap">
                                                <span
                                                    className={classNames(
                                                        styles.eventSucceed,
                                                        !log.sent_at && "empty",
                                                    )}>
                                                    {log.sent_at
                                                        ? getFormattedDateTime(
                                                              log.sent_at,
                                                          )
                                                        : ""}
                                                </span>
                                                {needTooltip && (
                                                    <OverlayTrigger
                                                        placement="bottom"
                                                        overlay={
                                                            <Tooltip
                                                                className={
                                                                    styles.paymentForServiceLogTooltip
                                                                }>
                                                                <div
                                                                    className="d-flex flex-column"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: getPaymentForServiceTooltipText(
                                                                            log,
                                                                        ),
                                                                    }}></div>
                                                            </Tooltip>
                                                        }>
                                                        <div>
                                                            <HelpIcon />
                                                        </div>
                                                    </OverlayTrigger>
                                                )}
                                            </td>
                                        )}
                                    </td>

                                    <td className={!log.filled_at && "empty"}>
                                        {log.filled_at &&
                                            getFormattedDateTime(log.filled_at)}
                                    </td>

                                    <td className={!log.send_by && "empty"}>
                                        {log.send_by}
                                    </td>

                                    <td
                                        className={
                                            !log.sent_to_email &&
                                            !log.sent_to_phone &&
                                            "empty"
                                        }>
                                        {log.sent_to_email}
                                        {log.sent_to_phone}
                                    </td>

                                    <td className={styles.tdActions}>
                                        <div
                                            className={classNames(
                                                styles.buttons,
                                                (log.filled_at ||
                                                    log.documents.length < 1) &&
                                                    "disabled",
                                            )}>
                                            <button
                                                type={"button"}
                                                className={classNames(
                                                    "btn btn-default",
                                                    styles.btnTableAction,
                                                )}
                                                disabled={
                                                    log.documents.length < 1
                                                }
                                                onClick={() =>
                                                    downloadDocuments(
                                                        log.documents,
                                                    )
                                                }>
                                                <FontAwesomeIcon
                                                    icon={faDownload}
                                                    size="sm"
                                                />
                                            </button>
                                            <button
                                                type={"button"}
                                                className={classNames(
                                                    "btn btn-default",
                                                    styles.btnTableAction,
                                                )}
                                                disabled={
                                                    log.documents.length < 1
                                                }
                                                onClick={() =>
                                                    printDocuments(
                                                        log.documents,
                                                    )
                                                }>
                                                <FontAwesomeIcon
                                                    icon={faPrint}
                                                    size="sm"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FormRequestLogsTable;
