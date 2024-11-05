import { createSlice } from "@reduxjs/toolkit";
import {
    dateValueCell,
    patientNameValueCell,
} from "../../mixins/cells-functions";
import CustomBadge from "../../pages/SecretaryDashboard/components/CustomBadge";
import hexToRgba from "../../utilities/hexToRgba";
import { ROW_NUMBER_COLUMN } from "../../constants";
import {sortingDate, sortingStatus} from "../../mixins/sorting-functions";
import moment from "../../utilities/moment-config";
import React from "react";
import AssignPatientButton from "../../pages/PatientTransfersDashboard/components/UnassignedPatients/сomponents/AssignPatientButton";
import ArchivePatientButton from "../../pages/PatientTransfersDashboard/components/UnassignedPatients/сomponents/ArchivePatientButton";
import UnassignPatientButton from "../../pages/PatientTransfersDashboard/components/AssignedPatients/components/UnassignPatientButton";
import TransferPatientButton
    from "../../pages/PatientTransfersDashboard/components/AssignedPatients/components/TransferPatientButton";

const initialState = {
    userData: {
        isOnlyAdmin: false,
        isLoadedIsOnlyAdmin: false,
    },
    filtersData: {
        statusesData: {
            statuses: [],
            isLoading: false,
        },
        providersData: {
            providers: [],
            isLoading: false,
        },
        insurancesData: {
            insurances: [],
            isLoading: false,
        },
        dateOfUnassignmentData: {
            intervals: [
                {
                    value: 7,
                    label: '1 week',
                },
                {
                    value: 14,
                    label: '2 weeks',
                },
                {
                    value: 21,
                    label: '3 weeks',
                },
                {
                    value: 30,
                    label: '1 month',
                },
                {
                    value: 60,
                    label: '2 months',
                },
                {
                    value: 90,
                    label: '3 months',
                },
                {
                    value: -1,
                    label: 'All',
                },
                {
                    value: null,
                    label: 'Never',
                },
            ],
        },
        dateOfPatientCreationData: {
            intervals: [
                {
                    value: 7,
                    label: '1 week',
                },
                {
                    value: 14,
                    label: '2 weeks',
                },
                {
                    value: 21,
                    label: '3 weeks',
                },
                {
                    value: 30,
                    label: '1 month',
                },
                {
                    value: 60,
                    label: '2 months',
                },
                {
                    value: 90,
                    label: '3 months',
                },
                {
                    value: -1,
                    label: 'All',
                },
            ],
        },
    },
    assignedPatients: {
        tableData: [],
        filteredTableData: [],
        tableColumns: [
            {
                Header: "#",
                accessor: ROW_NUMBER_COLUMN,
                disableSortBy: true,
                width: 50,
            },
            {
                accessor: "patient_name",
                Header: "Patient's Name",
                Cell: patientNameValueCell,
                width: 150,
            },
            {
                accessor: "patient_status",
                Header: "Patient's Status",
                Cell: ({ value }) => (
                    <CustomBadge
                        title={value.status}
                        background={hexToRgba("#" + value.hex_color, 0.2)}
                        textColor={"#" + value.hex_color}
                    />
                ),
                sortType: sortingStatus,
                width: 80,
            },
            {
                accessor: "patient_insurance",
                Header: "Patient's Insurance",
                Cell: ({value}) => (
                    <div>
                        {value || '-'}
                    </div>
                ),
                width: 120,
            },
            {
                accessor: "missing_notes_count",
                Header: "Missing Notes Count",
                width: 100,
            },
            {
                accessor: "drafts_count",
                Header: "Drafts Count",
                width: 80,
            },
            {
                accessor: "visits_count",
                Header: "Visits count",
                width: 80,
            },
            {
                accessor: "last_visit_date",
                Header: "Last Visit Date",
                Cell: dateValueCell,
                sortType: sortingDate,
                width: 100,
            },
            {
                accessor: "date_of_assignment",
                Header: "Date of Assignment",
                Cell: dateValueCell,
                sortType: sortingDate,
                width: 100,
            },
            {
                Header: "Actions",
                Cell: ({row}) => (
                    <div className="d-flex gap-2">
                        <UnassignPatientButton patientId={row.original.patient_id} />
                        <TransferPatientButton patientId={row.original.patient_id} />
                    </div>
                ),
                disableSortBy: true,
                width: 160,
            },
        ],
        currentPage: 1,
        isLoaded: false,
        isLoading: false,
        filters: {
            provider: {
                id: null,
                provider_name: '',
            },
            search: '',
            statuses: [],
            insurance: {
                id: null,
                insurance: '',
            },
        },

        unassignData: {
            patientId: null,
            loadingPatients: [],
        },
        transferData: {
            patientId: null,
            loadingPatients: [],
        },
    },
    unassignedPatients: {
        tableData: [],
        filteredTableData: [],
        tableColumns: [
            {
                Header: "#",
                accessor: ROW_NUMBER_COLUMN,
                disableSortBy: true,
                width: 50,
            },
            {
                accessor: "patient_name",
                Header: "Patient's Name",
                Cell: patientNameValueCell,
                width: 150,
            },
            {
                accessor: "patient_status",
                Header: "Patient's Status",
                Cell: ({ value }) => (
                    <CustomBadge
                        title={value.status}
                        background={hexToRgba("#" + value.hex_color, 0.2)}
                        textColor={"#" + value.hex_color}
                    />
                ),
                sortType: sortingStatus,
                width: 80,
            },
            {
                accessor: "patient_insurance",
                Header: "Patient's Insurance",
                Cell: ({value}) => (
                    <div>
                        {value || '-'}
                    </div>
                ),
                width: 120,
            },
            {
                accessor: "old_provider",
                Cell: ({value}) => (
                    <div>
                        {value.provider_name || '-'}
                    </div>
                ),
                Header: "Old Therapist",
                width: 120,
            },
            {
                accessor: "date_of_unassignment",
                Header: "Date of Unassignment",
                Cell: dateValueCell,
                sortType: sortingDate,
                width: 100,
            },
            {
                accessor: "date_of_patient_creation",
                Header: "Date of Pt. Creation",
                Cell: dateValueCell,
                sortType: sortingDate,
                width: 100,
            },
            {
                Header: "Actions",
                Cell: ({row}) => (
                    <div className="d-flex gap-2">
                        <AssignPatientButton patientId={row.original.patient_id} />
                        {row.original.patient_status.status !== 'Archived'
                            ? <ArchivePatientButton patientId={row.original.patient_id} />
                            : null
                        }
                    </div>
                ),
                disableSortBy: true,
                width: 130,
            },
        ],
        currentPage: 1,
        isLoading: true,
        filters: {
            old_provider: {
                id: null,
                provider_name: '',
            },
            search: '',
            statuses: [],
            insurance: {
                id: null,
                insurance: '',
            },
            date_of_unassignment: {
                value: -1,
                label: 'All',
            },
            date_of_patient_creation: {
                value: -1,
                label: 'All',
            },
            show_archived_patients: false,
        },

        archiveData: {
            patientId: null,
            loadingPatients: [],
        },
        assignData: {
            patientId: null,
            loadingPatients: [],
        }
    },
};

