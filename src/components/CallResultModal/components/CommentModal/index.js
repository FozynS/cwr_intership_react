import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import CallResultContext from "../../../../contexts/CallResultContext";

const initialFormData = { comment: "" };

const CommentModal = () => {
    const {
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
            await handleSubmit(formData);

            handleCloseModal();
        } catch (err) {

        }
    };

    const handleCloseModal = () => {
        closeModal();
        resetModal();
    }

    const resetModal = () => {
        setFormData(initialFormData);
        setErrors({});
    }

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

export default CommentModal;
