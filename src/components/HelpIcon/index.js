import React from "react";
import Icon from "@mdi/react";
import { mdiHelpCircle } from "@mdi/js";
import styles from "./index.module.scss";

const HelpIcon = () => {
    return (
        <div className={styles.helpIcon}>
            <Icon path={mdiHelpCircle} size={0.6} />
        </div>
    );
};

export default HelpIcon;
