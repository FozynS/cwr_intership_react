import React from "react";
import Messages from "./components/Messages";
import styles from "./index.module.scss";
import TridiumAppointmentsInfo from "./components/TridiumAppointmentsInfo";
import classNames from "classnames";

const Sidebar = () => {
    return (
        <div className={classNames(styles.sidebar, "d-flex flex-column gap-3")}>
            <TridiumAppointmentsInfo />
            <Messages />
        </div>
    );
};

export default Sidebar;
