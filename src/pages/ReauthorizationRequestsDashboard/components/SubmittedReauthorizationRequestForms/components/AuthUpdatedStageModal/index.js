import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import CircleLoaderWithOverlay from "../../../../../../components/CircleLoaderWithOverlay";
import { updateAuthNumber } from "../../../../../../api/pages/reauthorization-request-dashboard-page";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ThemeProvider } from "@mui/material";
import { datepickerTheme } from "../../date-picker-theme";
import NotificationsContext from "../../../../../../contexts/NotificationsContext";
import {
    AUTH_UPDATED_STAGE_ID
} from "../../../../../../constants/reauthorization-request-dashboard";
import {useSelector} from "react-redux";
import ChangeStageIcon from "../../../../../../assets/icons/change-stage.svg";

const AuthUpdatedStageModal = ({
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

    const getInitialFormData = () => {
        let initialFormData = {
            patient_id: requestForm.patient_id,
            auth_number: "",
            visits_auth: "",
            eff_start_date: "",
            eff_stop_date: "",
        };

        if (requestForm.future_auth_number_data) {
            initialFormData.auth_number =
                requestForm.future_auth_number_data.auth_number || "";
            initialFormData.visits_auth =
                requestForm.future_auth_number_data.visits_auth || "";
            initialFormData.visits_auth =
                requestForm.future_auth_number_data.visits_auth || "";
            initialFormData.eff_start_date =
                requestForm.future_auth_number_data.eff_start_date || "";
            initialFormData.eff_stop_date =
                requestForm.future_auth_number_data.eff_stop_date || "";
        }

        return initialFormData;
    };
    const initialFormData = getInitialFormData();

    const [formData, setFormData] = useState(initialFormData);

    const { enqueueNotification } = useContext(NotificationsContext);

    useEffect(() => {
        const initialFormData = getInitialFormData();

        if (formData !== initialFormData) {
            setFormData(initialFormData);
        }
    }, [requestForm]);

    if (!requestForm) {
        return <></>;
    }

    const oldStageName = stages.find((stage) => stage.id === requestForm.stage).name;
    const newStageName = stages.find((stage) => stage.id === AUTH_UPDATED_STAGE_ID).name;

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

        for (const key in formData) {
            if (!formData[key]) {
                errors[key] = true;
            }
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

            await updateAuthNumber(formData);

            enqueueNotification(
                "Success",
                "Authorization number successfully updated",
            );

            await parentCallback(formData);

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
                <div className="d-flex gap-2">
                    <div className="custom-form-group flex-grow-1">
                        <label>
                            Authorization Number{" "}
                            <span className={"text-danger"}>*</span>
                        </label>
                        <input
                            className={classNames(
                                "form-control",
                                !!errors.auth_number && "is-invalid",
                            )}
                            style={{ backgroundColor: "#fcfcfc" }}
                            autoFocus
                            value={formData.auth_number}
                            onChange={(e) =>
                                handleInputChange("auth_number", e.target.value)
                            }
                        />
                        <div className="invalid-feedback">
                            Auth Number field is required
                        </div>
                    </div>
                    <div className="custom-form-group flex-grow-1">
                        <label>
                            No. of Visits Authorized{" "}
                            <span className={"text-danger"}>*</span>
                        </label>
                        <input
                            className={classNames(
                                "form-control",
                                !!errors.visits_auth && "is-invalid",
                            )}
                            style={{ backgroundColor: "#fcfcfc" }}
                            value={formData.visits_auth}
                            onChange={(e) =>
                                handleInputChange("visits_auth", e.target.value)
                            }
                        />
                        <div className="invalid-feedback">
                            No. of Visits Authorized field is required
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <div className="custom-form-group w-100">
                        <label>
                            Eff. Start Date{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <ThemeProvider theme={datepickerTheme}>
                                <DatePicker
                                    defaultValue={
                                        formData.eff_start_date
                                            ? dayjs(formData.eff_start_date)
                                            : null
                                    }
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
                            className={classNames(
                                "form-control",
                                errors.eff_start_date && "is-invalid",
                            )}
                            value={formData.eff_start_date}
                            type="date"
                        />
                        <div className="invalid-feedback">
                            Eff. Start Date field is required
                        </div>
                    </div>
                    <div className="custom-form-group w-100">
                        <label>
                            Eff. Stop Date{" "}
                            <span className="text-danger">*</span>
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <ThemeProvider theme={datepickerTheme}>
                                <DatePicker
                                    defaultValue={
                                        formData.eff_stop_date
                                            ? dayjs(formData.eff_stop_date)
                                            : null
                                    }
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
                            className={classNames(
                                "form-control",
                                errors.eff_stop_date && "is-invalid",
                            )}
                            value={formData.eff_stop_date}
                            type="date"
                        />
                        <div className="invalid-feedback">
                            Eff. Stop Date field is required
                        </div>
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

export default AuthUpdatedStageModal;
