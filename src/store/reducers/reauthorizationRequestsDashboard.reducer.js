import { createSlice } from "@reduxjs/toolkit";
import {
    patientNameValueCell,
    patientNameWithScrollLinkValueCell,
    reauthorizationRequestDocumentCell,
    sendMethodValueCell,
} from "../../mixins/cells-functions";
import {
    sortingDate,
    sortingName,
    sortingStatus,
    sortingReauthorizationRequestDocument
} from "../../mixins/sorting-functions";
import CustomBadge from "../../pages/SecretaryDashboard/components/CustomBadge";
import hexToRgba from "../../utilities/hexToRgba";
import { ROW_NUMBER_COLUMN } from "../../constants";
import ActionsButton from "../../pages/ReauthorizationRequestsDashboard/components/SubmittedReauthorizationRequestForms/components/ActionsButton";
import StageSelect from "../../pages/ReauthorizationRequestsDashboard/components/SubmittedReauthorizationRequestForms/components/StageSelect";
import InsuranceAuthorizationNumber from "../../components/InsuranceAuthorizationNumber";
import {
    ACTIVE_PATIENT_STATUS_ID,
    ACTIVE_PATIENT_STATUS_TITLE,
    READY_TO_SEND_STAGE_ID,
    READY_TO_SEND_STAGE_TITLE,
} from "../../constants/reauthorization-request-dashboard";
import CreateRequestButton from "../../pages/ReauthorizationRequestsDashboard/components/UpcomingReauthorizationRequests/components/CreateRequestButton";

