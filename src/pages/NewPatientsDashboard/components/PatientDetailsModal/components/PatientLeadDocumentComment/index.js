import classNames from "classnames";
import moment from "moment-timezone";
import React from "react";
import styles from "../../index.module.scss";

const PatientLeadDocumentComment = ({ comment }) => {
    return (
        <div className={styles.systemComment}>
            <div className="d-flex justify-content-between">
                <div className={styles.name}>System</div>
                <div className={classNames(styles.date, "text-primary")}>
                    {moment(comment.created_at).format("DD MMM. YYYY h:mm A")}
                </div>
            </div>

            <div className={styles.content}>
                <b>
                    {comment.document_uploader ||
                        comment.full_admin_name ||
                        comment.provider_name}
                </b>{" "}
                added document <b>«{comment.document_type}»</b>:{" "}
                {comment.original_document_name}
            </div>
        </div>
    );
};

export default PatientLeadDocumentComment;
