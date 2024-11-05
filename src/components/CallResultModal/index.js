import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRingOutCall } from "../../api/common/ringCentral";
import { setCallLogAC } from "../../store/reducers/app.reducer";
import CallResultContext from "../../contexts/CallResultContext";
import {
    APPOINTMENT_SCHEDULED_LANE_ID,
    FOUR_APPOINTMENTS_COMPLETE_LANE_ID,
    INITIAL_APPOINTMENT_COMPLETE_LANE_ID,
} from "../../constants/new-patients-dashboard";
import CommentModal from "./components/CommentModal";
import AppointmentScheduledModal from "./components/AppointmentScheduledModal";
import _ from "lodash";
import NotificationsContext from "../../contexts/NotificationsContext";
import SurveyModal from "./components/SurveyModal";

const CallResultModal = ({ showModal, closeModal }) => {
    const dispatch = useDispatch();

    const { enqueueNotification } = useContext(NotificationsContext);

    const { lanes } = useSelector((state) => state.newPatientsDashboard);

    const { callLog } = useSelector((state) => state.app);

    const [errors, setErrors] = useState({});
    const [isSaving, setIsSaving] = useState(false);

    const getCurrentInquiry = () => {
        let inquiry = null;

        lanes.forEach((lane) => {
            let card = null;

            const isPatientLead =
                callLog.call_subject_type === "AppModelsPatientLeadPatientLead";

            card = lane.cards.find(
                (card) =>
                    card.inquirable.id === callLog.call_subject_id &&
                    (isPatientLead
                        ? !card.isPatientCreated
                        : card.isPatientCreated),
            );

            if (card) {
                inquiry = card;
            }
        });

        return inquiry;
    };

    const currentInquiry = getCurrentInquiry();

    const clearError = (keys) => {
        let newErrors = _.cloneDeep(errors);

        keys.forEach((key) => {
            delete newErrors[key];
        });

        setErrors(newErrors);
    };

    const handleSubmit = async (payload) => {
        try {
            setIsSaving(true);

            const response = await updateRingOutCall(callLog.id, payload);
            dispatch(setCallLogAC({ callLog: response.data.call_log }));
        } catch (error) {
            const message = error.response.data.errors.comment
                ? error.response.data.errors.comment
                : error.response.data.message;

            enqueueNotification("Error", message);

            throw error;
        } finally {
            setIsSaving(false);
        }
    };

    const getModalComponent = () => {
        let component = <CommentModal />;

        if (!currentInquiry) {
            return component;
        }

        if (currentInquiry.stageId === APPOINTMENT_SCHEDULED_LANE_ID) {
            component = <AppointmentScheduledModal />;
        }

        if (
            currentInquiry.stageId === INITIAL_APPOINTMENT_COMPLETE_LANE_ID ||
            currentInquiry.stageId === FOUR_APPOINTMENTS_COMPLETE_LANE_ID
        ) {
            component = <SurveyModal />;
        }

        return component;
    };

    const modalComponent = getModalComponent();

    return (
        <CallResultContext.Provider
            value={{
                currentInquiry,
                errors,
                setErrors,
                clearError,
                showModal,
                closeModal,
                handleSubmit,
                isSaving,
            }}>
            {modalComponent}
        </CallResultContext.Provider>
    );
};

export default CallResultModal;
