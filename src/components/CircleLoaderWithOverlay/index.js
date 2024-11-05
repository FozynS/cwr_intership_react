import React from "react";
import CircleLoader from "../CircleLoader";
import styles from "./index.module.scss";

const CircleLoaderWithOverlay = () => {
    return (
        <div className={styles.overlay}>
            <CircleLoader />
        </div>
    );
};

export default CircleLoaderWithOverlay;
