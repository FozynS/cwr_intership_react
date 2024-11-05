import React, { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import classNames from "classnames";
import {
    createSecondSurveyComment,
    getCompletedAppointments,
} from "../../../../../../api/pages/new-patients-dashboard-page";
import { useDispatch, useSelector } from "react-redux";
import { updateCardDataAC } from "../../../../../../store/reducers/newPatientsDashboard.reducer";
import { SECOND_SURVEY_COMMENT_TYPE } from "../../../../../../constants/new-patients-dashboard";
import StarRating from "../../../../../StarRating";
import SurveyAppointmentsInfo from "../SurveyAppointmentsInfo";
import SurveyModalContext from "../../../../../../contexts/SurveyModalContext";

const initialFormData = {
    comment: "",
    comment_type: SECOND_SURVEY_COMMENT_TYPE,
    appointment_id: null,
    metadata: {
        therapist_understanding_support_rate: 0,
        therapy_atmosphere_rate: 0,
        therapist_openness_share_rate: 0,
        therapy_session_after_feelings_rate: 0,
        suggestions: "",
    },
};

const SecondSurveyModal = () => {
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

        if (formData.metadata.therapist_understanding_support_rate === 0) {
            errors.therapist_understanding_support_rate = "Field is required.";
        }

        if (formData.metadata.therapy_atmosphere_rate === 0) {
            errors.therapy_atmosphere_rate = "Field is required.";
        }

        if (formData.metadata.therapist_openness_share_rate === 0) {
            errors.therapist_openness_share_rate = "Field is required.";
        }

        if (formData.metadata.therapy_session_after_feelings_rate === 0) {
            errors.therapy_session_after_feelings_rate = "Field is required.";
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
                createSecondSurveyComment({
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
        const stageId = currentInquiry.stageId;

        const updatedCard = {
            ...currentInquiry,
            secondSurveyComplete: true,
        };

        dispatch(
            updateCardDataAC({
                data: updatedCard,
                meta: {
                    stageId: stageId,
                    id: currentInquiry.id,
                },
            }),
        );

        eventBus.publish({
            type: "UPDATE_CARD",
            laneId: stageId,
            card: updatedCard,
        });
    };

    useEffect(() => {
        if (!showModal) {
            return;
        }

        getCompletedAppointments(currentInquiry.id).then(({ data }) => {
            setCompletedAppointments(data);
            setFormData({
                ...initialFormData,
                appointment_id: data[0].id,
            });
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
                        How well do you feel understood and supported by your
                        therapist? Please rate from 1 to 5 stars, where 1 star
                        means 'not at all' and 5 stars means 'completely'.
                    </label>
                    <StarRating
                        value={
                            formData.metadata
                                .therapist_understanding_support_rate
                        }
                        fieldName="therapist_understanding_support_rate"
                        handleStarClick={handleStarClick}
                    />
                    <input
                        hidden
                        className={classNames(
                            errors.therapist_understanding_support_rate &&
                                "is-invalid",
                        )}
                    />
                    <div className="invalid-feedback">
                        {errors.therapist_understanding_support_rate}
                    </div>
                </div>
                <div className="form-group custom-form-group">
                    <label className="form-label fw-bold">
                        How would you rate the overall atmosphere or vibe during
                        your therapy sessions? Please rate from 1 to 5 stars,
                        where 1 star means 'very poor' and 5 stars means
                        'excellent'.
                    </label>
                    <StarRating
                        value={formData.metadata.therapy_atmosphere_rate}
                        fieldName="therapy_atmosphere_rate"
                        handleStarClick={handleStarClick}
                    />
                    <input
                        hidden
                        className={classNames(
                            errors.therapy_atmosphere_rate && "is-invalid",
                        )}
                    />
                    <div className="invalid-feedback">
                        {errors.therapy_atmosphere_rate}
                    </div>
                </div>
                <div className="form-group custom-form-group">
                    <label className="form-label fw-bold">
                        How easy has it been for you to open up and share with
                        your therapist? Please rate from 1 to 5 stars, where 1
                        star means 'very difficult' and 5 stars means 'very
                        easy'.
                    </label>
                    <StarRating
                        value={formData.metadata.therapist_openness_share_rate}
                        fieldName="therapist_openness_share_rate"
                        handleStarClick={handleStarClick}
                    />
                    <input
                        hidden
                        className={classNames(
                            errors.therapist_openness_share_rate &&
                                "is-invalid",
                        )}
                    />
                    <div className="invalid-feedback">
                        {errors.therapist_openness_share_rate}
                    </div>
                </div>
                <div className="form-group custom-form-group">
                    <label className="form-label fw-bold">
                        How do you feel after your therapy sessions? Please rate
                        your sense of being heard and validated from 1 to 5
                        stars, where 1 star means 'not at all' and 5 stars means
                        'completely'.
                    </label>
                    <StarRating
                        value={
                            formData.metadata
                                .therapy_session_after_feelings_rate
                        }
                        fieldName="therapy_session_after_feelings_rate"
                        handleStarClick={handleStarClick}
                    />
                    <input
                        hidden
                        className={classNames(
                            errors.therapy_session_after_feelings_rate &&
                                "is-invalid",
                        )}
                    />
                    <div className="invalid-feedback">
                        {errors.therapy_session_after_feelings_rate}
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

export default SecondSurveyModal;
