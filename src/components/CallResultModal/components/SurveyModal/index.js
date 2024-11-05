import React, { useContext, useState } from "react";
import CallResultContext from "../../../../contexts/CallResultContext";
import {
    FOUR_APPOINTMENTS_COMPLETE_LANE_ID,
    INITIAL_APPOINTMENT_COMPLETE_LANE_ID,
    INITIAL_SURVEY_COMMENT_TYPE,
} from "../../../../constants/new-patients-dashboard";
import SurveyModalContext from "../../../../contexts/SurveyModalContext";
import InitialSurveyModal from "./components/InitialSurveyModal";
import SecondSurveyModal from "./components/SecondSurveyModal";

const initialFormData = {
    comment: "",
    comment_type: INITIAL_SURVEY_COMMENT_TYPE,
    appointment_id: null,
    metadata: {
        suggestions: "",
    },
};

const SurveyModal = () => {
    const {
        currentInquiry,
        errors,
        setErrors,
        clearError,
        showModal,
        closeModal,
        isSaving,
        handleSubmit,
    } = useContext(CallResultContext);

    const [formData, setFormData] = useState(initialFormData);
    const [hasSuggestions, setHasSuggestions] = useState(false);
    const [completedAppointments, setCompletedAppointments] = useState([]);

    const handleInputComment = (e) => {
        const value = e.target.value;

        if (value) {
            clearError(["comment"]);
        }

        setFormData({ ...formData, comment: value });
    };

    const handleInputSuggestions = (e) => {
        const value = e.target.value;

        if (value) {
            clearError(["suggestions"]);
        }

        setFormData({
            ...formData,
            metadata: { ...formData.metadata, suggestions: value },
        });
    };

    const handleStarClick = (index, fieldName) => {
        setFormData({
            ...formData,
            metadata: { ...formData.metadata, [fieldName]: index + 1 },
        });
        clearError([fieldName]);
    };

    const handleHasSuggestionsChange = (e) => {
        setHasSuggestions(e.target.value === "Yes");
        if (e.target.value === "No") {
            setFormData({
                ...formData,
                metadata: { ...formData.metadata, suggestions: "" },
            });
            clearError(["suggestions"]);
        }
    };

    const handleCloseModal = () => {
        closeModal();
        resetModal();
    };

    const resetModal = () => {
        setFormData(initialFormData);
        setCompletedAppointments([]);
        setHasSuggestions(false);
        setErrors({});
    };

    const getSurveyModalComponent = () => {
        let component = <></>;

        if (!currentInquiry) {
            return component;
        }

        if (currentInquiry.stageId === INITIAL_APPOINTMENT_COMPLETE_LANE_ID) {
            component = <InitialSurveyModal />;
        }

        if (currentInquiry.stageId === FOUR_APPOINTMENTS_COMPLETE_LANE_ID) {
            component = <SecondSurveyModal />;
        }

        return component;
    };

    const surveyModalComponent = getSurveyModalComponent();

    return (
        <SurveyModalContext.Provider
            value={{
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
            }}>
            {surveyModalComponent}
        </SurveyModalContext.Provider>
    );
};

export default SurveyModal;
