import classNames from "classnames";
import React from "react";
import styles from "./index.module.scss";
import PatientStatusDateTooltip from "./../../../../components/PatientStatusDateTooltip";

const CustomBadge = ({
  title,
  className,
  background = "",
  textColor = "",
  statusUpdatedAt,
}) => {
    const badgeClasses = classNames("badge", styles.badge, styles[className]);

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div className={badgeClasses} style={{ background, color: textColor, marginRight: '10px' }}>
                {title}
            </div>
            {statusUpdatedAt !== null && statusUpdatedAt !== undefined && (
                <PatientStatusDateTooltip patientStatusDate={statusUpdatedAt} />
            )}
        </div>
    );
};

export default CustomBadge;
