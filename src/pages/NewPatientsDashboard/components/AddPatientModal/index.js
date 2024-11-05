import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import _ from "lodash";
import classNames from "classnames";
import { mdiClose } from "@mdi/js";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import NotificationsContext from "../../../../contexts/NotificationsContext";
import AddPatientIcon from "../../../../assets/icons/add-patient-inquiry.svg";
import ExpandableForm from "./components/ExpandableForm";
import ExistingPatientDialog from "./components/ExistingPatientDialog";
import PhoneInput from "../../../../components/Inputs/PhoneInput";
import CircleLoader from "../../../../components/CircleLoader";
import { defaultTemplatesRow, initialFormData } from "./formDataDefaults";
import { selectStyles } from "./selectStyles";
import { sexList } from "./enums";
import * as utils from "./utils";
import * as NewPatientsDashboardApi from "../../../../api/pages/new-patients-dashboard-page";
import * as NewPatientsDashboardReducer from "../../../../store/reducers/newPatientsDashboard.reducer";
import { ThemeProvider } from "@mui/material";

import styles from "./index.module.scss";
import { datepickerTheme } from "./date-picker-theme";
import { processCardData } from "../../utils";

const AddPatientModal = () => {
    const dispatch = useDispatch();
    const { enqueueNotification } = useContext(NotificationsContext);

    const { userData } = useSelector(state => state.app);
    const {
        eventBus,
        showAddPatientModal,
        sources,
        providersData,
        patientsData,
        insurancesData,
        eligibilityPayersData,
        preferredPhoneList,
        registrationMethods,
        therapyTypes,
    } = useSelector((state) => state.newPatientsDashboard);

    const [formData, setFormData] = useState(initialFormData);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const [
        showAddAdditionalPatientInformation,
        setShowAddAdditionalPatientInformation,
    ] = useState(false);
    const [showAddInsuranceInformation, setShowAddInsuranceInformation] =
        useState(false);
    const [showAddDiagnosisCodes, setShowAddDiagnosisCodes] = useState(false);
    const [
        showAddTemplateBillableLineItems,
        setshowAddTemplateBillableLineItems,
    ] = useState(false);
    const [searchPatientName, setSearchPatientName] = useState("");
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [showExistingPatientDialog, setShowExistingPatientDialog] =
        useState(false);
    const [errors, setErrors] = useState({});
    const [isLoadingSave, setIsLoadingSave] = useState(false);

    const [sourceValue, setSourceValue] = useState({});
    const [sourceOptions, setSourceOptions] = useState(() => {
        const groupedSources = sources.reduce((acc, source) => {
            if (!acc[source.channel.name]) {
                acc[source.channel.name] = [];
            }
            acc[source.channel.name].push(source);
            return acc;
        }, {});

        return Object.entries(groupedSources).map(
            ([groupName, groupSources]) => ({
                label: groupName,
                options: groupSources.map((source) => ({
                    value: source.id,
                    label: source.name,
                })),
            }),
        )
    });
    const [isLoadingSource, setIsLoadingSource] = useState(false);

    const requiredFields = [
        {
            fieldName: "first_name",
            errorText: "The first name field is required",
            forNewPatients: false,
        },
        {
            fieldName: "last_name",
            errorText: "The last name field is required",
            forNewPatients: false,
        },
        {
            fieldName: "date_of_birth",
            errorText: "The date of birth field is required",
            forNewPatients: false,
        },
        {
            fieldName: "sex",
            errorText: "The sex field is required",
            forNewPatients: false,
        },
        {
            fieldName: "cell_phone",
            errorText: "The phone field is required",
            forNewPatients: false,
        },
        {
            fieldName: "registration_method_id",
            errorText: "The registration method field is required",
            forNewPatients: false,
        },
        {
            fieldName: "source_id",
            errorText: "The source field is required",
            forNewPatients: false,
        },
    ];

    const sexValue = utils.getSexValue(sexList, formData.sex);
    const registrationMethodValue = utils.getRegistrationMethodValue(
        registrationMethods,
        formData.registration_method_id,
    );
    const therapyTypeValue = utils.getTherapyTypeValue(
        therapyTypes,
        formData.therapy_type_id,
    );

    const validate = () => {
        let errors = {};
        requiredFields.forEach((field) => {
            if (!formData[field.fieldName]) {
                if (selectedPatient && field.forNewPatients) {
                    return;
                }

                errors[field.fieldName] = field.errorText;
            }
        });
        setErrors(errors);

        return !!Object.keys(errors).length;
    };

    const addCard = (formData) => {
        setIsLoadingSave(true);

        NewPatientsDashboardApi.createInquiry(formData)
            .then((res) => {
                const data = res.data;

                dispatch(
                    NewPatientsDashboardReducer.addValueToSourcesAC({
                        id: data.source.id,
                        name: data.source.name,
                        channel_id: data.source.channel_id,
                    }),
                );

                const newCard = processCardData(data);

                eventBus.publish({
                    type: "ADD_CARD",
                    laneId: data.stage_id,
                    card: newCard,
                });

                dispatch(
                    NewPatientsDashboardReducer.addCardAC({
                        laneId: data.stage_id,
                        card: newCard,
                    }),
                );
                handleModalClose();
            })
            .catch((error) => {
                if (error.response?.status === 422) {
                    const data = error.response.data;

                    const message = Object.values(data.errors)[0];

                    enqueueNotification("Error", message);

                    const newErrors = errors;

                    for (const [key, value] of Object.entries(data.errors)) {
                        newErrors[key] = value[0];
                    }

                    setErrors(newErrors);
                }
            })
            .finally(() => {
                setIsLoadingSave(false);
            });
    };

    const handleSaveClick = () => {
        if (validate()) {
            return;
        }
        addCard(formData);
    };

    const handleSourceInputChange = (key, value) => {
        handleInputChange(key, value);
        setSourceValue(utils.getSourceValue(sourceOptions, value));
    };

    const handleInputChange = (key, value) => {
        setFormData({ ...formData, [key]: value });

        if (errors[key]) {
            setErrors({ ...errors, [key]: "" });
        }
    };

    const resetState = () => {
        setErrors({});
        setSelectedPatient(null);
        setSearchPatientName("");
        setFormData(initialFormData);
        setSourceValue({});
        setShowAddAdditionalPatientInformation(false);
        setShowAddInsuranceInformation(false);
        setShowAddDiagnosisCodes(false);
        setshowAddTemplateBillableLineItems(false);
    };

    const handleModalClose = () => {
        dispatch(
            NewPatientsDashboardReducer.setShowAddPatientModalAC({
                value: false,
            }),
        );
        resetState();
    };

    const handleCreateSource = async (sourceName) => {
        setIsLoadingSource(true);

        NewPatientsDashboardApi.createSource(sourceName)
            .then((response) => {
                const newSource = {
                    value: response.data.id,
                    label: response.data.name
                };
                const groupName = response.data.channel ? response.data.channel.name : 'Other';
                const groupIndex = sourceOptions.findIndex(group => group.label === groupName);

                let newOptions = [];
                if (groupIndex !== -1) {
                    // check if source were previously created
                    const sourceIndex = sourceOptions[groupIndex].options.findIndex(source => source.value === newSource.value);
                    if (sourceIndex !== -1) {
                        handleInputChange("source_id", newSource.value);
                        setSourceValue(utils.getSourceValue(sourceOptions, newSource.value));
                        return;
                    }

                    newOptions = [...sourceOptions];
                    newOptions[groupIndex].options.push(newSource);
                } else {
                    newOptions = [
                        ...sourceOptions,
                        {
                            label: groupName,
                            options: [newSource]
                        }
                    ];
                }

                setSourceOptions(newOptions);
                handleInputChange("source_id", newSource.value);
                setSourceValue(utils.getSourceValue(newOptions, newSource.value));
            })
            .catch((error) => {
                enqueueNotification("Error", 'An error occured. Source wasn\'t created.');
            })
            .finally(() => {
                setIsLoadingSource(false);
            });
    };

    const handleExistingPatientInputOnFocus = () => {
        if (searchPatientName.length > 1) {
            setShowExistingPatientDialog(true);
        }
    };

    const fetchData = async () => {
        const [
            languagesRes,
            patientsRes,
            providersRes,
            insurancesRes,
            eligibilityPayersRes,
            insuranceProceduresRes,
            diagnosesRes,
        ] = await Promise.all([
            NewPatientsDashboardApi.getLanguages(),
            NewPatientsDashboardApi.getInquirablesWithoutActiveInquiries({
                page: patientsData.pageIndex,
                limit: patientsData.pageSize,
            }),
            NewPatientsDashboardApi.getProviders({
                page: providersData.pageIndex,
                limit: providersData.pageSize,
            }),
            NewPatientsDashboardApi.getInsurances({
                page: insurancesData.pageIndex,
                limit: insurancesData.pageSize,
            }),
            NewPatientsDashboardApi.getEligibilityPayers({
                page: eligibilityPayersData.pageIndex,
                limit: eligibilityPayersData.pageSize,
            }),
            NewPatientsDashboardApi.getInsuranceProcedures(),
            NewPatientsDashboardApi.getDiagnoses(),
        ]);

        dispatch(
            NewPatientsDashboardReducer.setLanguagesAC({
                languages: languagesRes.data.languages,
            }),
        );
        dispatch(
            NewPatientsDashboardReducer.setPatientsDataAC({
                data: {
                    ...patientsData,
                    list: patientsRes.data.data,
                    pageIndex: patientsRes.data.current_page,
                },
            }),
        );
        dispatch(
            NewPatientsDashboardReducer.setProvidersDataAC({
                data: {
                    ...providersData,
                    list: providersRes.data.providers.data,
                    pageIndex: providersRes.data.providers.current_page,
                },
            }),
        );
        dispatch(
            NewPatientsDashboardReducer.setInsurancesDataAC({
                data: {
                    ...insurancesData,
                    list: insurancesRes.data.data,
                    pageIndex: insurancesRes.data.current_page,
                },
            }),
        );
        dispatch(
            NewPatientsDashboardReducer.setEligibilityPayersDataAC({
                data: {
                    ...eligibilityPayersData,
                    list: eligibilityPayersRes.data.data,
                    pageIndex: eligibilityPayersRes.data.current_page,
                },
            }),
        );
        dispatch(
            NewPatientsDashboardReducer.setInsuranceProceduresAC({
                data: insuranceProceduresRes.data.insurance_procedures,
            }),
        );
        dispatch(
            NewPatientsDashboardReducer.setDiagnosesAC({
                data: diagnosesRes.data.diagnoses,
            }),
        );

        setDataIsLoaded(true);
    };

    useEffect(() => {
        if (showAddPatientModal && !dataIsLoaded) {
            fetchData();
        }
    }, [showAddPatientModal]);

    useEffect(() => {
        if (!searchPatientName.length) {
            return setShowExistingPatientDialog(false);
        }

        if (searchPatientName.length > 1) {
            const payload = {
                page: 1,
                limit: patientsData.pageSize,
                search_query: searchPatientName,
            };
            NewPatientsDashboardApi.getInquirablesWithoutActiveInquiries(
                payload,
            ).then((res) =>
                dispatch(
                    NewPatientsDashboardReducer.setPatientsDataAC({
                        data: {
                            ...patientsData,
                            list: res.data.data,
                            pageIndex: res.data.current_page,
                        },
                    }),
                ),
            );
            setShowExistingPatientDialog(true);
        }
    }, [searchPatientName]);

    useEffect(() => {
        if (!selectedPatient) {
            setFormData(initialFormData);
            setSearchPatientName("");
        } else {
            let patient = _.cloneDeep(selectedPatient);
            if (patient.inquiries.length) {
                patient.source_id = patient.inquiries[0].source_id;
                patient.registration_method_id =
                    patient.inquiries[0].registration_method_id;
            }

            if (patient.preferred_phone) {
                const preferredPhone = preferredPhoneList.find(
                    (phone) => phone.id === patient.preferred_phone,
                );
                patient.preferred_phone = preferredPhone.value;
            }

            patient.insurance_id = patient.insurance
                ? patient.insurance.id
                : null;

            if (patient.insurance_plan) {
                patient.plan_name = patient.insurance_plan.name;
            }

            if (!patient.templates.length) {
                patient.templates = [_.cloneDeep(defaultTemplatesRow)];
            }

            setFormData({
                ...patient,
                ...{
                    inquirable_id: patient.id,
                    therapist_manage_timesheet: false,
                },
            });
        }

        setErrors({});
        setShowExistingPatientDialog(false);
    }, [selectedPatient]);

    return (
        <Modal
            show={showAddPatientModal}
            size="lg"
            className="custom-modal"
            backdrop="true"
            onHide={handleModalClose}
            centered>
            <Modal.Header closeButton>
                <img src={AddPatientIcon} alt="add-patient-icon" />
                <div>Add patient inquiry</div>
            </Modal.Header>
            <Modal.Body className={classNames(styles.body)}>
                {dataIsLoaded ? (
                    <div>
                        <div className="d-flex gap-1">
                            <div className={styles.patientInfo}>
                                <div className="d-flex flex-column gap-4">
                                    <div className="custom-form-group">
                                        <label>Patient</label>
                                        <div className={"position-relative"}>
                                            <input
                                                placeholder="John Doe"
                                                value={
                                                    !selectedPatient
                                                        ? searchPatientName
                                                        : `${selectedPatient.first_name} ${selectedPatient.last_name}`
                                                }
                                                onFocus={
                                                    handleExistingPatientInputOnFocus
                                                }
                                                onChange={(e) =>
                                                    setSearchPatientName(
                                                        e.target.value,
                                                    )
                                                }
                                                className={classNames(
                                                    "form-control",
                                                    errors.inquirable_id &&
                                                        "is-invalid",
                                                )}></input>
                                            {selectedPatient && (
                                                <div
                                                    className={
                                                        styles.btnClearSelectedPatient
                                                    }
                                                    onClick={() =>
                                                        setSelectedPatient(null)
                                                    }>
                                                    <Icon
                                                        className={
                                                            styles.clearSelectedPatientIcon
                                                        }
                                                        path={mdiClose}
                                                        size={0.9}
                                                    />
                                                </div>
                                            )}
                                            {showExistingPatientDialog && (
                                                <ExistingPatientDialog
                                                    searchQuery={
                                                        searchPatientName
                                                    }
                                                    setSelectedPatient={
                                                        setSelectedPatient
                                                    }
                                                    close={() =>
                                                        setShowExistingPatientDialog(
                                                            false,
                                                        )
                                                    }
                                                />
                                            )}
                                            <div className="invalid-feedback ">
                                                {errors.inquirable_id}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <div className="custom-form-group">
                                            <label>
                                                First Name{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className={classNames(
                                                    "form-control",
                                                    errors.first_name &&
                                                        "is-invalid",
                                                )}
                                                value={formData.first_name}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "first_name",
                                                        e.target.value,
                                                    )
                                                }></input>
                                            <div className="invalid-feedback">
                                                {errors.first_name}
                                            </div>
                                        </div>
                                        <div className="custom-form-group">
                                            <label>
                                                Last Name{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className={classNames(
                                                    "form-control",
                                                    errors.last_name &&
                                                        "is-invalid",
                                                )}
                                                value={formData.last_name}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "last_name",
                                                        e.target.value,
                                                    )
                                                }></input>
                                            <div className="invalid-feedback">
                                                {errors.last_name}
                                            </div>
                                        </div>
                                        <div className="custom-form-group">
                                            <label>Middle initial</label>
                                            <input
                                                value={formData.middle_initial}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        middle_initial:
                                                            e.target.value,
                                                    })
                                                }
                                                className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <div className="w-100">
                                            <div className="custom-form-group">
                                                <label>
                                                    Sex{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <Select
                                                    value={sexValue}
                                                    onChange={(
                                                        selectedOption,
                                                    ) =>
                                                        handleInputChange(
                                                            "sex",
                                                            selectedOption.value,
                                                        )
                                                    }
                                                    options={sexList.map(
                                                        (item) => ({
                                                            value: item.value,
                                                            label: item.text,
                                                        }),
                                                    )}
                                                    styles={selectStyles}
                                                    className={classNames(
                                                        "custom-form-select",
                                                        errors.sex &&
                                                            "is-invalid",
                                                    )}
                                                />
                                                <div className="invalid-feedback">
                                                    {errors.sex}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-100">
                                            <div className="custom-form-group">
                                                <label>
                                                    Date of Birth{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <LocalizationProvider
                                                    dateAdapter={AdapterDayjs}>
                                                    <ThemeProvider
                                                        theme={datepickerTheme}>
                                                        <DatePicker
                                                            value={
                                                                formData.date_of_birth
                                                                    ? dayjs(
                                                                          formData.date_of_birth,
                                                                      )
                                                                    : null
                                                            }
                                                            onChange={(value) =>
                                                                handleInputChange(
                                                                    "date_of_birth",
                                                                    dayjs(
                                                                        value,
                                                                    ).format(
                                                                        "YYYY-MM-DD",
                                                                    ),
                                                                )
                                                            }
                                                            openTo={"year"}
                                                            maxDate={dayjs(
                                                                new Date(),
                                                            )}
                                                        />
                                                    </ThemeProvider>
                                                </LocalizationProvider>

                                                <input
                                                    readOnly
                                                    hidden
                                                    className={classNames(
                                                        "form-control",
                                                        errors.date_of_birth &&
                                                            "is-invalid",
                                                    )}
                                                    value={
                                                        formData.date_of_birth
                                                    }
                                                    type="date"
                                                />
                                                <div className="invalid-feedback">
                                                    {errors.date_of_birth}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <div className="custom-form-group">
                                            <label>
                                                Cell phone{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <PhoneInput
                                                phone={formData.cell_phone}
                                                setPhone={(value) =>
                                                    handleInputChange(
                                                        "cell_phone",
                                                        value,
                                                    )
                                                }
                                                styles={{
                                                    backgroundColor: "#F7F9FC",
                                                }}
                                                error={!!errors.cell_phone}
                                            />
                                            <div className="invalid-feedback">
                                                {errors.cell_phone}
                                            </div>
                                        </div>

                                        <div className="custom-form-group">
                                            <label>Email</label>
                                            <input
                                                className={classNames(
                                                    "form-control",
                                                    errors.email &&
                                                        "is-invalid",
                                                )}
                                                value={formData.email}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                            <div className="invalid-feedback">
                                                {errors.email}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="custom-form-group w-100">
                                        <label>Therapy type</label>
                                        <div className="d-flex gap-2 align-items-start">
                                            <div className="w-100">
                                                <Select
                                                    value={therapyTypeValue}
                                                    onChange={(
                                                        selectedOption,
                                                    ) =>
                                                        handleInputChange(
                                                            "therapy_type_id",
                                                            selectedOption.value,
                                                        )
                                                    }
                                                    options={therapyTypes.map(
                                                        (item) => ({
                                                            value: item.id,
                                                            label: item.name,
                                                        }),
                                                    )}
                                                    styles={selectStyles}
                                                    className={classNames(
                                                        "custom-form-select"
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column gap-4">
                                        <div className="custom-form-group">
                                            <label>
                                                Registration method{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <Select
                                                value={registrationMethodValue}
                                                onChange={(selectedOption) =>
                                                    handleInputChange(
                                                        "registration_method_id",
                                                        selectedOption.value,
                                                    )
                                                }
                                                options={registrationMethods.map(
                                                    (item) => ({
                                                        value: item.id,
                                                        label: item.name,
                                                    }),
                                                )}
                                                styles={selectStyles}
                                                className={classNames(
                                                    "custom-form-select",
                                                    errors.registration_method_id &&
                                                        "is-invalid",
                                                )}
                                            />
                                            <div className="invalid-feedback">
                                                {errors.registration_method_id}
                                            </div>
                                        </div>

                                        <div className="custom-form-group w-100">
                                            <label>
                                                Source{" "}
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </label>
                                            <div className="d-flex gap-2 align-items-start">
                                                <div className="w-100">
                                                    { userData.isOnlyAdmin ? (
                                                        <CreatableSelect
                                                            value={sourceValue}
                                                            onChange={(selectedOption) =>
                                                                handleSourceInputChange("source_id", selectedOption.value)
                                                            }
                                                            onCreateOption={handleCreateSource}
                                                            isLoading={isLoadingSource}
                                                            options={sourceOptions}
                                                            formatGroupLabel={(
                                                                data,
                                                            ) => (
                                                                <div className="group-header">
                                                                    {data.label}
                                                                </div>
                                                            )}
                                                            styles={selectStyles}
                                                            className={classNames("custom-form-select", errors.source_id && "is-invalid")}
                                                        />
                                                    ) : (
                                                        <Select
                                                            value={sourceValue}
                                                            onChange={(selectedOption) =>
                                                                handleSourceInputChange("source_id", selectedOption.value)
                                                            }
                                                            options={sourceOptions}
                                                            formatGroupLabel={(
                                                                data,
                                                            ) => (
                                                                <div className="group-header">
                                                                    {data.label}
                                                                </div>
                                                            )}
                                                            styles={selectStyles}
                                                            className={classNames("custom-form-select", errors.source_id && "is-invalid")}
                                                        />
                                                    )}

                                                    <div className="invalid-feedback">
                                                        {errors.source_id}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="custom-form-group">
                                            <label>Marketing activity</label>
                                            <input
                                                className="form-control"
                                                value={
                                                    formData.marketing_activity
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "marketing_activity",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.forms}>
                                <ExpandableForm
                                    show={showAddAdditionalPatientInformation}
                                    setShow={
                                        setShowAddAdditionalPatientInformation
                                    }
                                    formName="add-additional-patient-information"
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <ExpandableForm
                                    show={showAddInsuranceInformation}
                                    setShow={setShowAddInsuranceInformation}
                                    formName="add-insurance-information"
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <ExpandableForm
                                    show={showAddDiagnosisCodes}
                                    setShow={setShowAddDiagnosisCodes}
                                    formName="add-diagnosis-codes"
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                                <ExpandableForm
                                    show={showAddTemplateBillableLineItems}
                                    setShow={
                                        setshowAddTemplateBillableLineItems
                                    }
                                    formName="add-templare-billiable-line-items"
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-3 mt-3">
                            <button
                                className="btn btn-large btn-outline-primary"
                                onClick={handleModalClose}
                                style={{ width: "95px" }}>
                                Cancel
                            </button>
                            <button
                                className="btn btn-large btn-primary d-flex justify-content-center align-items-center"
                                onClick={handleSaveClick}
                                style={{ width: "95px" }}
                                disabled={isLoadingSave}>
                                {isLoadingSave ? (
                                    <CircleLoader
                                        color={"#fff"}
                                        size={"small"}
                                    />
                                ) : (
                                    "Save"
                                )}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div
                        className="p-1 d-flex align-items-center justify-content-center"
                        style={{ height: "230px" }}>
                        <div
                            className="spinner-border text-primary"
                            role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default AddPatientModal;
