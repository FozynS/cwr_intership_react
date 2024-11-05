import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { mdiHelpCircle } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./index.module.scss";

const PatientStatusDateTooltip = ({ patientStatusDate }) => { 
    const getPatientDataStatusTooltipText = () => {
        return {
            __html: `<div>
                Date: ${patientStatusDate} 
            </div>`
        };
    };

    const tooltipText = getPatientDataStatusTooltipText();

    return (
        <div className="d-flex align-items-center gap-1">
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
        </div>
    );
};

export default PatientStatusDateTooltip;