const initialState = {
    patientStatuses: [],
    providersList: [],
    documentDefaultFaxesList: [],
    documentDefaultEmailsList: [],
    upcomingReauthorizationRequests: {
        tableData: [],
        tableColumns: [
            {
                Header: "",
                accessor: ROW_NUMBER_COLUMN,
                disableSortBy: true,
                width: 50,
            },
            {
                accessor: "patient_name",
                Header: "Patient's Name",
                Cell: patientNameValueCell,
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "insurance",
                Header: "Insurance",
                width: 100,
            },
            {
                accessor: "provider",
                Header: "Therapist Name",
                width: 120,
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
                accessor: "auth_number",
                Header: "Authorization number",
                width: 110,
            },
            {
                accessor: "eff_start_date",
                Header: "Eff. Start Date",
                sortType: sortingDate,
                width: 100,
            },
            {
                accessor: "eff_stop_date",
                Header: "Eff. Stop Date",
                sortType: sortingDate,
                width: 100,
            },
            {
                accessor: "visits_auth",
                Header: "Visits Auth",
                width: 60,
            },
            {
                accessor: "visits_auth_left",
                Header: "Visits Auth Left",
                width: 100,
            },
            {
                accessor: "reauhtorization_request_document",
                Header: "Document Status",
                Cell: reauthorizationRequestDocumentCell,
                sortType: sortingReauthorizationRequestDocument,
                width: 100,
            },
            {
                accessor: "action",
                Header: "Action",
                disableSortBy: true,
                Cell: ({ row }) =>
                    row.original.can_create_reauthorization_form ? (
                        <CreateRequestButton patientId={row.original.id} />
                    ) : (
                        <></>
                    ),
                width: 110,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
            per_page: 15,
            current_page: 1,
            last_page: 1,
        },
        therapistName: { value: 0, label: "All" },
        selectedPatientStatuses: [
            {
                value: ACTIVE_PATIENT_STATUS_ID,
                label: ACTIVE_PATIENT_STATUS_TITLE,
            },
        ],
        expirationsList: [],
        selectedExpiration: [],
        searchText: "",
    },
    submittedReauthorizationRequestForms: {
        tableData: [],
        tableColumns: [
            {
                Header: "",
                accessor: ROW_NUMBER_COLUMN,
                disableSortBy: true,
                width: 50,
            },
            {
                accessor: "patient_name",
                Header: "Patient's Name",
                Cell: patientNameWithScrollLinkValueCell,
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "insurance",
                Header: "Insurance",
                width: 120,
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
                accessor: "auth_number_data",
                Header: "Authorization number",
                Cell: ({ value }) => (
                    <InsuranceAuthorizationNumber authNumberData={value} />
                ),
                width: 120,
            },
            {
                accessor: "submitted_by",
                Header: "Request filed by",
                width: 120,
            },
            {
                accessor: "submitted_at",
                Header: "Request filed at",
                sortType: sortingDate,
                width: 80,
            },
            {
                accessor: "send_method",
                Header: "Submitted via",
                Cell: sendMethodValueCell,
                width: 100,
            },
            {
                accessor: "sent_at",
                Header: "Submitted at",
                sortType: sortingDate,
                width: 100,
            },
            {
                accessor: "stage",
                Header: "Stage",
                Cell: ({ row }) => <StageSelect requestForm={row.original} />,
                width: 150,
            },
            {
                accessor: "stage_changed_on",
                Header: "Stage changed on",
                sortType: sortingDate,
                width: 110,
            },
            {
                accessor: "actions",
                Header: "Actions",
                disableSortBy: true,
                Cell: ({ row }) => <ActionsButton requestForm={row.original} />,
                width: 80,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
            per_page: 15,
            current_page: 1,
            last_page: 1,
        },
        stages: [],
        submittedBy: { value: 0, label: "All" },
        selectedPatientStatuses: [],
        selectedStages: [
            { value: READY_TO_SEND_STAGE_ID, label: READY_TO_SEND_STAGE_TITLE },
        ],
        searchText: "",
    },
};

const slice = createSlice({
    name: "reauthorizationRequestsDashboard",
    initialState: initialState,
    reducers: {
        setPatientStatusesAC(state, action) {
            state.patientStatuses = action.payload.value;
        },
        setProvidersListAC(state, action) {
            state.providersList = action.payload.value;
        },
        setDocumentDefaultFaxesListAC(state, action) {
            state.documentDefaultFaxesList = action.payload.value;
        },
        setDocumentDefaultEmailsListAC(state, action) {
            state.documentDefaultEmailsList = action.payload.value;
        },
        setDataInTableAC(state, action) {
            const { tableName, value } = action.payload;
            state[tableName].tableData = value;
        },
        setDataIsLoadedAC(state, action) {
            const { tableName, value } = action.payload;
            state[tableName].dataIsLoaded = value;
        },
        setCurrentPageInTableAC(state, action) {
            const { tableName, value } = action.payload;
            state[tableName].tableParams.current_page = value;
        },
        setLastPageInTableAC(state, action) {
            const { tableName, value } = action.payload;
            state[tableName].tableParams.last_page = value;
        },
        setTotalInTableAC(state, action) {
            const { tableName, value } = action.payload;
            state[tableName].tableParams.total = value;
        },
        setUpcomingReauthorizationTherapistNameAC(state, action) {
            state.upcomingReauthorizationRequests.therapistName =
                action.payload.value;
        },
        setUpcomingReauthorizationSelectedPatientStatusesAC(state, action) {
            state.upcomingReauthorizationRequests.selectedPatientStatuses =
                action.payload.value;
        },
        setUpcomingReauthorizationExpirationsListAC(state, action) {
            state.upcomingReauthorizationRequests.expirationsList =
                action.payload.value;
        },
        setUpcomingReauthorizationSelectedExpirationAC(state, action) {
            state.upcomingReauthorizationRequests.selectedExpiration =
                action.payload.value;
        },
        setUpcomingReauthorizationSearchTextAC(state, action) {
            state.upcomingReauthorizationRequests.searchText =
                action.payload.value;
        },
        setRequestFormStagesAC(state, action) {
            state.submittedReauthorizationRequestForms.stages =
                action.payload.value;
        },
        setRequestFormSubmittedByAC(state, action) {
            state.submittedReauthorizationRequestForms.submittedBy =
                action.payload.value;
        },
        setRequestFormSelectedPatientStatusesAC(state, action) {
            state.submittedReauthorizationRequestForms.selectedPatientStatuses =
                action.payload.value;
        },
        setRequestFormSelectedStagesAC(state, action) {
            state.submittedReauthorizationRequestForms.selectedStages =
                action.payload.value;
        },
        setRequestFormSearchTextAC(state, action) {
            state.submittedReauthorizationRequestForms.searchText =
                action.payload.value;
        },
    },
});
export const reauthorizationRequestsDashboardReducer = slice.reducer;
export const {
    setPatientStatusesAC,
    setProvidersListAC,
    setDocumentDefaultFaxesListAC,
    setDocumentDefaultEmailsListAC,
    setDataInTableAC,
    setDataIsLoadedAC,
    setCurrentPageInTableAC,
    setLastPageInTableAC,
    setTotalInTableAC,
    setUpcomingReauthorizationTherapistNameAC,
    setUpcomingReauthorizationSelectedPatientStatusesAC,
    setUpcomingReauthorizationExpirationsListAC,
    setUpcomingReauthorizationSelectedExpirationAC,
    setUpcomingReauthorizationSearchTextAC,
    setRequestFormStagesAC,
    setRequestFormSubmittedByAC,
    setRequestFormSelectedPatientStatusesAC,
    setRequestFormSelectedStagesAC,
    setRequestFormSearchTextAC,
} = slice.actions;
