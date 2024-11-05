import classNames from "classnames";
import React, { useContext, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import CircleLoaderWithOverlay from "../../../../../../components/CircleLoaderWithOverlay";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ThemeProvider } from "@mui/material";
import { datepickerTheme } from "../../date-picker-theme";
import NotificationsContext from "../../../../../../contexts/NotificationsContext";
import { saveFutureInsuranceReauthorizationData } from "../../../../../../api/pages/reauthorization-request-dashboard-page";
import {APPROVAL_RECEIVED_STAGE_ID} from "../../../../../../constants/reauthorization-request-dashboard";
import {useSelector} from "react-redux";
import ChangeStageIcon from "../../../../../../assets/icons/change-stage.svg";

const ApprovalReceivedStageModal = ({
    parentCallback,
    show,
    closeModal,
    requestForm,
}) => {
    const { stages } = useSelector(
        (state) => state.reauthorizationRequestsDashboard.submittedReauthorizationRequestForms,
    );

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const initialFormData = {
        auth_number: "",
        visits_auth: "",
        eff_start_date: "",
        eff_stop_date: "",
        comment: "",
    };
    const [formData, setFormData] = useState(initialFormData);

    const { enqueueNotification } = useContext(NotificationsContext);

    if (!requestForm) {
        return <></>;
    }

    const inputBackgroundColor = "#fcfcfc";

    const oldStageName = stages.find((stage) => stage.id === requestForm.stage).name;
    const newStageName = stages.find((stage) => stage.id === APPROVAL_RECEIVED_STAGE_ID).name;

    const resetModal = () => {
        setFormData(initialFormData);
        setErrors({});
        setIsLoading(false);
    };

    const handleModalCancel = () => {
        resetModal();
        closeModal();
    };

    const validate = () => {
        let errors = {};

        if (!formData.comment) {
            errors.comment = true;
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleUpdateClick = async () => {
        try {
            if (!validate()) {
                return;
            }

            setIsLoading(true);

            const payload = {
                auth_number: formData.auth_number,
                visits_auth: formData.visits_auth,
                eff_start_date: formData.eff_start_date,
                eff_stop_date: formData.eff_stop_date,
            };
            await saveFutureInsuranceReauthorizationData(requestForm.id, payload);

            await parentCallback(payload, formData.comment);

            handleModalCancel();
        } catch (e) {
            enqueueNotification("Error", "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
        if (errors[key]) {
            setErrors({ ...errors, [key]: "" });
        }
    };

    return (
        <Modal
            show={show}
            size="sm"
            onHide={closeModal}
            centered
            className={"custom-modal"}>
            <ModalHeader closeButton>
                <div>Change stage: {requestForm.patient_name}</div>
            </ModalHeader>
            <ModalBody>
                <div className="d-flex align-items-center gap-2 fs-16">
                    <div>
                        From:{" "}
                        <span className="stage">"{oldStageName}"</span>
                    </div>
                    <img src={ChangeStageIcon} alt="change-stage-icon" />
                    <div>
                        To: <span className="stage">"{newStageName}"</span>
                    </div>
                </div>
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
                        style={{ backgroundColor: inputBackgroundColor }}
                        autoFocus
                        value={formData.comment}
                        onChange={(e) =>
                            handleInputChange("comment", e.target.value)
                        }
                    />
                    <div className="invalid-feedback">
                        Comment field is required.
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <div className="custom-form-group flex-grow-1">
                        <label>Authorization Number</label>
                        <input
                            className="form-control"
                            style={{ backgroundColor: inputBackgroundColor }}
                            value={formData.auth_number}
                            onChange={(e) =>
                                handleInputChange("auth_number", e.target.value)
                            }
                        />
                    </div>
                    <div className="custom-form-group flex-grow-1">
                        <label>No. of Visits Authorized</label>
                        <input
                            className="form-control"
                            style={{ backgroundColor: inputBackgroundColor }}
                            value={formData.visits_auth}
                            onChange={(e) =>
                                handleInputChange("visits_auth", e.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <div className="custom-form-group w-100">
                        <label>Eff. Start Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <ThemeProvider theme={datepickerTheme}>
                                <DatePicker
                                    value={
                                        formData.eff_start_date
                                            ? dayjs(formData.eff_start_date)
                                            : null
                                    }
                                    onChange={(value) =>
                                        handleInputChange(
                                            "eff_start_date",
                                            dayjs(value).format("YYYY-MM-DD"),
                                        )
                                    }
                                    openTo="year"
                                />
                            </ThemeProvider>
                        </LocalizationProvider>

                        <input
                            readOnly
                            hidden
                            className="form-control"
                            value={formData.eff_start_date}
                            type="date"
                        />
                    </div>
                    <div className="custom-form-group w-100">
                        <label>Eff. Stop Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <ThemeProvider theme={datepickerTheme}>
                                <DatePicker
                                    value={
                                        formData.eff_stop_date
                                            ? dayjs(formData.eff_stop_date)
                                            : null
                                    }
                                    onChange={(value) =>
                                        handleInputChange(
                                            "eff_stop_date",
                                            dayjs(value).format("YYYY-MM-DD"),
                                        )
                                    }
                                    openTo={"year"}
                                />
                            </ThemeProvider>
                        </LocalizationProvider>

                        <input
                            readOnly
                            hidden
                            className="form-control"
                            value={formData.eff_stop_date}
                            type="date"
                        />
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
                            onClick={handleUpdateClick}>
                            Update
                        </button>
                    </div>
                </div>
            </ModalBody>
            {isLoading && <CircleLoaderWithOverlay />}
        </Modal>
    );
};

export default ApprovalReceivedStageModal;
