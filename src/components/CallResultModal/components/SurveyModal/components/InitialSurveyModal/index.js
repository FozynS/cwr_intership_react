import React, { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import classNames from "classnames";
import {
    createInitialSurveyComment,
    getCompletedInitialAppointment,
} from "../../../../../../api/pages/new-patients-dashboard-page";
import { useDispatch, useSelector } from "react-redux";
import { cardMoveAcrossLanesAC } from "../../../../../../store/reducers/newPatientsDashboard.reducer";
import {
    INITIAL_SURVEY_COMMENT_TYPE,
    INITIAL_SURVEY_COMPLETE_LANE_ID,
} from "../../../../../../constants/new-patients-dashboard";
import StarRating from "../../../../../StarRating";
import SurveyAppointmentsInfo from "../SurveyAppointmentsInfo";
import SurveyModalContext from "../../../../../../contexts/SurveyModalContext";

const initialFormData = {
    comment: "",
    comment_type: INITIAL_SURVEY_COMMENT_TYPE,
    appointment_id: null,
    metadata: {
        service_rate: 0,
        provider_rate: 0,
        suggestions: "",
    },
};

const InitialSurveyModal = () => {
    const dispatch = useDispatch();

    const { eventBus } = useSelector((state) => state.newPatientsDashboard);

    const {
        showModal,
        isSaving,
        currentInquiry,
        formData,
        setFormData,
        handleSubmit,
        completedAppointments,
        setCompletedAppointments,
        handleInputComment,
        hasSuggestions,
        handleHasSuggestionsChange,
        handleInputSuggestions,
        handleStarClick,
        errors,
        setErrors,
        handleCloseModal,
    } = useContext(SurveyModalContext);

    const validate = () => {
        let errors = {};

        if (!formData.comment) {
            errors.comment = "Field is required.";
        }

        if (formData.metadata.service_rate === 0) {
            errors.service_rate = "Field is required.";
        }

        if (formData.metadata.provider_rate === 0) {
            errors.provider_rate = "Field is required.";
        }

        if (hasSuggestions && !formData.metadata.suggestions) {
            errors.suggestions = "Field is required.";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSaveClick = async () => {
        if (!validate()) {
            return;
        }

        try {
            const payload = { comment: formData.comment };

            await Promise.all([
                createInitialSurveyComment({
                    id: currentInquiry.id,
                    data: formData,
                }),
                handleSubmit(payload),
            ]);

            updateCardOnBoard();

            handleCloseModal();
        } catch (error) {}
    };

    const updateCardOnBoard = () => {
        const newStageId = INITIAL_SURVEY_COMPLETE_LANE_ID;

        const updatedCard = {
            ...currentInquiry,
            initialSurveyComplete: true,
            stageId: newStageId,
        };

        dispatch(
            cardMoveAcrossLanesAC({
                data: {
                    cardDetails: updatedCard,
                    fromLaneId: currentInquiry.stageId,
                    toLaneId: newStageId,
                    cardId: currentInquiry.id,
                    index: 0,
                },
            }),
        );

        eventBus.publish({
            type: "MOVE_CARD",
            fromLaneId: currentInquiry.stageId,
            toLaneId: newStageId,
            cardId: currentInquiry.id,
            index: 0,
        });

        eventBus.publish({
            type: "UPDATE_CARD",
            laneId: newStageId,
            card: updatedCard,
        });
    };

    useEffect(() => {
        if (!showModal) {
            return;
        }

        getCompletedInitialAppointment(currentInquiry.id).then(({ data }) => {
            setCompletedAppointments([data]);
            const a = {
                ...initialFormData,
                appointment_id: data.id,
            };

            setFormData(a);
        });
    }, [showModal]);

    return (
        <Modal
            show={showModal}
            className="custom-modal"
            backdrop="true"
            onHide={handleCloseModal}
            centered>
            <Modal.Header closeButton>
                <h4 className="m-0">Call Comment</h4>
            </Modal.Header>
            <Modal.Body>
                <SurveyAppointmentsInfo appointments={completedAppointments} />
                <div className="form-group custom-form-group">
                    <textarea
                        name="comment"
                        id="comment"
                        className={classNames(
                            "form-control",
                            errors.comment && "is-invalid",
                        )}
                        rows="4"
                        placeholder="Add your comment..."
                        value={formData.comment}
                        onChange={handleInputComment}
                    />
                    <div className="invalid-feedback">{errors.comment}</div>
                </div>
                <div className="form-group custom-form-group">
                    <label className="form-label fw-bold">
                        On a scale of 1-5 (with 5 being the highest) how do you
                        rate the services you just received?
                    </label>
                    <StarRating
                        value={formData.metadata.service_rate}
                        fieldName="service_rate"
                        handleStarClick={handleStarClick}
                    />
                    <input
                        hidden
                        className={classNames(
                            errors.service_rate && "is-invalid",
                        )}
                    />
                    <div className="invalid-feedback">
                        {errors.service_rate}
                    </div>
                </div>
                <div className="form-group custom-form-group">
                    <label className="form-label fw-bold">
                        On a scale of 1-5 (with 5 being the highest) how do you
                        rate the provider that was assigned to you?
                    </label>
                    <StarRating
                        value={formData.metadata.provider_rate}
                        fieldName="provider_rate"
                        handleStarClick={handleStarClick}
                    />
                    <input
                        hidden
                        className={classNames(
                            errors.provider_rate && "is-invalid",
                        )}
                    />
                    <div className="invalid-feedback">
                        {errors.provider_rate}
                    </div>
                </div>
                <div className="form-group custom-form-group">
                    <label className="form-label fw-bold">
                        Do you have any suggestions as to how we can elevate
                        your experience with Change WithinReach?
                    </label>
                    <div className="d-flex gap-2">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="experience"
                                value="Yes"
                                checked={hasSuggestions}
                                onChange={handleHasSuggestionsChange}
                                className="form-check-input"
                            />{" "}
                            Yes
                        </label>
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="experience"
                                value="No"
                                checked={!hasSuggestions}
                                onChange={handleHasSuggestionsChange}
                                className="form-check-input"
                            />{" "}
                            No
                        </label>
                    </div>
                    {hasSuggestions && (
                        <div className="mt-1">
                            <textarea
                                name="suggestions"
                                id="suggestions"
                                className={classNames(
                                    "form-control",
                                    errors.suggestions && "is-invalid",
                                )}
                                rows="4"
                                value={formData.metadata.suggestions}
                                onChange={handleInputSuggestions}
                                placeholder="Enter suggestions..."
                            />
                            <div className="invalid-feedback">
                                {errors.suggestions}
                            </div>
                        </div>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                {isSaving ? (
                    <div
                        className="text-primary spinner-border spinner-border-md"
                        role="status"></div>
                ) : (
                    <button
                        className="btn btn-primary btn-large text-white"
                        onClick={handleSaveClick}>
                        Save
                    </button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default InitialSurveyModal;