const slice = createSlice({
    name: "patientTransfersDashboardReducer",
    initialState: initialState,
    reducers: {
        setUserDataIsOnlyAdmin(state, action) {
            state.userData.isOnlyAdmin = action.payload.value;
        },
        setUserDataIsLoadedIsOnlyAdmin(state, action) {
            state.userData.isLoadedIsOnlyAdmin = action.payload.value;
        },
        setFiltersDataProvidersDataProvidersAC(state, action) {
            state.filtersData.providersData.providers = action.payload.data;
        },
        setFiltersDataProvidersDataIsLoadingAC(state, action) {
            state.filtersData.providersData.isLoading = action.payload.value;
        },
        setFiltersDataStatusesDataStatusesAC(state, action) {
            state.filtersData.statusesData.statuses = action.payload.data;
        },
        setFiltersDataStatusesDataIsLoadingAC(state, action) {
            state.filtersData.statusesData.isLoading = action.payload.value;
        },
        setFiltersDataInsurancesDataInsurancesAC(state, action) {
            state.filtersData.insurancesData.insurances = action.payload.data;
        },
        setFiltersDataInsurancesDataIsLoadingAC(state, action) {
            state.filtersData.insurancesData.isLoading = action.payload.value;
        },

        setAssignedPatientsTableDataAC(state, action) {

            state.assignedPatients.tableData = action.payload.data.map(item => {
                const date_of_assignment =
                    item.patient_has_providers.filter(item => item.providers_id === state.assignedPatients.filters.provider.id)[0]?.created_at;

                return {
                    id: item.id,
                    patient_id: item.id,
                    patient_name: item.full_name,
                    patient_status: item.status,
                    patient_insurance_id: item.insurance?.id,
                    patient_insurance: item.insurance?.insurance,
                    patient_sex: item.sex,
                    patient_age: item.date_of_birth
                        ? moment().diff(item.date_of_birth, 'years')
                        : null,
                    missing_notes_count: item.missing_notes_count,
                    drafts_count: item.drafts_count,
                    visits_count: item.visits_count,
                    upcoming_appointments_count: item.upcoming_appointments_count,
                    last_visit_date: item.last_visit_date
                        ? moment(item.last_visit_date).format('MM/DD/YYYY')
                        : null,
                    date_of_assignment: date_of_assignment
                        ? moment(date_of_assignment).format('MM/DD/YYYY')
                        : null,
                    next_appointment_date: item.next_appointment_date
                        ? moment(item.next_appointment_date).format('MM/DD/YYYY')
                        : null,
                    patient_has_providers: item.patient_has_providers,
                };
            });
        },
        setAssignedPatientsFilteredTableDataAC(state, action) {
            state.assignedPatients.filteredTableData = action.payload.data;
        },
        updateAssignedPatientsFilteredTableDataAC(state) {
            const { filters } = state.assignedPatients;

            const searchInputLowerCase = filters.search.toLowerCase();
            const filterStatusesLabels = filters.statuses.map(item => item.status);

            state.assignedPatients.filteredTableData = state.assignedPatients.tableData.filter(item => {
                if (filters.search && item.patient_name.toLowerCase().indexOf(searchInputLowerCase) === -1) {
                    return false;
                }
                if (filters.statuses.length && ! filterStatusesLabels.includes(item.patient_status.status)) {
                    return false;
                }
                if (filters.insurance.id && item.patient_insurance_id !== filters.insurance.id) {
                    return false;
                }

                return true;
            })
        },

        setAssignedPatientsCurrentPageAC(state, action) {
            state.assignedPatients.currentPage = action.payload.value;
        },
        setAssignedPatientsIsLoadingAC(state, action) {
            state.assignedPatients.isLoading = action.payload.value;
        },
        setAssignedPatientsIsLoadedAC(state, action) {
            state.assignedPatients.isLoaded = action.payload.value;
        },

        setAssignedPatientsFiltersProviderAC(state, action) {
            const {id, provider_name} = action.payload;

            state.assignedPatients.filters.provider.id = id;
            state.assignedPatients.filters.provider.provider_name = provider_name;
        },
        setAssignedPatientsFiltersSearchAC(state, action) {
            state.assignedPatients.currentPage = 1;
            state.assignedPatients.filters.search = action.payload.value;
        },
        setAssignedPatientsFiltersStatusesAC(state, action) {
            state.assignedPatients.currentPage = 1;
            state.assignedPatients.filters.statuses = action.payload.options.map(option => ({
                id: option.value,
                status: option.label,
            }));
        },
        setAssignedPatientsFiltersInsuranceAC(state, action) {
            const {id, insurance} = action.payload;

            state.assignedPatients.filters.insurance.id = id;
            state.assignedPatients.filters.insurance.insurance = insurance;
        },

        setAssignedPatientsUnassignDataPatientIdAC(state, action) {
            state.assignedPatients.unassignData.patientId = action.payload.patientId;
        },
        addAssignedPatientsUnassignDataLoadingPatientsAC(state, action) {
            if (! state.assignedPatients.unassignData.loadingPatients.includes(action.payload.patientId)) {
                state.assignedPatients.unassignData.loadingPatients.push(action.payload.patientId);
            }
        },
        removePatientIdFromAssignedPatientsUnassignDataLoadingPatientsAC(state, action) {
            const index = state.assignedPatients.unassignData.loadingPatients
                .findIndex(item => item === action.payload.patientId);
            if (index !== -1) {
                state.assignedPatients.unassignData.loadingPatients.splice(index, 1);
            }
        },
        setAssignedPatientsTransferDataPatientIdAC(state, action) {
            state.assignedPatients.transferData.patientId = action.payload.patientId;
        },
        addAssignedPatientsTransferDataLoadingPatientsAC(state, action) {
            if (! state.assignedPatients.transferData.loadingPatients.includes(action.payload.patientId)) {
                state.assignedPatients.transferData.loadingPatients.push(action.payload.patientId);
            }
        },
        removePatientIdFromAssignedPatientsTransferDataLoadingPatientsAC(state, action) {
            const index = state.assignedPatients.transferData.loadingPatients
                .findIndex(item => item === action.payload.patientId);
            if (index !== -1) {
                state.assignedPatients.transferData.loadingPatients.splice(index, 1);
            }
        },
        deletePatientFromAssignedPatientsTableDataAC(state, action) {
            const index = state.assignedPatients.tableData.findIndex(item => item.patient_id === action.payload.patientId)
            if (index !== -1) {
                state.assignedPatients.tableData.splice(index, 1);
            }
        },

        setUnassignedPatientsTableDataAC(state, action) {
            state.unassignedPatients.tableData = action.payload.data.map(item => ({
                id: item.id,
                patient_id: item.patient.id,
                patient_name: `${item.patient.first_name} ${item.patient.last_name} ${item.patient.middle_name || ''}`,
                patient_status: item.patient.status,
                patient_insurance_id: item.patient.insurance?.id,
                patient_insurance: item.patient.insurance?.insurance,
                old_provider: {
                    id: item.old_provider?.id,
                    provider_name: item.old_provider?.provider_name,
                },
                date_of_unassignment: item.unassigned_at
                    ? moment(item.unassigned_at).format('MM/DD/YYYY')
                    : null,
                date_of_patient_creation: item.patient.created_at
                    ? moment(item.patient.created_at).format('MM/DD/YYYY')
                    : null,
            }));
        },
        setUnassignedPatientsFilteredTableDataAC(state, action) {
            state.unassignedPatients.filteredTableData = action.payload.data;
        },
        setUnassignedPatientsCurrentPageAC(state, action) {
            state.unassignedPatients.currentPage = action.payload.value;
        },
        setUnassignedPatientsIsLoadingAC(state, action) {
            state.unassignedPatients.isLoading = action.payload.value;
        },

        setUnassignedPatientsFiltersOldProviderAC(state, action) {
            const {id, provider_name} = action.payload;

            state.unassignedPatients.filters.old_provider.id = id;
            state.unassignedPatients.filters.old_provider.provider_name = provider_name;
        },
        setUnassignedPatientsFiltersSearchAC(state, action) {
            state.unassignedPatients.currentPage = 1;
            state.unassignedPatients.filters.search = action.payload.value;
        },
        setUnassignedPatientsFiltersStatusesAC(state, action) {
            state.unassignedPatients.currentPage = 1;
            state.unassignedPatients.filters.statuses = action.payload.options.map(option => ({
                id: option.value,
                status: option.label,
            }));
        },
        setUnassignedPatientsFiltersInsuranceAC(state, action) {
            const {id, insurance} = action.payload;

            state.unassignedPatients.filters.insurance.id = id;
            state.unassignedPatients.filters.insurance.insurance = insurance;
        },
        setUnassignedPatientsFiltersDateOfUnassignAC(state, action) {
            const {value, label} = action.payload;

            state.unassignedPatients.currentPage = 1;
            state.unassignedPatients.filters.date_of_unassignment.value = value;
            state.unassignedPatients.filters.date_of_unassignment.label = label;
        },
        setUnassignedPatientsFiltersDateOfPatientCreationAC(state, action) {
            const {value, label} = action.payload;

            state.unassignedPatients.currentPage = 1;
            state.unassignedPatients.filters.date_of_patient_creation.value = value;
            state.unassignedPatients.filters.date_of_patient_creation.label = label;
        },
        setUnassignedPatientsFiltersShowArchivedPatientsAC(state, action) {
            state.unassignedPatients.filters.show_archived_patients = action.payload.value;
        },
        updateUnassignedPatientsFilteredTableDataAC(state) {
            const { filters } = state.unassignedPatients;

            const searchInputLowerCase = filters.search.toLowerCase();
            const filterStatusesLabels = filters.statuses.map(item => item.status);
            const minDateOfPatientUnassignment = filters.date_of_unassignment.value && filters.date_of_unassignment.value > 0
                ? moment().subtract(filters.date_of_unassignment.value, "days")
                : null;
            const minDateOfPatientCreation = filters.date_of_patient_creation.value && filters.date_of_patient_creation.value > 0
                ? moment().subtract(filters.date_of_patient_creation.value, "days")
                : null;

            state.unassignedPatients.filteredTableData = state.unassignedPatients.tableData.filter(item => {
                if (filters.old_provider.id && item.old_provider.id !== filters.old_provider.id) {
                    return false;
                }
                if (filters.search && item.patient_name.toLowerCase().indexOf(searchInputLowerCase) === -1) {
                    return false;
                }
                if (filters.statuses.length && ! filterStatusesLabels.includes(item.patient_status.status)) {
                    return false;
                }
                if (filters.insurance.id && item.patient_insurance_id !== filters.insurance.id) {
                    return false;
                }
                if (filters.date_of_unassignment.value !== -1) {
                    if (filters.date_of_unassignment.value === null && item.date_of_unassignment !== null) {
                        return false;
                    }
                    if ((filters.date_of_unassignment.value !== null && item.date_of_unassignment === null)
                        || moment(item.date_of_unassignment).isBefore(minDateOfPatientUnassignment)
                    ) {
                        return false;
                    }
                }
                if (filters.date_of_patient_creation.value !== -1) {
                    if (moment(item.date_of_patient_creation).isBefore(minDateOfPatientCreation)) {
                        return false;
                    }
                }
                if (! filters.show_archived_patients && item.patient_status.status === 'Archived') {
                    return false;
                }

                return true;
            })
        },


        setUnassignedPatientsArchiveDataPatientId(state, action) {
            state.unassignedPatients.archiveData.patientId = action.payload.patientId;
        },
        addPatientIdToUnassignedPatientsArchiveDataLoadingPatients(state, action) {
            if (! state.unassignedPatients.archiveData.loadingPatients.includes(action.payload.patientId)) {
                state.unassignedPatients.archiveData.loadingPatients.push(action.payload.patientId);
            }
        },
        removePatientIdFromUnassignedPatientsArchiveDataLoadingPatients(state, action) {
            const index = state.unassignedPatients.archiveData.loadingPatients
                .findIndex(item => item === action.payload.patientId);
            if (index !== -1) {
                state.unassignedPatients.archiveData.loadingPatients.splice(index, 1);
            }
        },
        setUnassignedPatientsAssignDataPatientId(state, action) {
            state.unassignedPatients.assignData.patientId = action.payload.patientId;
        },
        addPatientIdToUnassignedPatientsAssignDataLoadingPatients(state, action) {
            if (! state.unassignedPatients.assignData.loadingPatients.includes(action.payload.patientId)) {
                state.unassignedPatients.assignData.loadingPatients.push(action.payload.patientId);
            }
        },
        removePatientIdFromUnassignedPatientsAssignDataLoadingPatients(state, action) {
            const index = state.unassignedPatients.assignData.loadingPatients
                .findIndex(item => item === action.payload.patientId);
            if (index !== -1) {
                state.unassignedPatients.assignData.loadingPatients.splice(index, 1);
            }
        },
        deletePatientFromUnassignedPatientTableData(state, action) {
            const index = state.unassignedPatients.tableData.findIndex(item => item.patient_id === action.payload.patientId);

            if (index !== -1) {
                state.unassignedPatients.tableData.splice(index, 1);
            }
        },
    },
});

