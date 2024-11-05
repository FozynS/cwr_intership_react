import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import moment from "../../../../utilities/moment-config";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import StethoscopeIcon from "../../../../assets/icons/stethoscope.svg";
import BinIcon from "../../../../assets/icons/bin-red.svg";
import ThreeDotsMenu from "../ThreeDotsMenu";
import SourceTag from "../SourceTag";
import FormStatusIndicator from "../FormStatusIndicator";
import { ACTIVE_APPOINTMENT_TYPE, RESCHEDULED_APPOINTMENT_TYPE } from "../../../../constants";
import * as NewPatientsDashboardReducer from "../../../../store/reducers/newPatientsDashboard.reducer";
import styles from "./index.module.scss";
import DurationIndicator from "../DurationIndicator";
import { getInquirableFullname } from "../../../../utilities/newPatientsCrmUtils";
import { INBOX_LANE_ID, IN_PROGRESS_LANE_ID } from "../../../../constants/new-patients-dashboard";
import Icon from "@mdi/react";
import { mdiFileDocumentCheck, mdiStar } from "@mdi/js";
import { getDisplayedProviderForInquiry } from "../../utils";

const PatientCard = ({
    id,
    stageId,
    inquirable,
    source,
    registrationMethod,
    nextAppointment,
    rescheduledAppointment,
    style,
    createdAt,
    stageChangedAt,
    isPatientCreated,
    isArchived,
    initialSurveyComplete,
    secondSurveyComplete,
    onboardingDate,
    onboardingTime,
    onboardingPhone,
    onboardingCompleteComment,
}) => {
    const dispatch = useDispatch();

    const [
        isNextAppointmentStatusTooltipVisible,
        setNextAppointmentStatusTooltipVisible,
    ] = useState(false);

    const handleNextAppointmentStatusMouseEnter = () => {
        setNextAppointmentStatusTooltipVisible(true);
    };

    const handleNextAppointmentStatusMouseLeave = () => {
        setNextAppointmentStatusTooltipVisible(false);
    };

    const showFormStatusIndicator =
        stageId !== INBOX_LANE_ID && stageId !== IN_PROGRESS_LANE_ID;

    const threeDotsText = (
        <div className="d-flex gap-1 text-danger">
            <img src={BinIcon} alt="bin-icon" />
            <div>Archive inquiry</div>
        </div>
    );

    const generatePatientName = (inquirable) => {
        return getInquirableFullname(inquirable).trim();
    };

    const patientName = generatePatientName(inquirable);

    const formatDateToYears = (dateString) => {
        const dateObject = moment(dateString);
        const yearsDifference = moment().diff(dateObject, "years");
        return `${yearsDifference} years`;
    };

    const age = formatDateToYears(inquirable.date_of_birth);
    const status = inquirable.status ? inquirable.status.status : "Not created";
    const statusColor = inquirable.status
        ? `#${inquirable.status.hex_color}`
        : "#000000";

    const getNextAppointmentType = () => {
        if (!nextAppointment) {
            return null;
        }

        return rescheduledAppointment
            ? RESCHEDULED_APPOINTMENT_TYPE
            : ACTIVE_APPOINTMENT_TYPE;
    };

    const nextAppointmentType = getNextAppointmentType();

    const getNextAppointmentTooltipHtml = () => {
        if (!nextAppointment) {
            return { __html: "" };
        }

        let html = "";
        const nextAppointmentDateTime = `${nextAppointment.date_of_service.date} ${nextAppointment.date_of_service.time}`;

        switch (nextAppointmentType) {
            case ACTIVE_APPOINTMENT_TYPE:
                html = `Appointment scheduled: ${nextAppointmentDateTime}`;
                break;
            case RESCHEDULED_APPOINTMENT_TYPE:
                const oldAppointmentDateTime = `${rescheduledAppointment.date_of_service.date} ${rescheduledAppointment.date_of_service.time}`;
                html = `Old appointment: ${oldAppointmentDateTime} <br /> Rescheduled appointment: ${nextAppointmentDateTime}`;
                break;
            default:
                return;
        }

        return { __html: html };
    };

    const nextAppointmentTooltipHtml = getNextAppointmentTooltipHtml();

    const getSexLabel = (sex) => {
        switch (sex) {
            case "M":
                return "Male";
            case "F":
                return "Female";
            case "U":
                return "Unknown";
            default:
                return "Not specified";
        }
    };
    const sex = getSexLabel(inquirable.sex);

    const displayedProvider = getDisplayedProviderForInquiry({
        nextAppointment,
        isPatientCreated,
        inquirable,
    });

    const tooltipProviders = inquirable.providers
        ? inquirable.providers.filter((provider) => {
              if (displayedProvider) {
                  return provider.id !== displayedProvider.id;
              }

              return true;
          })
        : [];

    const onCardClick = () => {
        if (isArchived) {
            return;
        }

        dispatch(
            NewPatientsDashboardReducer.setSelectedCardDataAC({
                data: {
                    ...inquirable,
                    inquiry_id: id,
                    stageId,
                    source,
                    registrationMethod,
                    isPatientCreated,
                    nextAppointment,
                    rescheduledAppointment,
                    onboardingDate,
                    onboardingTime,
                    onboardingPhone,
                    onboardingCompleteComment,
                },
            }),
        );
    };

    const threeDotsAction = () => {
        const data = {
            cardId: id,
            laneId: stageId,
            patientName,
        };
        dispatch(NewPatientsDashboardReducer.setRemoveCardDataAC({ data }));
    };

    return (
        <div className={styles.patientCard} style={style} onClick={onCardClick}>
            <div className={styles.patientInfo}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-1 flex-wrap">
                        {inquirable.therapy_type && (
                            <SourceTag source={inquirable.therapy_type} />
                        )}
                        <SourceTag source={registrationMethod} />
                        <SourceTag source={source} />
                    </div>
                    <div
                        className={classNames(
                            "d-flex align-items-center gap-2",
                            isArchived && styles.archived,
                        )}>
                        {showFormStatusIndicator && (
                            <FormStatusIndicator inquirable={inquirable} />
                        )}
                        <div className={styles.threeDotsButton}>
                            <ThreeDotsMenu
                                text={threeDotsText}
                                onAction={threeDotsAction}
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column gap-1">
                    <div className={styles.patientName}>{patientName}</div>
                    <div className="d-flex justify-content-between align-items-end">
                        <div>
                            <span>
                                {age}, {sex},{" "}
                            </span>
                            <span
                                className={styles.patientStatus}
                                style={{ color: statusColor }}>
                                {status}
                            </span>
                        </div>
                        <div className="d-flex flex-column align-items-center gap-1">
                            <div className="d-flex gap-1">
                                {onboardingCompleteComment ? (
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={
                                            <Tooltip>
                                                <div>Onboarding completed</div>
                                            </Tooltip>
                                        }>
                                        <Icon
                                            path={mdiFileDocumentCheck}
                                            size={1}
                                            color="rgb(51, 135, 199)"
                                        />
                                    </OverlayTrigger>
                                ) : (
                                    <></>
                                )}
                                {initialSurveyComplete ? (
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={
                                            <Tooltip>
                                                <div>Survey completed</div>
                                            </Tooltip>
                                        }>
                                        <div className="d-flex align-items-center">
                                            <Icon
                                                path={mdiStar}
                                                size={1}
                                                color="rgb(51, 135, 199)"
                                            />
                                            {secondSurveyComplete && (
                                                <span
                                                    className="fw-bold"
                                                    style={{
                                                        color: "rgb(51, 135, 199)",
                                                    }}>
                                                    2
                                                </span>
                                            )}
                                        </div>
                                    </OverlayTrigger>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <DurationIndicator
                                createdAt={createdAt}
                                stageChangedAt={stageChangedAt}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {displayedProvider && (
                <div>
                    <hr className="m-0" />
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            !isNextAppointmentStatusTooltipVisible &&
                            tooltipProviders.length > 1 ? (
                                <Tooltip id="plus-icon">
                                    <div className="text-start">
                                        {tooltipProviders.map((provider) => (
                                            <div key={provider.id}>
                                                {provider.provider_name}
                                            </div>
                                        ))}
                                    </div>
                                </Tooltip>
                            ) : (
                                <></>
                            )
                        }>
                        <div
                            className={styles.therapistInfo}
                            style={{ backgroundColor: style.backgroundColor }}>
                            <div className={styles.providerName}>
                                <img
                                    src={StethoscopeIcon}
                                    alt="stethoscope-icon"
                                />
                                <div>{displayedProvider.provider_name}</div>
                            </div>
                            {nextAppointment && (
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip>
                                            <span
                                                dangerouslySetInnerHTML={
                                                    nextAppointmentTooltipHtml
                                                }></span>
                                        </Tooltip>
                                    }>
                                    <div
                                        onMouseEnter={
                                            handleNextAppointmentStatusMouseEnter
                                        }
                                        onMouseLeave={
                                            handleNextAppointmentStatusMouseLeave
                                        }
                                        className={classNames(
                                            styles.nexAppointmentDate,
                                            styles[nextAppointmentType],
                                        )}>
                                        (
                                        {moment
                                            .unix(nextAppointment.time)
                                            .format("MM/DD")}
                                        )
                                    </div>
                                </OverlayTrigger>
                            )}
                        </div>
                    </OverlayTrigger>
                </div>
            )}
        </div>
    );
};

export default PatientCard;
