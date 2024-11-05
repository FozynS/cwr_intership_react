import classNames from "classnames";
import moment from "moment-timezone";
import React from "react";
import { getUsFormat } from "../../../../../../mixins/phone-format";
import styles from "../../index.module.scss";

const OnboardingCompleteComment = ({ comment }) => {
    const phone = getUsFormat(String(comment.comment_metadata.phone));

    return (
        <div>
            <div className={styles.systemComment}>
                <div className="d-flex justify-content-between">
                    <div className={styles.name}>{comment.full_admin_name}</div>
                    <div className={classNames(styles.date, "text-primary")}>
                        {moment(comment.created_at).format(
                            "DD MMM. YYYY h:mm A",
                        )}
                    </div>
                </div>
                <div className="fw-bold">Onboarding done</div>
                <div className="form-group">
                    <label className="form-label fw-bold">Comment</label>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: comment.comment,
                        }}></div>
                </div>
                <div className="form-group">
                    <label className="form-label fw-bold">Phone</label>
                    <div>{phone}</div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingCompleteComment;
