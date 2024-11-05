import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import classNames from "classnames";
import moment from "moment-timezone";
import { createPortal } from "react-dom";
import { getSelectStyles } from "../../../../utilities/react-select-styles";
import SearchInput from "../../../../components/SearchInput";
import CrossSvg from "../../../../components/CrossSvg";
import Table from "../../../../components/Table/index";
import { getSubmittedReauthorizationRequestForms } from "../../../../api/pages/reauthorization-request-dashboard-page";
import * as ReauthorizationRequestsDashboardReduced from "../../../../store/reducers/reauthorizationRequestsDashboard.reducer";
import styles from "../../index.module.scss";
import {
    getFirstElementFromLogsAndSharedDocuments,
    getSendMethodNameFromId,
    getStageChangeHistory,
} from "../../../../utilities/reauthorizationRequestsDashboardUtils";

const SubmittedReauthorizationRequestForms = () => {
    const dispatch = useDispatch();

    const {
        patientStatuses,
        providersList,
        submittedReauthorizationRequestForms,
    } = useSelector((state) => state.reauthorizationRequestsDashboard);

    const {
        tableData,
        tableColumns,
        dataIsLoaded,
        tableParams,
        stages,
        submittedBy,
        selectedPatientStatuses,
        selectedStages,
        searchText,
    } = submittedReauthorizationRequestForms;

    const tableName = "submittedReauthorizationRequestForms";
    const tabPortalId = "submitted-reauthorization-request-forms";

    const selectStyles = getSelectStyles();
    const submittedBySelectStyles = {
        ...selectStyles,
        valueContainer: (baseStyles) => ({
            ...baseStyles,
            ...selectStyles.valueContainer,
            paddingRight: "25px",
        }),
    };

    const handleClearSubmittedByInput = () => {
        dispatch(
            ReauthorizationRequestsDashboardReduced.setRequestFormSubmittedByAC(
                { value: { value: 0, label: "All" } },
            ),
        );
    };

    const handleClearSearchInput = () => {
        dispatch(
            ReauthorizationRequestsDashboardReduced.setRequestFormSearchTextAC({
                value: "",
            }),
        );
    };

    const getDocument = (requestForm) => {
        if (requestForm.document) {
            return {
                ...requestForm.document,
                document_type: requestForm.document_type,
            };
        }

        return null;
    };

    const getSubmittedByValue = (submitter) => {
        if (!submitter) {
            return "-";
        }
        if (submitter.provider_id) {
            return submitter.provider.provider_name;
        }

        const { firstname, lastname } = submitter.meta;
        return `${firstname} ${lastname}`;
    };

    const getSubmittedAtValue = (requestForm) => {
        if (requestForm.document) {
            return moment(requestForm.document.created_at).format("MM/DD/YYYY");
        }

        return moment(requestForm.created_at).format("MM/DD/YYYY");
    };

    const getSendMethod = (requestForm) => {
        const document = requestForm.document;
        let firstLog = null;
        let firstSharedDocument = null;

        if (requestForm.logs && requestForm.logs.length > 0) {
            firstLog = requestForm.logs[0];
        }

        if (document && document.document_shared.length !== 0) {
            firstSharedDocument = document.document_shared[0];
        }

        if (!firstLog && !firstSharedDocument) {
            return "-";
        }

        const firstElement = getFirstElementFromLogsAndSharedDocuments(
            firstLog,
            firstSharedDocument,
        );

        if (firstElement.log_type) {
            return getSendMethodNameFromId(firstElement.log_type);
        }

        return firstElement.shared_method.method;
    };

    const getSentAt = (requestForm) => {
        const document = requestForm.document;
        let firstLog = null;
        let firstSharedDocument = null;

        if (requestForm.logs && requestForm.logs.length > 0) {
            firstLog = requestForm.logs[0];
            return moment(requestForm.logs[0].created_at).format("MM/DD/YYYY");
        }

        if (document && document.document_shared.length !== 0) {
            firstSharedDocument = document.document_shared[0];
            return moment(document.document_shared[0].created_at).format(
                "MM/DD/YYYY",
            );
        }

        if (!firstLog && !firstSharedDocument) {
            return "-";
        }

        const firstElement = getFirstElementFromLogsAndSharedDocuments(
            firstLog,
            firstSharedDocument,
        );

        return moment(firstElement.created_at).format("MM/DD/YYYY");
    };

    const getInsuranceAuthorizationNumberData = (patient) => {
        if (!patient.insurance_plan) {
            return null;
        }

        return {
            insurance_requires_verification:
                patient.insurance_plan.is_verification_required,
            insurance_authorization_number: patient.auth_number,
            insurance_visits_auth: patient.visits_auth,
            insurance_visits_auth_left: patient.visits_auth_left,
            insurance_eff_start_date: patient.eff_start_date,
            insurance_eff_stop_date: patient.eff_stop_date,
            reauthorization_notification_visits_count:
                patient.insurance_plan
                    .reauthorization_notification_visits_count,
            reauthorization_notification_days_count:
                patient.insurance_plan.reauthorization_notification_days_count,
        };
    };

    const getTableData = (data) => {
        const tableData = [];
        data.forEach((el) => {
            const patient = el.patient;

            tableData.push({
                id: el.id,
                patient_id: patient.id,
                patient_name: `${patient.first_name} ${patient.last_name}`,
                insurance:
                    patient.primary_insurance ||
                    patient.secondary_insurance ||
                    "-",
                patient_status: patient.status,
                document: getDocument(el),
                auth_number_data: getInsuranceAuthorizationNumberData(patient),
                submitted_by: getSubmittedByValue(el.submitter),
                submitted_at: getSubmittedAtValue(el),
                send_method: getSendMethod(el),
                sent_at: getSentAt(el),
                stage: el.stage_id,
                stage_changed_on: el.stage_changed_at
                    ? moment(el.stage_changed_at).format("MM/DD/YYYY")
                    : "-",
                stage_comment: el.comment,
                logs: el.logs || null,
                future_auth_number_data:
                    el.future_insurance_reauthorization_data,
                stage_change_history: getStageChangeHistory(el),
            });
        });

        return tableData;
    };

    const calculateLastPage = (total) => {
        return Math.max(1, Math.ceil(total / tableParams.per_page));
    };

    const getParams = () => {
        const params = {};

        if (submittedBy.value) {
            params.submitted_by = submittedBy.value;
        }
        if (selectedPatientStatuses.length > 0) {
            params.patient_statuses = selectedPatientStatuses.map(
                (status) => status.value,
            );
        }
        if (selectedStages.length > 0) {
            params.stages = selectedStages.map((stage) => stage.value);
        }
        if (searchText) {
            params.search_text = searchText;
        }

        return params;
    };

    const fetchTableData = () => {
        dispatch(
            ReauthorizationRequestsDashboardReduced.setDataIsLoadedAC({
                tableName,
                value: false,
            }),
        );
        dispatch(
            ReauthorizationRequestsDashboardReduced.setCurrentPageInTableAC({
                tableName,
                value: 1,
            }),
        );

        getSubmittedReauthorizationRequestForms(getParams()).then(
            ({ data }) => {
                const tableData = getTableData(data.data);

                dispatch(
                    ReauthorizationRequestsDashboardReduced.setDataInTableAC({
                        tableName,
                        value: tableData,
                    }),
                );

                dispatch(
                    ReauthorizationRequestsDashboardReduced.setTotalInTableAC({
                        tableName,
                        value: data.meta.total,
                    }),
                );

                const lastPage = calculateLastPage(data.meta.total);

                if (lastPage !== tableParams.last_page) {
                    dispatch(
                        ReauthorizationRequestsDashboardReduced.setLastPageInTableAC(
                            { tableName, value: lastPage },
                        ),
                    );
                }

                dispatch(
                    ReauthorizationRequestsDashboardReduced.setDataIsLoadedAC({
                        tableName,
                        value: true,
                    }),
                );
            },
        );
    };

    useEffect(() => {
        fetchTableData();
    }, []);

    const portalDOM = document.getElementById(tabPortalId);

    return (
        <div className="dashboard-table-wrapper" style={{ maxHeight: "none" }}>
            {portalDOM &&
                createPortal(
                    <div
                        className="d-flex gap-2 mb-2"
                        style={{ minHeight: "44px" }}>
                        <div
                            className="flex-shrink-0 d-flex flex-column gap-1"
                            style={{ width: "200px" }}>
                            <div className="fw-bold">Request filed by</div>
                            <div className="position-relative d-flex align-items-center">
                                <Select
                                    value={submittedBy}
                                    onChange={(selectedOption) =>
                                        dispatch(
                                            ReauthorizationRequestsDashboardReduced.setRequestFormSubmittedByAC(
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
                                {submittedBy.value !== 0 && (
                                    <CrossSvg
                                        handleClick={
                                            handleClearSubmittedByInput
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
                                            ReauthorizationRequestsDashboardReduced.setRequestFormSearchTextAC(
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
                                        ReauthorizationRequestsDashboardReduced.setRequestFormSelectedPatientStatusesAC(
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
                            <div className="fw-bold">Stage</div>
                            <Select
                                value={selectedStages}
                                onChange={(selectedOption) =>
                                    dispatch(
                                        ReauthorizationRequestsDashboardReduced.setRequestFormSelectedStagesAC(
                                            {
                                                value: selectedOption,
                                            },
                                        ),
                                    )
                                }
                                options={stages.map((item) => ({
                                    value: item.id,
                                    label: item.name,
                                }))}
                                isMulti
                                closeMenuOnSelect={false}
                                placeholder="Select stages..."
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

export default SubmittedReauthorizationRequestForms;
