import classNames from "classnames";
import moment from "moment-timezone";
import React from "react";
import styles from "../../index.module.scss";

const PatientAlertComment = ({ comment }) => {
    return (
        <div className={styles.systemComment}>
            <div className="d-flex justify-content-between">
                <div className={styles.name}>System</div>
                <div className={classNames(styles.date, "text-primary")}>
                    {moment(comment.created_at).format("DD MMM. YYYY h:mm A")}
                </div>
            </div>

            <div
                dangerouslySetInnerHTML={{
                    __html: comment.comment,
                }}></div>
        </div>
    );
};

export default PatientAlertComment;
