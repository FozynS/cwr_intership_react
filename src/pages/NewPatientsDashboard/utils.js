import moment from "moment-timezone";
import {
    APPOINTMENT_SCHEDULED_LANE_ID,
    INBOX_LANE_ID,
    IN_PROGRESS_LANE_ID,
    INITIAL_APPOINTMENT_COMPLETE_LANE_ID,
    INITIAL_SURVEY_COMPLETE_LANE_ID,
    FOUR_APPOINTMENTS_COMPLETE_LANE_ID,
    NEW_PATIENTS_DASHBOARD_PROBLEMATIC_CARDS,
    ONBOARDING_COMPLETE_LANE_ID,
} from "../../constants/new-patients-dashboard";

export const processCardData = (item) => {
    const style = {};

    if (
        item.stage_id === IN_PROGRESS_LANE_ID &&
        item.has_cancelled_appointment &&
        !item.next_appointment
    ) {
        style.backgroundColor =
            NEW_PATIENTS_DASHBOARD_PROBLEMATIC_CARDS.HAS_CANCELLED_APPOINTMENT_CARD_COLOR;
    }

    if (
        (item.stage_id === INBOX_LANE_ID &&
            moment().diff(item.stage_changed_at, "days") >=
                NEW_PATIENTS_DASHBOARD_PROBLEMATIC_CARDS.DAYS_FOR_INBOX) ||
        (item.stage_id === IN_PROGRESS_LANE_ID &&
            moment().diff(item.stage_changed_at, "days") >=
                NEW_PATIENTS_DASHBOARD_PROBLEMATIC_CARDS.DAYS_FOR_IN_PROGRESS)
    ) {
        style.backgroundColor =
            NEW_PATIENTS_DASHBOARD_PROBLEMATIC_CARDS.PROBLEMATIC_CARD_COLOR;
        style.border = "1.5px solid #EA3323";
    }

    return {
        id: item.id.toString(),
        stageId: item.stage_id,
        inquirable: item.inquirable,
        isPatientCreated: item.is_patient_created,
        registrationMethod: item.registration_method,
        source: item.source,
        nextAppointment: item.next_appointment,
        rescheduledAppointment: item.rescheduled_appointment,
        createdAt: item.created_at,
        isArchived: item.is_archived,
        initialAppointmentIsCompleted: item.initial_appointment_is_completed,
        initialSurveyComplete: item.initial_survey_complete,
        secondSurveyComplete: item.second_survey_complete,
        onboardingCompleteComment: item.onboarding_complete_comment,
        stageChangedAt: item.stage_changed_at,
        onboardingDate: item.onboarding_date,
        onboardingTime: item.onboarding_time,
        onboardingPhone: item.onboarding_phone,
        style,
    };
};

const PATIENT_NOT_CREATED_REASON = "Patient not created";
const NO_ACTIVE_APPOINTMENT_REASON = "Patient must have an active appointment";
const ONBOARDING_NO_COMPLETED_REASON = "Patient did not have onboarding";
const APPOINTMENT_DATE_ALREADY_PASSED_REASON = "The date of the next appointment has already passed";
const NO_COMPLETED_APPOINTMENTS_REASON = "Patient has no completed appointments";
const AUTO_TRANSFER_REASON = "Inquiry is transferred to this stage automatically";

const getValidateError = (reason) => {
    return `You cannot change inquiry stage due to following reason: ${reason}`;
};

export const columnRules = {
    [IN_PROGRESS_LANE_ID]: {
        check: (cardDetails) => {
            if (!cardDetails.isPatientCreated) {
                return getValidateError(PATIENT_NOT_CREATED_REASON);
            }
        },
    },

    [APPOINTMENT_SCHEDULED_LANE_ID]: {
        check: (cardDetails) => {
            if (cardDetails.onboardingCompleteComment) {
                return `Please transfer the inquiry card to the "Onboarding complete" stage directly`;
            }
            if (!cardDetails.nextAppointment) {
                return getValidateError(NO_ACTIVE_APPOINTMENT_REASON);
            }
            if (moment.unix(cardDetails.nextAppointment.time).isBefore(moment(), "day")) {
                return getValidateError(APPOINTMENT_DATE_ALREADY_PASSED_REASON);
            }

            return null;
        },
    },

    [ONBOARDING_COMPLETE_LANE_ID]: {
        check: (cardDetails) => {
            if (!cardDetails.onboardingCompleteComment) {
                return getValidateError(ONBOARDING_NO_COMPLETED_REASON);
            } else if (!cardDetails.nextAppointment) {
                return getValidateError(NO_ACTIVE_APPOINTMENT_REASON);
            } else if (
                moment
                    .unix(cardDetails.nextAppointment.time)
                    .isBefore(moment(), "day")
            ) {
                return getValidateError(APPOINTMENT_DATE_ALREADY_PASSED_REASON);
            }
            return null;
        },
    },

    [INITIAL_APPOINTMENT_COMPLETE_LANE_ID]: {
        check: (cardDetails) => {
            if (!cardDetails.initialAppointmentIsCompleted) {
                return getValidateError(NO_COMPLETED_APPOINTMENTS_REASON);
            } else if (!cardDetails.onboardingCompleteComment) {
                return getValidateError(ONBOARDING_NO_COMPLETED_REASON);
            }
            return null;
        },
    },

    [INITIAL_SURVEY_COMPLETE_LANE_ID]: {
        check: (cardDetails) => {
            return getValidateError(AUTO_TRANSFER_REASON);
        },
    },

    [FOUR_APPOINTMENTS_COMPLETE_LANE_ID]: {
        check: (cardDetails) => {
            return getValidateError(AUTO_TRANSFER_REASON);
        },
    },
};

export const getDisplayedProviderForInquiry = (inquiry) => {
    if (!inquiry.isPatientCreated) {
        return null;
    }

    if (inquiry.nextAppointment) {
        return inquiry.nextAppointment.provider;
    }

    return inquiry.inquirable.past_appointment_provider;
};
