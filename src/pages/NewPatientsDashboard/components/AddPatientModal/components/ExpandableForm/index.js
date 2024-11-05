import Icon from "@mdi/react";
import React from "react";
import Select from "react-select";
import classNames from "classnames";
import { mdiMenuDown, mdiMenuUp } from "@mdi/js";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../../../../../../assets/icons/bin-white.svg";
import PlusIcon from "../../../../../../assets/icons/plus.svg";
import InsuranceOption from "../InsuranceOption";
import DiagnosesSelect from "../DiagnosesSelect";
import PhoneInput from "../../../../../../components/Inputs/PhoneInput";
import { defaultTemplatesRow } from "../../formDataDefaults";
import { selectStyles } from "../../selectStyles";
import { stateList } from "../../enums";
import * as NewPatientsDashboardApi from "../../../../../../api/pages/new-patients-dashboard-page";
import * as NewPatientsDashboardReducer from "../../../../../../store/reducers/newPatientsDashboard.reducer";
import * as utils from "../../utils";
import styles from "./index.module.scss";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { ThemeProvider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { datepickerTheme } from "../../date-picker-theme";
import _ from "lodash";

const DEDUCTIBLE_FIELD_NAME = "deductible";
const DEDUCTIBLE_MET_FIELD_NAME = "deductible_met";
const DEDUCTIBLE_REMAINING_FIELD_NAME = "deductible_remaining";

const ExpandableForm = React.memo(
    ({ show, setShow, formName, formData, setFormData }) => {
        const dispatch = useDispatch();

        const {
            languages,
            providersData,
            insurancesData,
            eligibilityPayersData,
            insuranceProcedures,
            preferredPhoneList,
        } = useSelector((state) => state.newPatientsDashboard);

        const languageValue = utils.getLanguageValue(
            languages,
            formData.preferred_language_id,
        );
        const primaryProviderValue = utils.getPrimaryProviderValue(
            providersData.list,
            formData,
        );
        const preferredPhoneValue = utils.getPreferredPhoneValue(
            preferredPhoneList,
            formData.preferred_phone,
        );
        const stateValue = utils.getStateValue(formData.state);
        const insuranceValue = utils.getInsuranceValue(
            insurancesData.list,
            formData,
        );
        const eligibilityPayerValue = utils.getEligibilityPayerValue(
            eligibilityPayersData.list,
            formData,
        );

        const buttonText =
            formName === "add-additional-patient-information"
                ? "Add Additional Patient Information"
                : formName === "add-insurance-information"
                ? "Add Insurance Information"
                : formName === "add-diagnosis-codes"
                ? "Add Diagnosis Codes"
                : formName === "add-templare-billiable-line-items"
                ? "Add Template Billable Line Items"
                : "";

        const loadMoreProviders = () => {
            const page = providersData.pageIndex + 1;
            const limit = providersData.pageSize;
            NewPatientsDashboardApi.getProviders({ page, limit }).then(
                (res) => {
                    const providersList = [
                        ...providersData.list,
                        ...res.data.providers.data,
                    ];
                    dispatch(
                        NewPatientsDashboardReducer.setProvidersDataAC({
                            data: {
                                ...providersData,
                                list: providersList,
                                pageIndex: res.data.providers.current_page,
                            },
                        }),
                    );
                },
            );
        };

        const loadMoreInsurances = () => {
            const page = insurancesData.pageIndex + 1;
            const limit = insurancesData.pageSize;
            NewPatientsDashboardApi.getInsurances({ page, limit }).then((res) =>
                dispatch(
                    NewPatientsDashboardReducer.setInsurancesDataAC({
                        data: {
                            ...insurancesData,
                            list: [...insurancesData.list, ...res.data.data],
                            pageIndex: res.data.current_page,
                        },
                    }),
                ),
            );
        };

        const removeTemplateRow = (index) => {
            const templates = formData.templates.filter(
                (template, i) => i !== index,
            );
            setFormData({ ...formData, templates });
        };

        const addedTemplateRow = () => {
            const templates = formData.templates;
            templates.push(defaultTemplatesRow);
            setFormData({ ...formData, templates });
        };

        const handleIsSelfPayChange = (e) => {
            const is_self_pay = e.target.checked;
            const newFormData = { ...formData, is_self_pay };
            if (is_self_pay) {
                newFormData.is_payment_forbidden = false;
            }
            setFormData(newFormData);
        };

        const handlePaymentForbiddenChange = (e) => {
            const is_payment_forbidden = e.target.checked;
            const newFormData = { ...formData, is_payment_forbidden };
            if (is_payment_forbidden) {
                newFormData.self_pay = 0;
                newFormData.visit_copay = 0;
                newFormData.deductible = 0;
                newFormData.deductible_met = 0;
                newFormData.deductible_remaining = 0;
                newFormData.insurance_pay = 0;
            }
            setFormData(newFormData);
        };

        const handleInputNumberBlur = (fieldName) => {
            const fieldValue = formData[fieldName]
                .toString()
                .replace(/^0+/, "");
            let formattedValue = formatNumberWithTwoDecimalPlaces(fieldValue);

            if (!formattedValue || formattedValue <= 0) {
                formattedValue = 0;
            }

            const updatedFormData = {
                ...formData,
                [fieldName]: formattedValue,
            };

            setFormData(updatedFormData);

            updateDeductibleFieldsIfNeeded(fieldName, updatedFormData);
        };

        const updateDeductibleFieldsIfNeeded = (fieldName, updatedFormData) => {
            const deductibleFields = [
                DEDUCTIBLE_FIELD_NAME,
                DEDUCTIBLE_MET_FIELD_NAME,
                DEDUCTIBLE_REMAINING_FIELD_NAME,
            ];

            if (!deductibleFields.includes(fieldName)) {
                return;
            }

            const newFormData = _.cloneDeep(updatedFormData);

            let currentFieldValue = Number(newFormData[fieldName]);

            const { deductible } = newFormData;

            if (currentFieldValue > deductible) {
                newFormData[fieldName] = deductible;
            }

            newFormData[fieldName] = formatNumberWithTwoDecimalPlaces(
                newFormData[fieldName],
            );

            const sum = formatNumberWithTwoDecimalPlaces(
                Number(newFormData.deductible_met) +
                    Number(newFormData.deductible_remaining),
            );
            if (
                fieldName === DEDUCTIBLE_FIELD_NAME &&
                newFormData[fieldName] !== sum
            ) {
                newFormData.deductible_met = 0;
                newFormData.deductible_remaining = deductible;
            }

            if (fieldName === DEDUCTIBLE_MET_FIELD_NAME) {
                newFormData.deductible_remaining =
                    formatNumberWithTwoDecimalPlaces(
                        deductible - newFormData[fieldName],
                    );
            }

            if (fieldName === DEDUCTIBLE_REMAINING_FIELD_NAME) {
                newFormData.deductible_met = formatNumberWithTwoDecimalPlaces(
                    deductible - newFormData[fieldName],
                );
            }

            setFormData(newFormData);
        };

        const formatNumberWithTwoDecimalPlaces = (value) => {
            return Number(value).toFixed(2);
        };

        return (
            <div className="d-flex flex-column gap-4">
                <div
                    className={styles.showFormButton}
                    onClick={() => setShow(!show)}>
                    <div>{buttonText}</div>
                    <Icon path={show ? mdiMenuUp : mdiMenuDown} size={1} />
                </div>

                {show && formName === "add-additional-patient-information" && (
                    <div className="d-flex flex-column gap-4">
                        <div className="custom-form-group">
                            <label>Preferred Language</label>
                            <Select
                                value={languageValue}
                                onChange={(selectedOption) =>
                                    setFormData({
                                        ...formData,
                                        preferred_language_id:
                                            selectedOption.value,
                                    })
                                }
                                options={languages.map((language) => ({
                                    value: language.id,
                                    label: language.title,
                                }))}
                                isSearchable={false}
                                styles={selectStyles}
                            />
                        </div>
                        <div className="custom-form-group">
                            <label>Primary care provider</label>
                            <Select
                                value={primaryProviderValue}
                                onChange={(selectedOption) =>
                                    setFormData({
                                        ...formData,
                                        provider_id: selectedOption.value,
                                    })
                                }
                                options={providersData.list.map((provider) => ({
                                    value: provider.id,
                                    label: provider.provider_name,
                                }))}
                                onMenuScrollToBottom={loadMoreProviders}
                                isSearchable={false}
                                styles={selectStyles}
                            />
                        </div>

                        <div className="custom-form-group">
                            <label>Secondary email</label>
                            <input
                                className="form-control"
                                value={formData.secondary_email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        secondary_email: e.target.value,
                                    })
                                }></input>
                        </div>
                        <div className="d-flex gap-2">
                            <div className="custom-form-group">
                                <label>Home phone</label>
                                <PhoneInput
                                    phone={formData.home_phone}
                                    setPhone={(value) =>
                                        setFormData({
                                            ...formData,
                                            home_phone: value,
                                        })
                                    }
                                    styles={{ backgroundColor: "#F7F9FC" }}
                                />
                            </div>
                            <div className="custom-form-group">
                                <label>Work phone</label>
                                <PhoneInput
                                    phone={formData.work_phone}
                                    setPhone={(value) =>
                                        setFormData({
                                            ...formData,
                                            work_phone: value,
                                        })
                                    }
                                    styles={{ backgroundColor: "#F7F9FC" }}
                                />
                            </div>
                        </div>
                        <div className="custom-form-group">
                            <label>Preferred phone</label>
                            <Select
                                value={preferredPhoneValue}
                                onChange={(selectedOption) =>
                                    setFormData({
                                        ...formData,
                                        preferred_phone: selectedOption.value,
                                    })
                                }
                                options={preferredPhoneList.map(
                                    (preferredPhone) => ({
                                        value: preferredPhone.value,
                                        label: preferredPhone.text,
                                    }),
                                )}
                                isSearchable={false}
                                styles={selectStyles}
                            />
                        </div>
                        <div className="custom-form-group">
                            <label>Address line 1</label>
                            <input
                                value={formData.address}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        address: e.target.value,
                                    })
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="custom-form-group">
                            <label>Address line 2</label>
                            <input
                                value={formData.address_2}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        address_2: e.target.value,
                                    })
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="d-flex gap-2">
                            <div className="custom-form-group">
                                <label>City</label>
                                <input
                                    value={formData.city}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            city: e.target.value,
                                        })
                                    }
                                    className="form-control"
                                />
                            </div>
                            <div className="custom-form-group">
                                <label>State</label>
                                <Select
                                    value={stateValue}
                                    onChange={(selectedOption) =>
                                        setFormData({
                                            ...formData,
                                            state: selectedOption.value,
                                        })
                                    }
                                    options={stateList.map((state) => ({
                                        value: state,
                                        label: state,
                                    }))}
                                    isSearchable={false}
                                    styles={selectStyles}
                                />
                            </div>
                            <div className="custom-form-group">
                                <label>Zip</label>
                                <input
                                    value={formData.zip}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            zip: e.target.value,
                                        })
                                    }
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {show && formName === "add-insurance-information" && (
                    <div className="d-flex flex-column gap-4">
                        <div className="custom-form-group">
                            <label>Insurance CO</label>
                            <Select
                                value={insuranceValue}
                                onChange={(selectedOption) =>
                                    setFormData({
                                        ...formData,
                                        insurance_id: selectedOption.value.id,
                                    })
                                }
                                options={insurancesData.list.map(
                                    (insurance) => ({
                                        value: insurance,
                                    }),
                                )}
                                onMenuScrollToBottom={loadMoreInsurances}
                                isSearchable={false}
                                styles={selectStyles}
                                components={{ Option: InsuranceOption }}
                            />
                        </div>
                        <div className="custom-form-group">
                            <label>Subscriber ID</label>
                            <input
                                value={formData.subscriber_id}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        subscriber_id: e.target.value,
                                    })
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="custom-form-group">
                            <label
                                htmlFor="is_self_pay"
                                className="d-flex gap-2"
                                style={{ width: "fit-content" }}>
                                <span>Pays out-of-pocket</span>
                                <input
                                    type="checkbox"
                                    id="is_self_pay"
                                    defaultChecked={formData.is_self_pay}
                                    onChange={handleIsSelfPayChange}
                                />
                            </label>
                        </div>
                        {formData.is_self_pay ? (
                            <div className="custom-form-group">
                                <label>Self-Pay</label>
                                <input
                                    disabled={formData.is_payment_forbidden}
                                    type="number"
                                    min={0}
                                    step={0.01}
                                    value={formData.self_pay}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            self_pay: e.target.value,
                                        })
                                    }
                                    onBlur={() =>
                                        handleInputNumberBlur("self_pay")
                                    }
                                    onWheel={(e) => e.target.blur()}
                                    className={classNames(
                                        styles.inputNumber,
                                        "form-control",
                                    )}
                                />
                            </div>
                        ) : (
                            <>
                                <div className="custom-form-group">
                                    <label>Co-Pay</label>
                                    <input
                                        disabled={formData.is_payment_forbidden}
                                        type="number"
                                        min={0}
                                        step={0.01}
                                        value={formData.visit_copay}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                visit_copay: e.target.value,
                                            })
                                        }
                                        onBlur={() =>
                                            handleInputNumberBlur("visit_copay")
                                        }
                                        onWheel={(e) => e.target.blur()}
                                        className={classNames(
                                            styles.inputNumber,
                                            "form-control",
                                        )}
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>Insurance Pay</label>
                                    <input
                                        disabled={formData.is_payment_forbidden}
                                        type="number"
                                        min={0}
                                        step={0.01}
                                        value={formData.insurance_pay}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                insurance_pay: e.target.value,
                                            })
                                        }
                                        onWheel={(e) => e.target.blur()}
                                        onBlur={() =>
                                            handleInputNumberBlur(
                                                "insurance_pay",
                                            )
                                        }
                                        className={classNames(
                                            styles.inputNumber,
                                            "form-control",
                                        )}
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>Deductible</label>
                                    <input
                                        disabled={formData.is_payment_forbidden}
                                        type="number"
                                        min={0}
                                        step={0.01}
                                        value={formData.deductible}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                deductible: e.target.value,
                                            })
                                        }
                                        onWheel={(e) => e.target.blur()}
                                        onBlur={() =>
                                            handleInputNumberBlur(
                                                DEDUCTIBLE_FIELD_NAME,
                                            )
                                        }
                                        className={classNames(
                                            styles.inputNumber,
                                            "form-control",
                                        )}
                                    />
                                </div>
                                <div className="d-flex gap-2">
                                    <div className="custom-form-group">
                                        <label>Deductible Met</label>
                                        <input
                                            disabled={
                                                formData.is_payment_forbidden
                                            }
                                            type="number"
                                            min={0}
                                            step={0.01}
                                            value={formData.deductible_met}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    deductible_met:
                                                        e.target.value,
                                                })
                                            }
                                            onWheel={(e) => e.target.blur()}
                                            onBlur={() =>
                                                handleInputNumberBlur(
                                                    DEDUCTIBLE_MET_FIELD_NAME,
                                                )
                                            }
                                            className={classNames(
                                                styles.inputNumber,
                                                "form-control",
                                            )}
                                        />
                                    </div>
                                    <div className="custom-form-group">
                                        <label>Remaining Deductible</label>
                                        <input
                                            disabled={
                                                formData.is_payment_forbidden
                                            }
                                            type="number"
                                            min={0}
                                            step={0.01}
                                            value={
                                                formData.deductible_remaining
                                            }
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    deductible_remaining:
                                                        e.target.value,
                                                })
                                            }
                                            onWheel={(e) => e.target.blur()}
                                            onBlur={() =>
                                                handleInputNumberBlur(
                                                    DEDUCTIBLE_REMAINING_FIELD_NAME,
                                                )
                                            }
                                            className={classNames(
                                                styles.inputNumber,
                                                "form-control",
                                            )}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="custom-form-group">
                            <label>Health Plan Elig. Benefit Co. ID</label>
                            <Select
                                value={eligibilityPayerValue}
                                onChange={(selectedOption) =>
                                    setFormData({
                                        ...formData,
                                        eligibility_payer_id:
                                            selectedOption.value,
                                    })
                                }
                                options={eligibilityPayersData.list.map(
                                    (item) => ({
                                        value: item.id,
                                        label: item.name,
                                    }),
                                )}
                                onMenuScrollToBottom={loadMoreInsurances}
                                isSearchable={false}
                                styles={selectStyles}
                            />
                        </div>
                        <div className="custom-form-group">
                            <label>Plan Name</label>
                            <input
                                value={formData.plan_name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        plan_name: e.target.value,
                                    })
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="custom-form-group">
                            <label>Authorization Number</label>
                            <input
                                value={formData.auth_number}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        auth_number: e.target.value,
                                    })
                                }
                                className="form-control"
                            />
                        </div>
                        <div className="custom-form-group">
                            <label>No. of Visits Authorized</label>
                            <input
                                value={formData.visits_auth}
                                type="number"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        visits_auth: e.target.value,
                                        visits_auth_left: e.target.value,
                                    })
                                }
                                className={classNames(
                                    styles.inputNumber,
                                    "form-control",
                                )}
                            />
                        </div>
                        <div className="custom-form-group">
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
                                            setFormData({
                                                ...formData,
                                                eff_start_date:
                                                    dayjs(value).format(
                                                        "YYYY-MM-DD",
                                                    ),
                                            })
                                        }
                                        openTo={"year"}
                                    />
                                </ThemeProvider>
                            </LocalizationProvider>
                        </div>
                        <div className="custom-form-group">
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
                                            setFormData({
                                                ...formData,
                                                eff_stop_date:
                                                    dayjs(value).format(
                                                        "YYYY-MM-DD",
                                                    ),
                                            })
                                        }
                                        openTo={"year"}
                                    />
                                </ThemeProvider>
                            </LocalizationProvider>
                        </div>
                        <div className="form-check">
                            <input
                                id="payment-forbidden-checkbox"
                                checked={formData.is_payment_forbidden}
                                onChange={handlePaymentForbiddenChange}
                                type="checkbox"
                                className="form-check-input"
                                disabled={formData.is_self_pay}
                            />
                            <label
                                htmlFor="payment-forbidden-checkbox"
                                className="form-check-label">
                                Payment Forbidden
                            </label>
                        </div>
                    </div>
                )}

                {show && formName === "add-diagnosis-codes" && (
                    <div className="d-flex flex-column gap-4">
                        <div className="position-relative custom-form-group">
                            <label>Diagnosis Codes</label>
                            <DiagnosesSelect
                                formData={formData}
                                setFormData={setFormData}
                            />
                        </div>
                    </div>
                )}

                {show &&
                    formName === "add-templare-billiable-line-items" &&
                    formData.templates.map((template, index) => (
                        <div key={index} className="d-flex flex-column gap-4">
                            <div className="d-flex gap-2">
                                <div className="w-50 custom-form-group">
                                    <label>POS</label>
                                    <input
                                        value={formData.templates[index].pos}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                templates:
                                                    formData.templates.map(
                                                        (template, i) =>
                                                            i === index
                                                                ? {
                                                                      ...template,
                                                                      pos: e
                                                                          .target
                                                                          .value,
                                                                  }
                                                                : template,
                                                    ),
                                            })
                                        }
                                        className="form-control"
                                    />
                                </div>
                                <div className="w-50 custom-form-group">
                                    <label>CPT</label>
                                    <Select
                                        value={utils.getCptValue(
                                            formData,
                                            index,
                                        )}
                                        onChange={(selectedOption) =>
                                            setFormData({
                                                ...formData,
                                                templates:
                                                    formData.templates.map(
                                                        (template, i) =>
                                                            i === index
                                                                ? {
                                                                      ...template,
                                                                      cpt: selectedOption.value,
                                                                  }
                                                                : template,
                                                    ),
                                            })
                                        }
                                        options={insuranceProcedures
                                            .filter((item) => item.code)
                                            .map((item) => ({
                                                value: item.code,
                                                label: item.code,
                                            }))}
                                        styles={selectStyles}
                                    />
                                </div>
                            </div>
                            <div className="d-flex gap-2">
                                <div className="custom-form-group">
                                    <label>Modifler A</label>
                                    <input
                                        value={
                                            formData.templates[index].modifier_a
                                        }
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                templates:
                                                    formData.templates.map(
                                                        (template, i) =>
                                                            i === index
                                                                ? {
                                                                      ...template,
                                                                      modifier_a:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : template,
                                                    ),
                                            })
                                        }
                                        className="form-control"
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>Modifler B</label>
                                    <input
                                        value={
                                            formData.templates[index].modifier_b
                                        }
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                templates:
                                                    formData.templates.map(
                                                        (template, i) =>
                                                            i === index
                                                                ? {
                                                                      ...template,
                                                                      modifier_b:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : template,
                                                    ),
                                            })
                                        }
                                        className="form-control"
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>Modifler C</label>
                                    <input
                                        value={
                                            formData.templates[index].modifier_c
                                        }
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                templates:
                                                    formData.templates.map(
                                                        (template, i) =>
                                                            i === index
                                                                ? {
                                                                      ...template,
                                                                      modifier_c:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : template,
                                                    ),
                                            })
                                        }
                                        className="form-control"
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>Modifler D</label>
                                    <input
                                        value={
                                            formData.templates[index].modifier_d
                                        }
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                templates:
                                                    formData.templates.map(
                                                        (template, i) =>
                                                            i === index
                                                                ? {
                                                                      ...template,
                                                                      modifier_d:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : template,
                                                    ),
                                            })
                                        }
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="d-flex gap-2">
                                <div className="custom-form-group">
                                    <label>Diag. pointer</label>
                                    <input
                                        value={
                                            formData.templates[index]
                                                .diagnose_pointer
                                        }
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                templates:
                                                    formData.templates.map(
                                                        (template, i) =>
                                                            i === index
                                                                ? {
                                                                      ...template,
                                                                      diagnose_pointer:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : template,
                                                    ),
                                            })
                                        }
                                        className="form-control"
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>Line Charges</label>
                                    <input
                                        value={formData.templates[index].charge}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                templates:
                                                    formData.templates.map(
                                                        (template, i) =>
                                                            i === index
                                                                ? {
                                                                      ...template,
                                                                      charge: e
                                                                          .target
                                                                          .value,
                                                                  }
                                                                : template,
                                                    ),
                                            })
                                        }
                                        className="form-control"
                                    />
                                </div>
                                <div className="custom-form-group">
                                    <label>Day or Units</label>
                                    <input
                                        value={
                                            formData.templates[index]
                                                .days_or_units
                                        }
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                templates:
                                                    formData.templates.map(
                                                        (template, i) =>
                                                            i === index
                                                                ? {
                                                                      ...template,
                                                                      days_or_units:
                                                                          e
                                                                              .target
                                                                              .value,
                                                                  }
                                                                : template,
                                                    ),
                                            })
                                        }
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end gap-3">
                                <button
                                    onClick={() => removeTemplateRow(index)}
                                    disabled={formData.templates.length === 1}
                                    className="btn btn-danger d-flex align-items-center justify-content-center"
                                    style={{ width: "44px", height: "44px" }}>
                                    <img src={DeleteIcon} alt="delete-icon" />
                                </button>
                                <button
                                    onClick={addedTemplateRow}
                                    className="btn btn-primary d-flex align-items-center justify-content-center"
                                    style={{ width: "44px", height: "44px" }}>
                                    <img src={PlusIcon} alt="plus-icon" />
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        );
    },
);

export default ExpandableForm;