export const patientTransfersDashboardReducerReducer = slice.reducer;

export const {
    setUserDataIsOnlyAdmin,
    setUserDataIsLoadedIsOnlyAdmin,

    setFiltersDataProvidersDataProvidersAC,
    setFiltersDataProvidersDataIsLoadingAC,
    setFiltersDataStatusesDataStatusesAC,
    setFiltersDataStatusesDataIsLoadingAC,
    setFiltersDataInsurancesDataInsurancesAC,
    setFiltersDataInsurancesDataIsLoadingAC,

    setAssignedPatientsTableDataAC,
    setAssignedPatientsFiltersStatusesAC,
    setAssignedPatientsCurrentPageAC,
    setAssignedPatientsIsLoadingAC,
    setAssignedPatientsIsLoadedAC,

    setAssignedPatientsFiltersProviderAC,
    setAssignedPatientsFiltersSearchAC,
    setAssignedPatientsFiltersInsuranceAC,
    setAssignedPatientsFilteredTableDataAC,
    updateAssignedPatientsFilteredTableDataAC,

    setAssignedPatientsUnassignDataPatientIdAC,
    addAssignedPatientsUnassignDataLoadingPatientsAC,
    removePatientIdFromAssignedPatientsUnassignDataLoadingPatientsAC,
    setAssignedPatientsTransferDataPatientIdAC,
    addAssignedPatientsTransferDataLoadingPatientsAC,
    removePatientIdFromAssignedPatientsTransferDataLoadingPatientsAC,
    deletePatientFromAssignedPatientsTableDataAC,

    setUnassignedPatientsTableDataAC,
    setUnassignedPatientsFilteredTableDataAC,
    setUnassignedPatientsCurrentPageAC,
    setUnassignedPatientsIsLoadingAC,

    setUnassignedPatientsFiltersOldProviderAC,
    setUnassignedPatientsFiltersSearchAC,
    setUnassignedPatientsFiltersStatusesAC,
    setUnassignedPatientsFiltersInsuranceAC,
    setUnassignedPatientsFiltersDateOfUnassignAC,
    setUnassignedPatientsFiltersDateOfPatientCreationAC,
    setUnassignedPatientsFiltersShowArchivedPatientsAC,
    updateUnassignedPatientsFilteredTableDataAC,

    setUnassignedPatientsArchiveDataPatientId,
    addPatientIdToUnassignedPatientsArchiveDataLoadingPatients,
    removePatientIdFromUnassignedPatientsArchiveDataLoadingPatients,
    setUnassignedPatientsAssignDataPatientId,
    addPatientIdToUnassignedPatientsAssignDataLoadingPatients,
    removePatientIdFromUnassignedPatientsAssignDataLoadingPatients,
    deletePatientFromUnassignedPatientTableData,
} = slice.actions;
