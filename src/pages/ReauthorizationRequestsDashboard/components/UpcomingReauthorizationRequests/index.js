import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import moment from "moment-timezone";
import classNames from "classnames";
import { createPortal } from "react-dom";
import { getSelectStyles } from "../../../../utilities/react-select-styles";
import CrossSvg from "../../../../components/CrossSvg";
import SearchInput from "../../../../components/SearchInput";
import Table from "../../../../components/Table";
import { getUpcomingReauthorizationRequests } from "../../../../api/pages/reauthorization-request-dashboard-page";
import * as ReauthorizationRequestsDashboardReducer from "../../../../store/reducers/reauthorizationRequestsDashboard.reducer";
import { READY_TO_SEND_STAGE_ID } from "../../../../constants/reauthorization-request-dashboard";
import styles from "../../index.module.scss";

const UpcomingReauthorizationRequests = () => {
    const dispatch = useDispatch();

    const { patientStatuses, providersList, upcomingReauthorizationRequests } =
        useSelector((state) => state.reauthorizationRequestsDashboard);

    const {
        tableData,
        tableColumns,
        tableParams,
        dataIsLoaded,
        therapistName,
        selectedPatientStatuses,
        expirationsList,
        selectedExpiration,
        searchText,
    } = upcomingReauthorizationRequests;

    const tableName = "upcomingReauthorizationRequests";
    const tabPortalId = "upcoming-reauthorization-requests";

    const selectStyles = getSelectStyles();
    const submittedBySelectStyles = {
        ...selectStyles,
        valueContainer: (baseStyles) => ({
            ...baseStyles,
            ...selectStyles.valueContainer,
            paddingRight: "25px",
        }),
    };

    const handleClearTherapistNameInput = () => {
        dispatch(
            ReauthorizationRequestsDashboardReducer.setUpcomingReauthorizationTherapistNameAC(
                {
                    value: { value: 0, label: "All" },
                },
            ),
        );
    };

    const handleClearSearchInput = () => {
        dispatch(
            ReauthorizationRequestsDashboardReducer.setUpcomingReauthorizationSearchTextAC(
                { value: "" },
            ),
        );
    };

    const calculateLastPage = (total) => {
        return Math.max(1, Math.ceil(total / tableParams.per_page));
    };

    const isAlmostOverdue = (patient) => {
        if (
            !patient.auth_number ||
            !patient.visits_auth_left ||
            !patient.eff_stop_date
        ) {
            return false;
        }

        const daysDiff = moment(patient.eff_stop_date, "YYYY-MM-DD").diff(
            moment(),
            "days",
        );

        if (daysDiff <= 0 || patient.visits_auth_left <= 0) {
            return false;
        }

        return (
            daysDiff <=
                patient.insurance_plan
                    .reauthorization_notification_days_count ||
            patient.visits_auth_left <=
                patient.insurance_plan.reauthorization_notification_visits_count
        );
    };

    const isOverdue = (patient) => {
        if (
            !patient.auth_number ||
            !patient.visits_auth_left ||
            !patient.eff_stop_date
        ) {
            return true;
        }

        const daysDiff = moment(patient.eff_stop_date, "YYYY-MM-DD").diff(
            moment(),
            "days",
        );

        return daysDiff <= 0 || patient.visits_auth_left <= 0;
    };

    const getRowClassName = (patient) => {
        if (isAlmostOverdue(patient)) {
            return "almost-overdue";
        }

        if (isOverdue(patient)) {
            return "overdue";
        }

        return "";
    };

    const getCanCreateReauthorizationForm = (patient) => {
        const { insurance_plan, insurance_reauthorization_request_forms } = patient;

        if (
            !insurance_plan ||
            insurance_plan.requires_reauthorization_document
        ) {
            return false;
        }

        if (
            !insurance_reauthorization_request_forms &&
            insurance_reauthorization_request_forms.length === 0
        ) {
            return true;
        }

        return !insurance_reauthorization_request_forms.some(
            (form) => form.stage_id === READY_TO_SEND_STAGE_ID,
        );
    };

    const getTableData = (data) => {
        const tableData = [];
        data.forEach((el) => {
            tableData.push({
                id: el.id,
                patient_id: el.id,
                patient_name: `${el.first_name} ${el.last_name}`,
                insurance:
                    el.primary_insurance || el.secondary_insurance || "-",
                insurance_plan: el.insurance_plan,
                provider: el.last_appointment?.provider?.provider_name || "-",
                patient_status: el.status,
                auth_number: el.auth_number || "N/A",
                eff_start_date: el.eff_start_date
                    ? moment(el.eff_start_date, "YYYY-MM-DD").format(
                          "MM/DD/YYYY",
                      )
                    : "-",
                eff_stop_date: el.eff_stop_date
                    ? moment(el.eff_stop_date, "YYYY-MM-DD").format(
                          "MM/DD/YYYY",
                      )
                    : "-",
                visits_auth: el.visits_auth || "-",
                visits_auth_left: el.visits_auth_left || "-",
                reauhtorization_request_document: el.reauhtorization_request_document,
                row_class_name: getRowClassName(el),
                can_create_reauthorization_form: getCanCreateReauthorizationForm(el),
            });
        });

        return tableData;
    };

    const getParams = () => {
        const params = {};

        if (therapistName.value) {
            params.provider_id = therapistName.value;
        }
        if (selectedPatientStatuses.length > 0) {
            params.patient_statuses = selectedPatientStatuses.map(
                (status) => status.value,
            );
        }
        if (selectedExpiration.length > 0) {
            params.expiration = selectedExpiration.map((stage) => stage.value);
        }
        if (searchText) {
            params.search_text = searchText;
        }

        return params;
    };

    const fetchTableData = () => {
        dispatch(
            ReauthorizationRequestsDashboardReducer.setDataIsLoadedAC({
                tableName,
                value: false,
            }),
        );
        dispatch(
            ReauthorizationRequestsDashboardReducer.setCurrentPageInTableAC({
                tableName,
                value: 1,
            }),
        );

        getUpcomingReauthorizationRequests(getParams()).then(({ data }) => {
            const tableData = getTableData(data.data);

            dispatch(
                ReauthorizationRequestsDashboardReducer.setDataInTableAC({
                    tableName,
                    value: tableData,
                }),
            );

            dispatch(
                ReauthorizationRequestsDashboardReducer.setTotalInTableAC({
                    tableName,
                    value: data.meta.total,
                }),
            );

            const lastPage = calculateLastPage(data.meta.total);

            if (lastPage !== tableParams.last_page) {
                dispatch(
                    ReauthorizationRequestsDashboardReducer.setLastPageInTableAC(
                        { tableName, value: lastPage },
                    ),
                );
            }

            dispatch(
                ReauthorizationRequestsDashboardReducer.setDataIsLoadedAC({
                    tableName,
                    value: true,
                }),
            );
        });
    }

    useEffect(() => {
        fetchTableData();
    }, [])

    const portalDOM = document.getElementById(tabPortalId);

    return (
        <div className="dashboard-table-wrapper">
            {portalDOM &&
                createPortal(
                    <div
                        className="d-flex gap-2 mb-2"
                        style={{ minHeight: "44px" }}>
                        <div
                            className="flex-shrink-0 d-flex flex-column gap-1"
                            style={{ width: "200px" }}>
                            <div className="fw-bold">Therapist Name</div>
                            <div className="position-relative d-flex align-items-center">
                                <Select
                                    value={therapistName}
                                    onChange={(selectedOption) =>
                                        dispatch(
                                            ReauthorizationRequestsDashboardReducer.setUpcomingReauthorizationTherapistNameAC(
                                                {
                                                    value: selectedOption,
                                                },
                                            ),
                                        )
                                    }
                                    options={[
                                        { id: 0, provider_name: "All" },
                                        ...providersList,
                                    ].map((item) => ({
                                        value: item.id,
                                        label: item.provider_name,
                                    }))}
                                    className={styles.submittedBySelect}
                                    styles={submittedBySelectStyles}
                                />
                                {therapistName.value !== 0 && (
                                    <CrossSvg
                                        handleClick={
                                            handleClearTherapistNameInput
                                        }
                                        className={classNames(
                                            styles.cross,
                                            styles.submittedByCross,
                                        )}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <div className="fw-bold">Patient Name</div>
                            <div className="position-relative d-flex align-items-center">
                                <SearchInput
                                    value={searchText}
                                    onChange={(e) =>
                                        dispatch(
                                            ReauthorizationRequestsDashboardReducer.setUpcomingReauthorizationSearchTextAC(
                                                {
                                                    value: e.target.value,
                                                },
                                            ),
                                        )
                                    }
                                    placeholder="Search by name"
                                    style={{
                                        width: "200px",
                                        height: "38px",
                                        paddingRight: "30px",
                                    }}
                                />
                                {searchText && (
                                    <CrossSvg
                                        handleClick={handleClearSearchInput}
                                        className={classNames(
                                            styles.cross,
                                            styles.searchCross,
                                        )}
                                    />
                                )}
                            </div>
                        </div>
                        <div
                            className="d-flex flex-column gap-1"
                            style={{ width: "400px" }}>
                            <div className="fw-bold">Patient Status</div>
                            <Select
                                value={selectedPatientStatuses}
                                onChange={(selectedOption) =>
                                    dispatch(
                                        ReauthorizationRequestsDashboardReducer.setUpcomingReauthorizationSelectedPatientStatusesAC(
                                            { value: selectedOption },
                                        ),
                                    )
                                }
                                options={patientStatuses.map((item) => ({
                                    value: item.id,
                                    label: item.status,
                                }))}
                                isMulti
                                closeMenuOnSelect={false}
                                placeholder="Select statuses..."
                                styles={selectStyles}
                            />
                        </div>
                        <div
                            className="d-flex flex-column gap-1"
                            style={{ width: "400px" }}>
                            <div className="fw-bold">Expiration</div>
                            <Select
                                value={selectedExpiration}
                                onChange={(selectedOption) =>
                                    dispatch(
                                        ReauthorizationRequestsDashboardReducer.setUpcomingReauthorizationSelectedExpirationAC(
                                            {
                                                value: selectedOption,
                                            },
                                        ),
                                    )
                                }
                                options={expirationsList.map((item) => ({
                                    value: item.id,
                                    label: item.title,
                                }))}
                                isMulti
                                closeMenuOnSelect={false}
                                placeholder="Select expiration..."
                                styles={selectStyles}
                            />
                        </div>
                        <button
                            className={classNames("btn btn-large btn-primary", styles.btnFetchTableData)}
                            disabled={!dataIsLoaded}
                            onClick={fetchTableData}
                        >
                            Show
                        </button>
                    </div>,
                    portalDOM,
                )}
            <Table
                pageSize={tableParams.per_page}
                columns={tableColumns}
                currentPage={tableParams.current_page}
                data={tableData}
                dataIsLoaded={dataIsLoaded}
            />
        </div>
    );
};

export default UpcomingReauthorizationRequests;
