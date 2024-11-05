import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import classNames from "classnames";
import CircleLoaderWithOverlay from "../../../../../../components/CircleLoaderWithOverlay";

const SaveLogModal = ({ show, closeModal, handleClick, title }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState({});

    const resetModal = () => {
        setComment("");
        setErrors("");
        setIsLoading(false);
    };

    const handleModalCancel = () => {
        resetModal();
        closeModal();
    };

    const handleCommentInput = (e) => {
        if (comment.length > 0) {
            setErrors({});
        }

        setComment(e.target.value);
    };

    const validate = () => {
        let errors = {};

        if (comment.length === 0) {
            errors.comment = true;
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const confirmClick = async () => {
        if (!validate()) {
            return;
        }

        setIsLoading(true);
        await handleClick(comment);
        setIsLoading(false);
        closeModal();
        resetModal();
    };

    return (
        <Modal
            show={show}
            size="sm"
            onHide={closeModal}
            centered
            className={"custom-modal"}>
            <ModalHeader closeButton>
                <div>{title}</div>
            </ModalHeader>
            <ModalBody>
                <div className="custom-form-group">
                    <label>
                        Comment <span className={"text-danger"}>*</span>
                    </label>
                    <input
                        placeholder="Add your comment..."
                        className={classNames(
                            "form-control",
                            !!errors.comment && "is-invalid",
                        )}
                        style={{ backgroundColor: "#fcfcfc" }}
                        autoFocus
                        value={comment}
                        onChange={handleCommentInput}
                    />
                    <div className="invalid-feedback">
                        Comment field is required.
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-end gap-2">
                        <button
                            className="btn btn-large btn-outline-primary"
                            onClick={handleModalCancel}>
                            Cancel
                        </button>
                        <button
                            className="btn btn-large btn-primary"
                            onClick={confirmClick}>
                            Confirm
                        </button>
                    </div>
                </div>
            </ModalBody>
            {isLoading && <CircleLoaderWithOverlay />}
        </Modal>
    );
};

export default SaveLogModal;
