import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import PhoneInput from "../../../../../../components/Inputs/PhoneInput";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField, ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styles from "./index.module.scss";
import MoveCardContext from "../../../../../../contexts/MoveCardContext";
import { Modal } from "react-bootstrap";
import ChangeStageIcon from "../../../../../../assets/icons/change-stage.svg";
import * as utils from "../../../../../../utilities/newPatientsCrmUtils";
import { datepickerTheme } from "./date-picker-theme";
import dayjs from "dayjs";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { DEFAULT_CANCELLATION_FEE } from "../../../../../../constants";

const PAYMENT_FOR_SERVICE_FORM_NAME = "payment_for_service";
const CONFIDENTIAL_INFORMATION_FORM_NAME = "confidential_information";

const initialForms = [
    {
        name: "new_patient",
        title: "Patient Information / Informed Consent / Privacy Notice",
        metadata: {},
    },
    {
        name: PAYMENT_FOR_SERVICE_FORM_NAME,
        title: "Payment for Service and Fee Arrangements",
        metadata: {
            co_pay: 0,
            payment_for_session_not_converted: 0,
            self_pay: 0,
            charge_for_cancellation: 0,
            other_charges_price: 0,
            other_charges: "",
        },
    },
    {
        name: CONFIDENTIAL_INFORMATION_FORM_NAME,
        title: "Authorization to Release Confidential Information",
        metadata: {
            exchange_with: [],
        },
    },
    {
        name: "telehealth",
        title: "Telehealth Consent Form",
        metadata: {},
    },
    {
        name: "supporting_documents",
        title: "Supporting Documents",
        metadata: {
            documents: ["Insurance", "Driver's License"],
        },
    },
    {
        name: "credit_card_on_file",
        title: "Add a Credit Card on File ",
        metadata: {},
    },
];

const initialOnboardingFormData = {
    date: "",
    time: "",
    phone: "",
};

