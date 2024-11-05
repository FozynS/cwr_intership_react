import React from "react";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";

const CustomLaneHeader = ({ id, titleText }) => {
    const { lanes } = useSelector((state) => state.newPatientsDashboard);
    const currentLane = lanes.find((el) => el.id === id);

    if (!currentLane) {
        return <></>;
    }

    return (
        <div className={styles.laneHeader}>
            <div>{titleText}</div>
            <div className={styles.label}>{currentLane.label || 0}</div>
        </div>
    );
};

export default CustomLaneHeader;
