import classNames from "classnames";
import moment from "moment-timezone";
import React from "react";
import StarRating from "../../../../../../components/StarRating";
import styles from "../../index.module.scss";

const InitialSurveyCompleteComment = ({ comment }) => {
    return (
        <div className={styles.systemComment}>
            <div className="d-flex justify-content-between">
                <div className={styles.name}>{comment.full_admin_name}</div>
                <div className={classNames(styles.date, "text-primary")}>
                    {moment(comment.created_at).format("DD MMM. YYYY h:mm A")}
                </div>
            </div>
            <div className="form-group">
                <label className="form-label fw-bold">Comment</label>
                <div
                    dangerouslySetInnerHTML={{
                        __html: comment.comment,
                    }}></div>
            </div>
            <div className="d-flex flex-column gap-2">
                <div>
                    <label className="form-label fw-bold">
                        Appointment survey for provider{" "}
                        {comment.provider_name_from_appointment}
                    </label>
                    <div>
                        <div>
                            On a scale of 1-5 (with 5 being the highest) how do
                            you rate the services you just received?
                        </div>
                        <div className="mt-1">
                            <StarRating
                                value={comment.comment_metadata.service_rate}
                                fieldName="service_rate"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        On a scale of 1-5 (with 5 being the highest) how do you
                        rate the provider that was assigned to you?
                    </div>
                    <div className="mt-1">
                        <StarRating
                            value={comment.comment_metadata.provider_rate}
                            fieldName="provider_rate"
                            readOnly
                        />
                    </div>
                </div>
                <div>
                    <div>
                        Do you have any suggestions as to how we can elevate
                        your experience with Change WithinReach?
                    </div>
                    <div className="d-flex gap-1 mt-1">
                        {comment.comment_metadata.suggestions || "-"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InitialSurveyCompleteComment;