const MoveToAppointmentScheduledStageModal = () => {
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

    const [forms, setForms] = useState(initialForms);
    const [onboardingFormData, setOnboardingFormData] = useState(
        initialOnboardingFormData,
    );
    const [allFormsCheckbox, setAllFormsCheckbox] = useState(false);
    const [requireCreditCardCheckbox, setRequireCreditCardCheckbox] =
        useState(false);
    const [comment, setComment] = useState("");
    const [sendViaEmail, setSendViaEmail] = useState(false);
    const [email, setEmail] = useState("");
    const [sendViaSms, setSendViaSms] = useState(false);
    const [phone, setPhone] = useState("");
    const [exchangeWithName, setExchangeWithName] = useState("");
    const [openTimepicker, setOpenTimepicker] = useState(false);

    const handleAllFormsCheckboxChange = (e) => {
        const value = e.target.checked;

        if (!value) {
            setRequireCreditCardCheckbox(false);
            setSendViaEmail(false);
            setSendViaSms(false);

            clearError(["email", "phone", "exchange_with_name", "send_via", "other_charges"]);
        }

        setAllFormsCheckbox(value);
    };

    const handleSendViaEmailCheckboxChange = (e) => {
        const value = e.target.checked;

        if (!value) {
            clearError(["email"]);
        }

        clearError(["send_via"]);

        setSendViaEmail(value);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);
    };

    const handleInputEmail = (e) => {
        const value = e.target.value.trim();

        if (isValidEmail(value)) {
            clearError(["email"]);
        }

        setEmail(value);
    };

    const handleSendViaSmsCheckboxChange = (e) => {
        const value = e.target.checked;

        if (!value) {
            let newErrors = _.cloneDeep(errors);
            delete newErrors.phone;
            setErrors(newErrors);
        }

        clearError(["send_via"]);

        setSendViaSms(value);
    };

    const isValidPhoneNumber = (phone) => {
        return phone.length === 10;
    };

    const handleInputPhone = (value) => {
        const formattedValue = value.replace(/\D+/g, '');

        if (isValidPhoneNumber(formattedValue)) {
            clearError(["phone"]);
        }

        setPhone(formattedValue);
    };

    const handleInputOnboardingPhone = (value) => {
        const formattedValue = value.replace(/\D+/g, '');

        if (isValidPhoneNumber(formattedValue)) {
            clearError(["onboarding_phone"]);
        }

        setOnboardingFormData({ ...onboardingFormData, phone: formattedValue });
    };

    const validate = () => {
        let errors = {};

        if (sendViaEmail && !isValidEmail(email)) {
            errors.email = "Please enter a valid email.";
        }

        if (sendViaSms && !isValidPhoneNumber(phone)) {
            errors.phone = "Please enter a valid number.";
        }

        if (allFormsCheckbox) {
            if (!sendViaEmail && !sendViaSms) {
                errors.send_via = "Please select a form submission method.";
            }

            if (
                confidentialInformationForm.metadata.exchange_with.length === 0
            ) {
                errors.exchange_with_name =
                    "Please add at least one name to provide form access.";
            }

            if (
                paymentForServiceForm.metadata.other_charges_price > 0 &&
                !paymentForServiceForm.metadata.other_charges
            ) {
                errors.other_charges = "Please fill out this field.";
            }
        }

        if (
            onboardingFormData.phone &&
            !isValidPhoneNumber(onboardingFormData.phone)
        ) {
            errors.onboarding_phone = "Please enter a valid number.";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const getFormData = () => {
        const payload = {
            stage_id: moveCardData.toLaneId,
            onboarding_data: onboardingFormData,
            send_via_email: sendViaEmail,
            send_via_sms: sendViaSms,
            phone,
            email,
            comment,
        };

        if (allFormsCheckbox) {
            payload.forms = forms;

            if (!requireCreditCardCheckbox) {
                payload.forms = payload.forms.filter(
                    (form) => form.name !== "credit_card_on_file",
                );
            }
        }

        return payload;
    };

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
        setForms(initialForms);
        setOnboardingFormData(onboardingFormData);
        setAllFormsCheckbox(false);
        setRequireCreditCardCheckbox(false);
        setComment("");
        setSendViaEmail(false);
        setEmail("");
        setSendViaSms(false);
        setPhone("");
        setErrors({});
    };

    const paymentForServiceForm = forms.find(
        (form) => form.name === PAYMENT_FOR_SERVICE_FORM_NAME,
    );

    const confidentialInformationForm = forms.find(
        (form) => form.name === CONFIDENTIAL_INFORMATION_FORM_NAME,
    );

    const changePaymentFormServiceMetadata = (key, value) => {
        const updatedForms = forms.map((form) => {
            if (form.name === PAYMENT_FOR_SERVICE_FORM_NAME) {
                const metadata = { ...form.metadata, [key]: value };

                return { ...form, metadata };
            }

            return form;
        });

        const clearErrorsArray = [key];

        if (key === "other_charges_price" && Number(value) === 0) {
            clearErrorsArray.push("other_charges");
        }

        clearError(clearErrorsArray);

        setForms(updatedForms);
    };

    const batchChangePaymentFormServiceMetadata = (values, initialForms = null) => {
        if (!initialForms) {
            initialForms = forms;
        }

        const updatedForms = initialForms.map((form) => {
            if (form.name === PAYMENT_FOR_SERVICE_FORM_NAME) {
                const metadata = { ...form.metadata, ...values };

                return { ...form, metadata };
            }

            return form;
        });

        const clearErrorsArray = [];

        for (let [key, value] of Object.entries(values)) {
            clearErrorsArray.push(key);
            if (key === "other_charges_price" && Number(value) === 0) {
                clearErrorsArray.push("other_charges");
            }
        }

        clearError(clearErrorsArray);

        setForms(updatedForms);
    };

    const handleInputExchangeWithName = (e) => {
        const value = e.target.value;
        setExchangeWithName(value);

        if (value) {
            clearError(["exchange_with_name"]);
        }
    };

    const addExchangeWithValue = () => {
        const updatedForms = forms.map((form) => {
            if (form.name === CONFIDENTIAL_INFORMATION_FORM_NAME) {
                const exchangeWith = form.metadata.exchange_with;

                const metadata = {
                    ...form.metadata,
                    exchange_with: [...exchangeWith, exchangeWithName],
                };

                return { ...form, metadata };
            }

            return form;
        });

        setExchangeWithName("");

        setForms(updatedForms);
        clearError(["exchange_with_name"]);
    };

    const removeEchangeWithValue = (value) => {
        const updatedForms = forms.map((form) => {
            if (form.name === CONFIDENTIAL_INFORMATION_FORM_NAME) {
                const exchangeWith = form.metadata.exchange_with.filter(
                    (el) => el !== value,
                );

                const metadata = {
                    ...form.metadata,
                    exchange_with: exchangeWith,
                };

                return { ...form, metadata };
            }

            return form;
        });

        setExchangeWithName("");

        setForms(updatedForms);
    };

    const initExchangeWithInForms = (primaryInsurance) => {
        const updatedForms = forms.map((form) => {
            if (form.name === CONFIDENTIAL_INFORMATION_FORM_NAME) {
                const metadata = {
                    ...form.metadata,
                    exchange_with: [ primaryInsurance ],
                };

                return { ...form, metadata };
            }
            return form;
        });

        setForms(updatedForms);

        return updatedForms;
    }

    const initPatientData = () => {
        const { email, cell_phone, home_phone, work_phone, primary_insurance, is_payment_forbidden, visit_copay, is_self_pay, self_pay, insurance_pay } = moveCardData.cardDetails.inquirable;
        const phone = cell_phone || home_phone || work_phone;

        setEmail(email);
        setPhone(phone);
        setOnboardingFormData({ ...onboardingFormData, phone });

        let initialForms = forms;
        if (primary_insurance) {
            initialForms = initExchangeWithInForms(primary_insurance);
        }

        if (!is_payment_forbidden) {
            batchChangePaymentFormServiceMetadata({
                "co_pay": is_self_pay ? 0 : visit_copay,
                "payment_for_session_not_converted": is_self_pay ? 0 : insurance_pay,
                "self_pay": is_self_pay ? self_pay : 0,
                "charge_for_cancellation": DEFAULT_CANCELLATION_FEE
            }, initialForms);
        }
    };

    useEffect(() => {
        if (moveCardData) {
            initPatientData();
        }
    }, [moveCardData])

    let coPay = "-";
    let deductible = "-";
    let message = "-";

    const patientAlert = moveCardData.cardDetails.inquirable.alert;
    if (patientAlert) {
        coPay = `$${patientAlert.co_pay}`;
        deductible = `$${patientAlert.deductible}`;
        message = patientAlert.message;
    }

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
                    <div className="mt-2">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={allFormsCheckbox}
                                onChange={handleAllFormsCheckboxChange}
                                id="allFormsCheckbox"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="allFormsCheckbox">
                                All forms
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={requireCreditCardCheckbox}
                                disabled={!allFormsCheckbox}
                                onChange={(e) =>
                                    setRequireCreditCardCheckbox(
                                        e.target.checked,
                                    )
                                }
                                id="requireCreditCardCheckbox"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="requireCreditCardCheckbox">
                                Require credit card
                            </label>
                        </div>
                    </div>
                    {allFormsCheckbox && (
                        <div>
                            <div
                                className="mt-2 mb-2"
                                style={{ fontSize: "16px" }}>
                                <div className="d-flex gap-1">
                                    <div className="fw-bold">Co-pay:</div>
                                    <div>{coPay}</div>
                                </div>
                                <div className="d-flex gap-1">
                                    <div className="fw-bold">Deductible:</div>
                                    <div>{deductible}</div>
                                </div>
                                <div className="d-flex gap-1">
                                    <div className="fw-bold">Message:</div>
                                    <div>{message}</div>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <div className="form-group d-flex align-items-center">
                                    <label
                                        htmlFor="coPay"
                                        className={classNames(
                                            "control-label",
                                            styles.formLabel,
                                        )}>
                                        Co-pay and/or co-insurance for session
                                    </label>
                                    <input
                                        className={classNames(
                                            "form-control",
                                            styles.formInput,
                                        )}
                                        value={
                                            paymentForServiceForm.metadata
                                                .co_pay
                                        }
                                        onChange={(e) =>
                                            changePaymentFormServiceMetadata(
                                                "co_pay",
                                                e.target.value,
                                            )
                                        }
                                        type="number"
                                        id="coPay"
                                        disabled
                                    />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <label
                                        htmlFor="forSession"
                                        className={classNames(
                                            "control-label",
                                            styles.formLabel,
                                        )}>
                                        Payment for session not covered due to
                                        deductible
                                    </label>
                                    <input
                                        className={classNames(
                                            "form-control",
                                            styles.formInput,
                                        )}
                                        type="number"
                                        value={
                                            paymentForServiceForm.metadata
                                                .payment_for_session_not_converted
                                        }
                                        onChange={(e) =>
                                            changePaymentFormServiceMetadata(
                                                "payment_for_session_not_converted",
                                                e.target.value,
                                            )
                                        }
                                        id="forSession"
                                        disabled
                                    />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <label
                                        htmlFor="selfPay"
                                        className={classNames(
                                            "control-label",
                                            styles.formLabel,
                                        )}>
                                        Self-pay for session when paid
                                        out-of-pocket
                                    </label>
                                    <input
                                        className={classNames(
                                            "form-control",
                                            styles.formInput,
                                        )}
                                        type="number"
                                        value={
                                            paymentForServiceForm.metadata
                                                .self_pay
                                        }
                                        onChange={(e) =>
                                            changePaymentFormServiceMetadata(
                                                "self_pay",
                                                e.target.value,
                                            )
                                        }
                                        id="selfPay"
                                        disabled
                                    />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <label
                                        htmlFor="chargeCancellation"
                                        className={classNames(
                                            "control-label",
                                            styles.formLabel,
                                        )}>
                                        Charge for cancellation without 24
                                        hours’ notice
                                    </label>
                                    <input
                                        className={classNames(
                                            "form-control",
                                            styles.formInput,
                                        )}
                                        type="number"
                                        value={
                                            paymentForServiceForm.metadata
                                                .charge_for_cancellation
                                        }
                                        onChange={(e) =>
                                            changePaymentFormServiceMetadata(
                                                "charge_for_cancellation",
                                                e.target.value,
                                            )
                                        }
                                        id="chargeCancellation"
                                        disabled
                                    />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <label
                                        htmlFor="otherCharges"
                                        className={classNames(
                                            "control-label",
                                            styles.formLabel,
                                        )}>
                                        Other charges (price)
                                    </label>
                                    <input
                                        className={classNames(
                                            "form-control",
                                            styles.formInput,
                                        )}
                                        type="number"
                                        value={
                                            paymentForServiceForm.metadata
                                                .other_charges_price
                                        }
                                        onChange={(e) =>
                                            changePaymentFormServiceMetadata(
                                                "other_charges_price",
                                                e.target.value,
                                            )
                                        }
                                        id="otherCharges"
                                        disabled={moveCardData.cardDetails.inquirable.is_payment_forbidden}
                                    />
                                </div>
                                <div className="form-group d-flex align-items-center">
                                    <label
                                        htmlFor="otherPrice"
                                        className={classNames(
                                            "control-label",
                                            styles.formLabel,
                                        )}>
                                        Other charges (specify)
                                    </label>
                                    <div className="d-flex flex-column">
                                    <input
                                        className={classNames("form-control", errors.other_charges && "is-invalid")}
                                        style={{ width: "270px" }}
                                        value={
                                            paymentForServiceForm.metadata
                                                .other_charges
                                        }
                                        disabled={
                                            Number(
                                                paymentForServiceForm.metadata
                                                    .other_charges_price,
                                            ) <= 0 || moveCardData.cardDetails.inquirable.is_payment_forbidden
                                        }
                                        onChange={(e) =>
                                            changePaymentFormServiceMetadata(
                                                "other_charges",
                                                e.target.value,
                                            )
                                        }
                                        id="otherPrice"
                                    />
                                    <div className="invalid-feedback">
                                            {errors.other_charges}
                                        </div>
                                        </div>
                                </div>
                                <div className="form-group d-flex align-items-start">
                                    <label
                                        htmlFor="otherPrice"
                                        className={classNames(
                                            "mt-1",
                                            "control-label",
                                            styles.formLabel,
                                        )}>
                                        Authorization to Release Confidential
                                        Information
                                    </label>
                                    <div
                                        className="d-flex flex-column"
                                        style={{ width: "270px" }}>
                                        <input
                                            className={classNames(
                                                "form-control",
                                                errors.exchange_with_name &&
                                                    "is-invalid",
                                            )}
                                            value={exchangeWithName}
                                            placeholder="Add person name"
                                            onChange={
                                                handleInputExchangeWithName
                                            }
                                            id="exchangeWithName"
                                        />
                                        <div className="invalid-feedback">
                                            {errors.exchange_with_name}
                                        </div>
                                    </div>
                                    {exchangeWithName && (
                                        <button
                                            className={classNames(
                                                "mt-1",
                                                styles.formListInputBtn,
                                            )}
                                            type="button"
                                            onClick={addExchangeWithValue}
                                            disabled={!exchangeWithName}>
                                            <FontAwesomeIcon
                                                icon={faPlus}
                                                color={"#2F80ED"}
                                                size={"xl"}
                                            />
                                        </button>
                                    )}
                                </div>
                                {confidentialInformationForm.metadata
                                    .exchange_with.length > 0 && (
                                    <ul className={styles.formTagList}>
                                        {confidentialInformationForm.metadata.exchange_with.map(
                                            (item) => (
                                                <li
                                                    className={
                                                        styles.formTagListItem
                                                    }
                                                    key={item}>
                                                    <div
                                                        className={
                                                            styles.formTag
                                                        }>
                                                        <span
                                                            className={
                                                                styles.formTagText
                                                            }>
                                                            {item}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            className={
                                                                styles.formTagRemove
                                                            }
                                                            onClick={() =>
                                                                removeEchangeWithValue(
                                                                    item,
                                                                )
                                                            }>
                                                            <FontAwesomeIcon
                                                                icon={faXmark}
                                                                color={"#fff"}
                                                                size={"lg"}
                                                            />
                                                        </button>
                                                    </div>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                )}
                            </div>
                            <div className="d-flex flex-column gap-1 mt-4">
                                <div className="fw-bold">
                                    How to send the forms? To email or phone
                                    number?
                                </div>
                                <div>
                                    <input
                                        hidden
                                        className={classNames(
                                            errors.send_via && "is-invalid",
                                        )}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.send_via}
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-1">
                                    <div>Send Forms Via Email</div>
                                    <div className="d-flex gap-2">
                                        <div className="mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={sendViaEmail}
                                                onChange={
                                                    handleSendViaEmailCheckboxChange
                                                }
                                            />
                                        </div>
                                        <div className="d-flex flex-column w-100">
                                            <input
                                                className={classNames(
                                                    "form-control",
                                                    errors.email &&
                                                        "is-invalid",
                                                )}
                                                value={email}
                                                disabled={!sendViaEmail}
                                                onChange={handleInputEmail}
                                                placeholder="Email"
                                            />
                                            <div className="invalid-feedback">
                                                {errors.email}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column gap-1">
                                    <div>Send Forms Via SMS</div>
                                    <div className="d-flex gap-2">
                                        <div className="mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                checked={sendViaSms}
                                                onChange={
                                                    handleSendViaSmsCheckboxChange
                                                }
                                            />
                                        </div>
                                        <div className="d-flex flex-column w-100">
                                            <PhoneInput
                                                phone={phone}
                                                setPhone={handleInputPhone}
                                                placeholder="Phone number"
                                                disabled={!sendViaSms}
                                                styles={{
                                                    backgroundColor: "#F7F9FC",
                                                }}
                                                error={!!errors.phone}
                                            />
                                            <div className="invalid-feedback">
                                                {errors.phone}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="d-flex flex-column gap-2 mt-2">
                        <div className="fw-bold">
                            Choose onboarding date and time
                        </div>
                        <div className="d-flex gap-2">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <ThemeProvider theme={datepickerTheme}>
                                    <DatePicker
                                        open={openTimepicker}
                                        onOpen={() => setOpenTimepicker(true)}
                                        onClose={() => setOpenTimepicker(false)}
                                        value={onboardingFormData.date}
                                        onChange={(value) =>
                                            setOnboardingFormData({
                                                ...onboardingFormData,
                                                date: dayjs(value).format(
                                                    "YYYY-MM-DD",
                                                ),
                                            })
                                        }
                                        openTo={"day"}
                                        minDate={dayjs().startOf("day")}
                                        maxDate={dayjs.unix(moveCardData.cardDetails.nextAppointment.time)}
                                        slotProps={{
                                            field: {
                                                readOnly: true,
                                                onClick: () => setOpenTimepicker(!openTimepicker)
                                            }
                                        }}
                                    />
                                </ThemeProvider>
                            </LocalizationProvider>
                            <input
                                className="form-control"
                                value={onboardingFormData.time}
                                onChange={(e) =>
                                    setOnboardingFormData({
                                        ...onboardingFormData,
                                        time: e.target.value,
                                    })
                                }
                                placeholder="Write time for the call"
                            />
                        </div>
                        <div>
                            <PhoneInput
                                phone={onboardingFormData.phone}
                                setPhone={handleInputOnboardingPhone}
                                placeholder="Phone number"
                                styles={{
                                    backgroundColor: "#F7F9FC",
                                }}
                                error={!!errors.onboarding_phone}
                            />
                            <div className="invalid-feedback">
                                {errors.onboarding_phone}
                            </div>
                        </div>
                        <div>
                            <input
                                className={classNames(
                                    "form-control",
                                    errors.comment && "is-invalid",
                                )}
                                value={comment}
                                onChange={inputComment}
                                placeholder="Add your comment..."
                            />
                            <div className="invalid-feedback">
                                {errors.comment}
                            </div>
                        </div>
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

export default MoveToAppointmentScheduledStageModal;
