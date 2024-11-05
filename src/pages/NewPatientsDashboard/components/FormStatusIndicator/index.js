import React from "react";
import classNames from "classnames";
import FormsNotSendIcon from "../../../../assets/icons/forms-not-send.svg";
import FormsSendIcon from "../../../../assets/icons/forms-send.svg";
import FormsSignedIcon from "../../../../assets/icons/forms-signed.svg";
import styles from "./index.module.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import moment from "moment";

const FormStatusIndicator = ({ inquirable }) => {
    const { last_document_request, last_document } = inquirable;

    const FORMS_NOT_SEND = "Forms not send";
    const FORMS_SEND = "Forms send";
    const FORMS_SIGNED = "Forms signed";

    const getFormStatus = () => {
        if (!last_document_request) {
            return FORMS_NOT_SEND;
        } else if (!last_document) {
            return FORMS_SEND;
        } else {
            return FORMS_SIGNED;
        }
    };

    const formStatus = getFormStatus();

    const getStatusData = () => {
        if (formStatus === FORMS_NOT_SEND) {
            return {
                className: styles["notSend"],
                icon: FormsNotSendIcon,
                tooltipText: "Forms not sent",
            };
        }
        if (formStatus === FORMS_SEND) {
            return {
                className: styles["send"],
                icon: FormsSendIcon,
                tooltipText: `Forms sent at ${moment(
                    inquirable.last_document_request.created_at,
                ).format("MM/DD/YY")}`,
            };
        }
        if (formStatus === FORMS_SIGNED) {
            return {
                className: styles["signed"],
                icon: FormsSignedIcon,
                tooltipText: `Forms signed at ${moment(
                    inquirable.last_document.created_at,
                ).format("MM/DD/YY")}`,
            };
        }
        return null;
    };

    const statusData = getStatusData();

    if (!statusData) {
        return <></>;
    }

    return (
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{statusData.tooltipText}</Tooltip>}>
            <div className={classNames(styles.status, statusData.className)}>
                <img src={statusData.icon} alt="status-icon" />
            </div>
        </OverlayTrigger>
    );
};

export default FormStatusIndicator;
