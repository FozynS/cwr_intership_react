import moment from "moment-timezone";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { mdiHelpCircle } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./index.module.scss";

const InsuranceAuthorizationNumber = ({ authNumberData }) => {
    const getAuthNumberValue = () => {
        if (authNumberData && authNumberData.insurance_requires_verification) {
            return authNumberData.insurance_authorization_number || "N/A";
        }
        return "-";
    };

    const getAuthorizationNumberTooltipText = () => {
        if (
            !authNumberData ||
            !authNumberData.insurance_requires_verification
        ) {
            return null;
        }

        if (!authNumberData.insurance_authorization_number) {
            return { __html: "Authorization number is not set" };
        }

        const {
            insurance_visits_auth,
            insurance_visits_auth_left,
            insurance_eff_start_date,
            insurance_eff_stop_date,
        } = authNumberData;
        return {
            __html: `<div>
        No. of Visits Authorized: ${insurance_visits_auth} <br />
        No. of Visits Left: ${insurance_visits_auth_left} <br />
        Eff. Start Date: ${
            insurance_eff_start_date
                ? moment(insurance_eff_start_date, "YYYY-MM-DD").format(
                      "MM/DD/YY",
                  )
                : "N/A"
        } <br />
        Eff. Stop Date: ${
            insurance_eff_stop_date
                ? moment(insurance_eff_stop_date, "YYYY-MM-DD").format(
                      "MM/DD/YY",
                  )
                : "N/A"
        }
        </div>`,
        };
    };

    const isAlmostOverdue = () => {
        if (!authNumberData) {
            return false;
        }

        const {
            insurance_requires_verification,
            insurance_visits_auth_left,
            insurance_eff_stop_date,
            reauthorization_notification_visits_count,
            reauthorization_notification_days_count,
        } = authNumberData;

        if (
            insurance_requires_verification &&
            insurance_visits_auth_left <=
                reauthorization_notification_visits_count &&
            insurance_visits_auth_left > 0
        ) {
            return true;
        }

        const currentDate = moment(moment().format("YYYY-MM-DD"));
        if (
            insurance_requires_verification &&
            insurance_eff_stop_date &&
            moment(insurance_eff_stop_date).diff(currentDate, "days") <=
                reauthorization_notification_days_count &&
            moment(insurance_eff_stop_date).diff(currentDate, "days") > 0
        ) {
            return true;
        }

        return false;
    };

    const isOverdue = () => {
        if (!authNumberData) {
            return false;
        }

        const {
            insurance_requires_verification,
            insurance_authorization_number,
            insurance_visits_auth_left,
            insurance_eff_stop_date,
        } = authNumberData;

        if (
            insurance_requires_verification &&
            !insurance_authorization_number
        ) {
            return true;
        }

        if (
            insurance_requires_verification &&
            insurance_visits_auth_left <= 0
        ) {
            return true;
        }

        const currentDate = moment(moment().format("YYYY-MM-DD"));
        if (
            insurance_requires_verification &&
            insurance_eff_stop_date &&
            moment(insurance_eff_stop_date).diff(currentDate, "days") <= 0
        ) {
            return true;
        }

        return false;
    };

    const getClassName = () => {
        if (isOverdue()) {
            return styles.overdue;
        }
        if (isAlmostOverdue()) {
            return styles.almostOverdue;
        }
        return "";
    };

    const authNumber = getAuthNumberValue();
    const tooltipText = getAuthorizationNumberTooltipText();
    const className = getClassName();

    return (
        <div className="d-flex align-items-center gap-1">
            <div className={className}>{authNumber}</div>
            {authNumberData && tooltipText && (
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip>
                            <div dangerouslySetInnerHTML={tooltipText}></div>
                        </Tooltip>
                    }>
                    <div className={styles.helpIcon}>
                        <Icon path={mdiHelpCircle} size={0.6} />
                    </div>
                </OverlayTrigger>
            )}
        </div>
    );
};

export default InsuranceAuthorizationNumber;
