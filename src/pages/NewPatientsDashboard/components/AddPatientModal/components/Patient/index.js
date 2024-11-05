import React from "react";
import moment from "../../../../../../utilities/moment-config";
import styles from "./index.module.scss";

const Patient = ({ patient }) => {

    const formatDateToYears = () => {
        const dateObject = moment(patient.date_of_birth);
        const yearsDifference = moment().diff(dateObject, 'years');
        return `${yearsDifference} years`;
    }

    const getSexTitle = () => {
        let sex = 'Not specified';
        if (patient.sex === 'M') {
            sex = 'Male';
        }
        if (patient.sex === 'F') {
            sex = 'Female';
        }
        if (patient.sex === 'U') {
            sex = 'Unknown';
        }
        return sex;
    }

    const getStatusText = () => {
        let status = 'Not created';
        if (patient.status) {
            status = patient.status.status;
        }
        return status;
    }

    const getStatusColor = () => {
        let color = '#EA3323';
        if (patient.status) {
            color = `#${patient.status.hex_color}`;
        }
        return color;
    }

    const years = formatDateToYears();
    const sex = getSexTitle();
    const status = getStatusText();
    const statusColor = getStatusColor();

    return (
        <div className={styles.patient}>
            <div className="d-flex justify-content-between p-2 ps-3 pe-3">
                <div className="d-flex flex-column gap-1">
                    <div className={styles.name}>{patient.full_name}</div>
                    <div className={styles.email}>{patient.email}</div>
                </div>
                <div className="d-flex flex-column align-items-end gap-1">
                    <div className="d-flex gap-1">
                        <div>{sex},</div>
                        <div>{years}</div>
                    </div>
                    <div className={styles.status} style={{ color: statusColor }}>{status}</div>
                </div>
            </div>
        </div>
    )
}

export default Patient