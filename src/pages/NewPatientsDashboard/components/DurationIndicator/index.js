import React from "react";
import moment from "../../../../utilities/moment-config";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./index.module.scss";

const DurationIndicator = ({ createdAt, stageChangedAt }) => {
    const formattedDate = moment(createdAt).format("MM/DD/YY");

    const getDaysOnTheStage = () => {
        if (!stageChangedAt) {
            const currentDateTime = moment();
            const duration = moment.duration(
                currentDateTime.diff(moment(createdAt)),
            );
            return duration.days();
        }

        const currentDateTime = moment();
        const duration = moment.duration(
            currentDateTime.diff(moment(stageChangedAt)),
        );
        return duration.days();
    };

    const daysOnTheStage = getDaysOnTheStage();

    const getDaysOnTheStageTooltipText = () => {
        const pluralize = (count, singular, plural) =>
            count === 1 ? singular : plural;
        const daysText = pluralize(daysOnTheStage, "day", "days");
        return `${daysOnTheStage} ${daysText} on the stage`;
    };

    const daysOnTheStageTooltipText = getDaysOnTheStageTooltipText();

    if (!daysOnTheStage) {
        return <></>;
    }

    return (
        <OverlayTrigger
            placement="bottom"
            overlay={
                <Tooltip>
                    <div>{daysOnTheStageTooltipText}</div>
                    <div>Created at: {formattedDate}</div>
                </Tooltip>
            }>
            <div className={styles.durationIndicator}>{daysOnTheStage}d</div>
        </OverlayTrigger>
    );
};

export default DurationIndicator;
