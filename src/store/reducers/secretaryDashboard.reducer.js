import { createSlice } from "@reduxjs/toolkit";
import {
    creditCardBadgeCell,
    dateValueCell,
    patientNameValueCell,
} from "../../mixins/cells-functions";
import { sortingDate, sortingFormStatus, sortingName, sortingStatus, sortingTimeFormatAmPm } from "../../mixins/sorting-functions";
import CustomBadge from "../../pages/SecretaryDashboard/components/CustomBadge";
import FormStatusBadge from "../../pages/SecretaryDashboard/components/FormStatusBadge";
import CallButtonWithModals from "../../pages/SecretaryDashboard/components/CallButtonWithModals";
import hexToRgba from "../../utilities/hexToRgba";
import { ROW_NUMBER_COLUMN } from "../../constants";

const initialState = {
    withoutCompletedForms: {
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
                accessor: "patient_status",
                Header: "Patient's Status",
                Cell: ({value}) => (
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
                accessor: "appointment_status",
                Header: "Appt. Status",
                width: 120,
            },
            {
                accessor: "date",
                Header: "Date",
                Cell: dateValueCell,
                width: 80,
            },
            {
                accessor: "time",
                Header: "Time",
                sortType: sortingTimeFormatAmPm,
                width: 80,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "first_visit",
                Header: "Date of First Visit",
                Cell: dateValueCell,
                sortType: sortingDate,
                width: 110,
            },
            {
                accessor: "count_visits",
                Header: "Count of Visits",
                width: 100,
            },
            {
                accessor: "form_status",
                Header: "Form Status",
                Cell: ({value}) => <FormStatusBadge formStatus={value}/>,
                sortType: sortingFormStatus,
                width: 100,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
        },
    },
    requireEligibilityCheck: {
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
                accessor: "patient_status",
                Header: "Patient's Status",
                Cell: ({value}) => (
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
                accessor: "appointment_status",
                Header: "Appt. Status",
                width: 120,
            },
            {
                accessor: "date",
                Header: "Date",
                Cell: dateValueCell,
                width: 80,
            },
            {
                accessor: "time",
                Header: "Time",
                sortType: sortingTimeFormatAmPm,
                width: 80,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "last_eligibility_check",
                Header: "Last Eligibility Check",
                sortType: sortingDate,
                width: 100,
            },
            {
                accessor: "message",
                Header: "Message",
                width: 200,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
        },
    },
    withDeductible: {
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
                accessor: "patient_status",
                Header: "Patient's Status",
                Cell: ({value}) => (
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
                accessor: "appointment_status",
                Header: "Appt. Status",
                width: 120,
            },
            {
                accessor: "date",
                Header: "Date",
                Cell: dateValueCell,
                width: 80,
            },
            {
                accessor: "time",
                Header: "Time",
                sortType: sortingTimeFormatAmPm,
                width: 80,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "credit_card",
                Header: "Credit Card on File",
                Cell: creditCardBadgeCell,
                width: 150,
            },
            {
                accessor: "last_eligibility_check",
                Header: "Last Eligibility Check",
                sortType: sortingDate,
                width: 100,
            },
            {
                accessor: "co_pay",
                Header: "Co-pay",
                width: 85,
            },
            {
                accessor: "deductible",
                Header: "Deductible",
                width: 85,
            },
            {
                accessor: "deductible_met",
                Header: "Deductible Met",
                width: 85,
            },
            {
                accessor: "deductible_remaining",
                Header: "Remaining Deductible",
                width: 85,
            },
            {
                accessor: "insurance_pay",
                Header: "Insurance Pay",
                width: 85,
            },
            {
                accessor: "reference_number",
                Header: "Reference Number",
                width: 85,
            },
            {
                accessor: "message",
                Header: "Message",
                width: 200,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
        },
    },
    withNegativeCreditCardBalance: {
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
                width: 120,
            },
            {
                accessor: "patient_status",
                Header: "Patient's Status",
                Cell: ({value}) => (
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
                accessor: "appointment_status",
                Header: "Appt. Status",
                width: 120,
            },
            {
                accessor: "date",
                Header: "Date",
                Cell: dateValueCell,
                width: 80,
            },
            {
                accessor: "time",
                Header: "Time",
                sortType: sortingTimeFormatAmPm,
                width: 80,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                sortType: sortingName,
                width: 110,
            },
            {
                accessor: "first_visit",
                Header: "Date of First Visit",
                Cell: dateValueCell,
                sortType: sortingDate,
                width: 110,
            },
            {
                accessor: "count_visits",
                Header: "Count of Visits",
                width: 100,
            },
            {
                accessor: "credit_card",
                Header: "Credit Card on File",
                Cell: creditCardBadgeCell,
                width: 150,
            },
            {
                accessor: "current_balance",
                Header: "Current Balance",
                width: 80,
            },
            {
                accessor: "co_payment",
                Header: "Co-Payment",
                width: 90,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
        },
    },
    withNoFutureAppointments: {
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
                accessor: "patient_status",
                Header: "Patient's Status",
                Cell: ({value}) => (
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
                accessor: "appointment_status",
                Header: "Appt. Status",
                width: 120,
            },
            {
                accessor: "date",
                Header: "Date",
                Cell: dateValueCell,
                width: 80,
            },
            {
                accessor: "time",
                Header: "Time",
                sortType: sortingTimeFormatAmPm,
                width: 80,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "first_visit",
                Header: "Date of First Visit",
                Cell: dateValueCell,
                sortType: sortingDate,
                width: 110,
            },
            {
                accessor: "count_visits",
                Header: "Count of Visits",
                width: 100,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
        },
    },
    cashPayment: {
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
                accessor: "patient_status",
                Header: "Patient's Status",
                Cell: ({value}) => (
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
                accessor: "appointment_status",
                Header: "Appt. Status",
                width: 120,
            },
            {
                accessor: "date",
                Header: "Date",
                Cell: dateValueCell,
                width: 80,
            },
            {
                accessor: "time",
                Header: "Time",
                sortType: sortingTimeFormatAmPm,
                width: 80,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "first_visit",
                Header: "Date of First Visit",
                Cell: dateValueCell,
                sortType: sortingDate,
                width: 110,
            },
            {
                accessor: "credit_card",
                Header: "Credit Card on File",
                Cell: creditCardBadgeCell,
                width: 150,
            },
            {
                accessor: "co_payment",
                Header: "Amount in cash",
                width: 90,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
        },
    },
    newPatients: {
        tableData: [],
        tableColumns: [
            {
                Header: "",
                accessor: ROW_NUMBER_COLUMN,
                disableSortBy: true,
                width: 40,
            },
            {
                accessor: "patient_name",
                Header: "Patient's Name",
                Cell: patientNameValueCell,
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "patient_status",
                Header: "Patient's Status",
                disableSortBy: true,
                Cell: ({value}) => (
                    <CustomBadge
                        title={value.status}
                        background={hexToRgba("#" + value.hex_color, 0.2)}
                        textColor={"#" + value.hex_color}
                    />
                ),
                width: 70,
            },
            {
                accessor: "patient_status_updated_at",
                Header: "Status Updated At",
                sortType: sortingDate,
                Cell: ({value}) => (
                    <div>{value || '-'}</div>
                ),
                width: 100,
            },
            {
                accessor: "patient_creation_date",
                Header: "Patient Creation Date",
                sortType: sortingDate,
                width: 100,
            },
            {
                accessor: "count_calls",
                Header: "Count of calls",
                width: 90,
            },
            {
                accessor: "date_of_last_call",
                Header: "Date of Last Call",
                sortType: sortingDate,
                width: 100,
            },
            {
                accessor: "caller",
                Header: "Who Called",
                width: 120,
            },
            {
                accessor: "comment",
                Header: "Comment",
                width: 150,
            },
            {
                accessor: "id",
                Header: "Call",
                disableSortBy: true,
                Cell: ({row, value}) => (
                    <CallButtonWithModals
                        patientId={value}
                        disabled={!row.original.cell_phone}
                    />
                ),
                width: 80,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
        },
    },
    inactivePatients: {
        tableData: [],
        tableColumns: [
            {
                Header: "",
                accessor: ROW_NUMBER_COLUMN,
                disableSortBy: true,
                width: 40,
            },
            {
                accessor: "patient_name",
                Header: "Patient's Name",
                Cell: patientNameValueCell,
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "patient_status",
                Header: "Patient's Status",
                disableSortBy: true,
                Cell: ({value}) => (
                    <CustomBadge
                        title={value.status}
                        background={hexToRgba("#" + value.hex_color, 0.2)}
                        textColor={"#" + value.hex_color}
                    />
                ),
                width: 100,
            },
            {
                accessor: "patient_status_updated_at",
                Header: "Status Updated At",
                sortType: sortingDate,
                Cell: ({value}) => (
                    <div>{value || '-'}</div>
                ),
                width: 150,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "count_visits",
                Header: "Count of Visits",
                width: 100,
            },
            {
                accessor: "date_of_last_visit",
                Header: "Date of Last Visit",
                sortType: sortingDate,
                width: 150,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
        },
    },
    lostPatients: {
        tableData: [],
        tableColumns: [
            {
                Header: "",
                accessor: ROW_NUMBER_COLUMN,
                disableSortBy: true,
                width: 40,
            },
            {
                accessor: "patient_name",
                Header: "Patient's Name",
                Cell: patientNameValueCell,
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "patient_status",
                Header: "Patient's Status",
                disableSortBy: true,
                Cell: ({value}) => (
                    <CustomBadge
                        title={value.status}
                        background={hexToRgba("#" + value.hex_color, 0.2)}
                        textColor={"#" + value.hex_color}
                    />
                ),
                width: 100,
            },
            {
                accessor: "patient_status_updated_at",
                Header: "Status Updated At",
                sortType: sortingDate,
                Cell: ({value}) => (
                    <div>{value || '-'}</div>
                ),
                width: 150,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                sortType: sortingName,
                width: 150,
            },
            {
                accessor: "count_visits",
                Header: "Count of Visits",
                width: 100,
            },
            {
                accessor: "date_of_last_visit",
                Header: "Date of Last Visit",
                sortType: sortingDate,
                width: 150,
            },
        ],
        loading: true,
        dataIsLoaded: false,
        tableParams: {
            total: 0,
        },
    },
    tridiuumAppointmentsCount: null,
    isRestartingTridiuumParsers: false,
};

const slice = createSlice({
    name: "secretaryDashboard",
    initialState: initialState,
    reducers: {
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
        setTridiuumAppointmentsCountAC(state, action) {
            state.tridiuumAppointmentsCount = action.payload.value;
        },
        setIsRestartingTridiuumParsersAC(state, action) {
            state.isRestartingTridiuumParsers = action.payload.value;
        },
    },
});
export const secretaryDashboardReducer = slice.reducer;
export const {
    setDataInTableAC,
    setDataIsLoadedAC,
    setCurrentPageInTableAC,
    setLastPageInTableAC,
    setTotalInTableAC,
    setTridiuumAppointmentsCountAC,
    setIsRestartingTridiuumParsersAC,
} = slice.actions;
