import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import classNames from "classnames";
import ChangeStageIcon from "../../../../../../assets/icons/change-stage.svg";
import * as utils from "../../../../../../utilities/newPatientsCrmUtils";
import MoveCardContext from "../../../../../../contexts/MoveCardContext";

const CommentModal = () => {
    const {
        moveCardData,
        fromLaneTitle,
        toLaneTitle,
        errors,
        setErrors,
        clearError,
        isSaving,
        closeModal,
        handleConfirmCardMoveAcrossLanes,
    } = useContext(MoveCardContext);

    const [comment, setComment] = useState("");

    const validate = () => {
        let errors = {};

        if (!comment) {
            errors.comment = "Comment field is required.";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const getFormData = () => {
        return {
            stage_id: moveCardData.toLaneId,
            comment,
        };
    }

    const handleModalConfirm = async () => {
        if (!validate()) {
            return;
        }

        const formData = getFormData();

        await handleConfirmCardMoveAcrossLanes(formData);

        resetModalData();
        closeModal();
    };

    const handleModalCancel = () => {
        resetModalData();
        closeModal();
    };

    const inputComment = (e) => {
        const value = e.target.value;

        setComment(value);

        if (value) {
            clearError(["comment"]);
        }
    };

    const resetModalData = () => {
        setComment("");
        setErrors({});
    };

    return (
        <Modal
            show={moveCardData}
            className="custom-modal"
            backdrop="true"
            onHide={handleModalCancel}
            centered>
            <Modal.Header closeButton>
                <div>Сhange inquiry stage:</div>
                <div className="name">
                    {utils.getInquirableFullname(
                        moveCardData.cardDetails.inquirable,
                    )}
                </div>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="d-flex align-items-center gap-2 fs-16">
                        <div>
                            From:{" "}
                            <span className="stage">"{fromLaneTitle}"</span>
                        </div>
                        <img src={ChangeStageIcon} alt="change-stage-icon" />
                        <div>
                            To: <span className="stage">"{toLaneTitle}"</span>
                        </div>
                    </div>
                    <div className="custom-form-group mt-4">
                        <label>
                            Comment <span className={"text-danger"}>*</span>
                        </label>
                        <input
                            placeholder="Add your comment..."
                            className={classNames(
                                "form-control",
                                errors.comment && "is-invalid",
                            )}
                            style={{ backgroundColor: "#fcfcfc" }}
                            autoFocus
                            value={comment}
                            onChange={inputComment}
                        />
                        <div className="invalid-feedback">{errors.comment}</div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-end">
                        {isSaving ? (
                            <div
                                className="text-primary spinner-border spinner-border-md"
                                role="status"></div>
                        ) : (
                            <div className="d-flex align-items-center justify-content-end gap-2">
                                <button
                                    className="btn btn-large btn-outline-primary"
                                    onClick={handleModalCancel}>
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-large btn-primary"
                                    onClick={handleModalConfirm}>
                                    Confirm
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CommentModal;
