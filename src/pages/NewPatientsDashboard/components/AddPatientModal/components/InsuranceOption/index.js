import React from "react";
import styles from "./index.module.scss";

const InsuranceOption = ({ innerProps, value }) => {
    return (
        <div {...innerProps} className={styles.insurance}>
            <div className="d-flex flex-column gap-2 p-2 ps-4 pe-4">
                <div className={styles.name}>{value.insurance}</div>
                <div className={styles.address}>
                    {value.address_line_1}, {value.city}, {value.state},{" "}
                    {value.zip}
                </div>
            </div>
        </div>
    );
};

export default InsuranceOption;
