import React from "react";
import styles from "../../index.module.scss";
import {
    CANCELLATION_COMMENT_TYPE,
    CHANGE_VISIT_FREQUENCY_COMMENT_TYPE,
    CREATION_COMMENT_TYPE,
    RESCHEDULE_COMMENT_TYPE,
} from "../../../../../../constants/new-patients-dashboard";
import moment from "moment-timezone";
import classNames from "classnames";

const DefaultComment = ({ comment }) => {
    let additionalInfo = null;
    let appointmentDate = null;
    let visitReason = null;

    if (comment.appointment) {
        appointmentDate = moment
            .unix(comment.appointment.time)
            .format("MM/DD/YYYY h:mm a");
        visitReason = comment.comment_metadata ? comment.comment_metadata.visit_reason : null;
    }

    switch (comment.comment_type) {
        case CANCELLATION_COMMENT_TYPE:
            additionalInfo = 'cancelled appointment';
            if (appointmentDate) {
                if (visitReason) {
                    additionalInfo += ` with reason "${visitReason}" <br><span style="line-height: 1.5;">(Appt. date: ${appointmentDate})</span>`
                } else {
                    additionalInfo += ` (Appt. date: ${appointmentDate})`;
                }
            }
            break;
        case RESCHEDULE_COMMENT_TYPE:
            additionalInfo = 'rescheduled appointment';
            let newAppointmentDate = null;

            if (comment.new_appointment) {
                newAppointmentDate = moment
                    .unix(comment.new_appointment.time)
                    .format("MM/DD/YYYY h:mm a");
            } else if (
                comment.comment_metadata &&
                comment.comment_metadata.old_time &&
                comment.comment_metadata.new_time
            ) {
                appointmentDate = moment
                    .unix(comment.comment_metadata.old_time)
                    .format("MM/DD/YYYY h:mm a");
                newAppointmentDate = moment
                    .unix(comment.comment_metadata.new_time)
                    .format("MM/DD/YYYY h:mm a");
            }

            if (appointmentDate && newAppointmentDate) {
                if (visitReason) {
                    additionalInfo += ` with reason "${visitReason}" <br><span style="line-height: 1.5;">(Old appt. date: ${appointmentDate}, new appt. date: ${newAppointmentDate})</span>`
                } else {
                    additionalInfo += ` (Old appt. date: ${appointmentDate}, new appt. date: ${newAppointmentDate})`;
                }
            }

            break;
        case CREATION_COMMENT_TYPE:
            additionalInfo = 'scheduled appointment';
            if (appointmentDate) {
                if (visitReason) {
                    additionalInfo += ` with reason "${visitReason}" <br><span style="line-height: 1.5;">(Appt. date: ${appointmentDate})</span>`
                } else {
                    additionalInfo += ` (Appt. date: ${appointmentDate})`;
                }
            }
            break;
        case CHANGE_VISIT_FREQUENCY_COMMENT_TYPE:
            additionalInfo = "changed patient Frequency of Treatment";
            const metadata = comment.comment_metadata;
            if (metadata) {
                additionalInfo += ` (${
                    metadata.old_value
                        ? `Old value: ${metadata.old_value}; `
                        : ""
                }New value: ${metadata.new_value})`;
            }
            break;
    }

    return (
        <div>
            <div className={styles.comment}>
                <div className="d-flex justify-content-between">
                    <div>
                        <span className={styles.name}>
                            {comment.full_admin_name || comment.provider_name}
                        </span>{" "}
                        <span dangerouslySetInnerHTML={{ __html: additionalInfo }}></span>
                    </div>
                    <div className={classNames(styles.date, "text-primary")}>
                        {moment(comment.created_at).format(
                            "DD MMM. YYYY h:mm A",
                        )}
                    </div>
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: comment.comment,
                    }}></div>
            </div>
            <hr className="m-0" />
        </div>
    );
};

export default DefaultComment;
