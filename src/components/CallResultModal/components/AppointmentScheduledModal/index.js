import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CallResultContext from "../../../../contexts/CallResultContext";
import moment from "moment-timezone";
import { mdiCheckBold, mdiClose, mdiExclamationThick } from "@mdi/js";
import Icon from "@mdi/react";
import { CREDIT_CARD_ON_FOLE_FORM_TYPE_ID, ONBOARDING_COMPLETE_LANE_ID } from "../../../../constants/new-patients-dashboard";
import styles from "./index.module.scss";
import classNames from "classnames";
import { createOnboardingCompleteComment } from "../../../../api/pages/new-patients-dashboard-page";
import { useDispatch, useSelector } from "react-redux";
import * as NewPatientsDashboardReducer from "../../../../store/reducers/newPatientsDashboard.reducer";
import { getUsFormat } from "../../../../mixins/phone-format";

const AppointmentScheduledModal = () => {
    const dispatch = useDispatch();

    const { user, callLog } = useSelector((state) => state.app);
    const { eventBus } = useSelector((state) => state.newPatientsDashboard);

    const initialFormData = { comment: "", phone: "" };

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

    const handleInputComment = (e) => {
        const value = e.target.value;

        if (value) {
            clearError(["comment"]);
        }

        setFormData({ ...formData, comment: value });
    };

    const validate = () => {
        let errors = {};

        if (!formData.comment) {
            errors.comment = "Field is required.";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSaveClick = async () => {
        if (!validate()) {
            return;
        }

        try {
            const [commentResult, submitResult] = await Promise.all([
                createOnboardingCompleteComment({
                    id: currentInquiry.id,
                    data: formData,
                }),
                handleSubmit(formData),
            ]);

            const onboardingCompleteComment = {...commentResult.data, admin: user};

            const newStageId = ONBOARDING_COMPLETE_LANE_ID;

            const updatedCardData = {
                ...currentInquiry,
                onboardingCompleteComment,
                stageId: newStageId,
            };

            dispatch(
                NewPatientsDashboardReducer.cardMoveAcrossLanesAC({
                    data: {
                        cardDetails: updatedCardData,
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
                card: updatedCardData,
            });
    
            handleCloseModal();
        } catch (error) {

        }
    };

    useEffect(() => {
        if (callLog) {
            setFormData({...formData, phone: callLog.phone_to});
        }
    }, [callLog])

    const handleCloseModal = () => {
        closeModal();
        resetModal();
    }

    const resetModal = () => {
        setFormData(initialFormData);
        setErrors({});
    }

    const { onboardingDate, onboardingTime } = currentInquiry;

    const formattedOnboardingDate = onboardingDate
        ? moment(onboardingDate, "YYYY-MM-DD").format("MM/DD/YYYY")
        : "-";

    const formattedOnboardingTime = onboardingTime || "-";

    let coPay = "-";
    let deductible = "-";

    const alert = currentInquiry.inquirable.alert;
    if (alert) {
        coPay = `$${alert.co_pay}`;
        deductible = `$${alert.deductible}`;
    }

    const onboardingPhone = currentInquiry.onboardingPhone
        ? getUsFormat(currentInquiry.onboardingPhone)
        : "-";

    const formsIsFilled = Boolean(currentInquiry.inquirable.last_document);

    const requireCreditCard =
        currentInquiry.inquirable.last_document_request?.items.some(
            (item) => item.form_type_id === CREDIT_CARD_ON_FOLE_FORM_TYPE_ID,
        );

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
                <div className="form-group custom-form-group">
                    <textarea
                        name="comment"
                        id="comment"
                        className={`form-control ${
                            errors.comment ? "is-invalid" : ""
                        }`}
                        rows="4"
                        placeholder="Add your comment..."
                        value={formData.comment}
                        onChange={handleInputComment}
                    />
                    <div className="invalid-feedback">{errors.comment}</div>
                </div>
                <div className="d-flex">
                    <div className="w-50 d-flex flex-column gap-2">
                        <div className="d-flex flex-column">
                            <div className="fw-bold">Onboarding time:</div>
                            <div>
                                {`${formattedOnboardingDate} ${formattedOnboardingTime}`}
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <div className="fw-bold">Co-pay:</div>
                            <div>{coPay || "-"}</div>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <div className="fw-bold">Deductible:</div>
                            <div>{deductible || "-"}</div>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="fw-bold">Message:</div>
                            <div>
                                {currentInquiry.inquirable.alert?.message ||
                                    "-"}
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <div className="fw-bold">Phone:</div>
                            <div>{onboardingPhone}</div>
                        </div>
                    </div>
                    <div className="w-50">
                        <div className="d-flex align-items-center gap-1">
                            <div
                                className={classNames(
                                    styles.indicator,
                                    formsIsFilled
                                        ? styles.green
                                        : styles.yellow,
                                )}>
                                <Icon
                                    path={
                                        formsIsFilled
                                            ? mdiCheckBold
                                            : mdiExclamationThick
                                    }
                                    size={0.4}
                                />
                            </div>
                            <span>All forms</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <div
                                className={classNames(
                                    styles.indicator,
                                    requireCreditCard
                                        ? styles.green
                                        : styles.red,
                                )}>
                                <Icon
                                    path={
                                        requireCreditCard
                                            ? mdiCheckBold
                                            : mdiClose
                                    }
                                    size={0.4}
                                />
                            </div>
                            <span>Require credit card</span>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                {isSaving ? 
                    <div
                    className="text-primary spinner-border spinner-border-md"
                    role="status"></div> 
                : 
                    <button
                        className="btn btn-primary btn-large text-white"
                        onClick={handleSaveClick}>
                        Save
                    </button>
                }
            </Modal.Footer>
        </Modal>
    );
};

export default AppointmentScheduledModal;
