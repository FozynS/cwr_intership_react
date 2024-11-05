import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationsContext from "../../../../contexts/NotificationsContext";
import { changeState } from "../../../../api/pages/new-patients-dashboard-page";
import * as NewPatientsDashboardReducer from "../../../../store/reducers/newPatientsDashboard.reducer";
import _ from "lodash";
import { APPOINTMENT_SCHEDULED_LANE_ID } from "../../../../constants/new-patients-dashboard";
import CommentModal from "./components/CommentModal";
import MoveCardContext from "../../../../contexts/MoveCardContext";
import MoveToAppointmentScheduledStageModal from "./components/MoveToAppointmentScheduledStageModal";
import { processCardData } from "../../utils";

const CardMoveAcrossLanesModal = () => {
    const dispatch = useDispatch();

    const newPatientsDashboard = useSelector(
        (state) => state.newPatientsDashboard,
    );
    const { enqueueNotification } = useContext(NotificationsContext);

    const { moveCardData, lanes, eventBus } = newPatientsDashboard;

    const [errors, setErrors] = useState({});
    const [isSaving, setIsSaving] = useState(false);

    const fromLaneTitle = moveCardData
        ? lanes.filter((item) => item.id === moveCardData.fromLaneId)[0]
              .titleText
        : "";
    const toLaneTitle = moveCardData
        ? lanes.filter((item) => item.id === moveCardData.toLaneId)[0].titleText
        : "";

    const handleConfirmCardMoveAcrossLanes = async (payload) => {
        try {
            setIsSaving(true);

            const res = await changeState({
                id: moveCardData.cardId,
                data: payload,
            });

            const updatedCardData = processCardData(res.data);

            dispatch(
                NewPatientsDashboardReducer.cardMoveAcrossLanesAC({
                    data: { ...moveCardData, cardDetails: updatedCardData },
                }),
            );

            eventBus.publish({
                type: "MOVE_CARD",
                fromLaneId: moveCardData.fromLaneId,
                toLaneId: moveCardData.toLaneId,
                cardId: moveCardData.cardId,
                index: moveCardData.index,
            });

            eventBus.publish({
                type: "UPDATE_CARD",
                laneId: moveCardData.toLaneId,
                card: updatedCardData,
            });
        } catch (error) {
            if (error.response?.status === 422) {
                const message = error.response.data.errors.stage_id
                    ? error.response.data.errors.stage_id
                    : error.response.data.message;

                enqueueNotification("Error", message);
            } else {
                throw error;
            }
        } finally {
            setIsSaving(false);
        }
    };

    const closeModal = () => {
        dispatch(NewPatientsDashboardReducer.setMoveCardDataAC({ data: null }));
    };

    const clearError = (keys) => {
        let newErrors = _.cloneDeep(errors);

        keys.forEach((key) => {
            delete newErrors[key];
        });

        setErrors(newErrors);
    };

    if (!moveCardData) {
        return <></>;
    }

    return (
        <MoveCardContext.Provider
            value={{
                moveCardData,
                fromLaneTitle,
                toLaneTitle,
                errors,
                setErrors,
                clearError,
                isSaving,
                closeModal,
                handleConfirmCardMoveAcrossLanes,
            }}>
            {moveCardData.toLaneId === APPOINTMENT_SCHEDULED_LANE_ID ? (
                <MoveToAppointmentScheduledStageModal />
            ) : (
                <CommentModal />
            )}
        </MoveCardContext.Provider>
    );
};
export default CardMoveAcrossLanesModal;
