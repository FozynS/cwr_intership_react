import classNames from "classnames";
import moment from "moment-timezone";
import React from "react";
import StarRating from "../../../../../../components/StarRating";
import styles from "../../index.module.scss";

const SecondSurveyCompleteComment = ({ comment }) => {
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
                            How well do you feel understood and supported by
                            your therapist? Please rate from 1 to 5 stars, where
                            1 star means 'not at all' and 5 stars means
                            'completely'.
                        </div>
                        <div className="d-flex gap-1 mt-1">
                            <StarRating
                                value={
                                    comment.comment_metadata
                                        .therapist_understanding_support_rate
                                }
                                fieldName="therapist_understanding_support_rate"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        How would you rate the overall atmosphere or vibe during
                        your therapy sessions? Please rate from 1 to 5 stars,
                        where 1 star means 'very poor' and 5 stars means
                        'excellent'.
                    </div>
                    <div className="d-flex gap-1 mt-1">
                        <StarRating
                            value={
                                comment.comment_metadata.therapy_atmosphere_rate
                            }
                            fieldName="therapy_atmosphere_rate"
                            readOnly
                        />
                    </div>
                </div>
                <div>
                    <div>
                        How easy has it been for you to open up and share with
                        your therapist? Please rate from 1 to 5 stars, where 1
                        star means 'very difficult' and 5 stars means 'very
                        easy'.
                    </div>
                    <div className="d-flex gap-1 mt-1">
                        <StarRating
                            value={
                                comment.comment_metadata
                                    .therapist_openness_share_rate
                            }
                            fieldName="therapist_openness_share_rate"
                            readOnly
                        />
                    </div>
                </div>
                <div>
                    <div>
                        How do you feel after your therapy sessions? Please rate
                        your sense of being heard and validated from 1 to 5
                        stars, where 1 star means 'not at all' and 5 stars means
                        'completely'.
                    </div>
                    <div className="d-flex gap-1 mt-1">
                        <StarRating
                            value={
                                comment.comment_metadata
                                    .therapy_session_after_feelings_rate
                            }
                            fieldName="therapy_session_after_feelings_rate"
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

export default SecondSurveyCompleteComment;
