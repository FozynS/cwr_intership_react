import { createSlice } from "@reduxjs/toolkit";
import {
    patientValueCell,
    progressNoteLinkCell
} from "../../mixins/cells-functions";
import { ROW_NUMBER_COLUMN } from "../../constants";
import {sortingDate} from "../../mixins/sorting-functions";
import PatientNoteUnlockRequestsActionsButton from "../../pages/DoctorsRequestsDashboard/components/PatientNoteUnlockRequests/components/ActionsButton";
import PatientRemovalRequestsActionsButton from "../../pages/DoctorsRequestsDashboard/components/PatientRemovalRequests/components/ActionsButton"

const initialState = {
    filtersData: {
        requestStatusesData: {
            requestStatuses: [
                {
                    id: 0,
                    label: 'New',
                },
                {
                    id: 1,
                    label: 'Accepted',
                },
                {
                    id: 2,
                    label: 'Declined',
                },
                {
                    id: 3,
                    label: 'Canceled By Therapist',
                },
            ],
        }
    },
    patientRemovalRequests: {
        tableData: [],
        tableColumns: [
            {
                Header: "#",
                accessor: ROW_NUMBER_COLUMN,
                disableSortBy: true,
                width: 50,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                disableSortBy: true,
                width: 150,
            },
            {
                accessor: "patient_name",
                Header: "Patient's Name",
                disableSortBy: true,
                Cell: patientValueCell,
                width: 150,
            },
            {
                accessor: "reason",
                Header: "Reason",
                disableSortBy: true,
                width: 200,
            },
            {
                accessor: "requested_at",
                Header: "Requested at",
                sortType: sortingDate,
                width: 130,
            },
            {
                accessor: "request_status",
                Header: "Request status",
                width: 100,
                Cell: ({value}) => (
                    <div>{value.label}</div>
                ),
            },
            {
                accessor: "approver",
                Header: "Approver",
                width: 150,
                Cell: ({value}) => (
                    <div>{value.name || '-'}</div>
                ),
            },
            {
                accessor: "approved_at",
                Header: "Closed at",
                width: 130,
                Cell: ({value}) => (
                    <div>{value || '-'}</div>
                ),
                sortType: sortingDate,
            },
            {
                accessor: "approver_comment",
                Header: "Approver Comment",
                width: 200,
                Cell: ({value}) => (
                    <div>{value || '-'}</div>
                ),
            },
            {
                accessor: "id",
                Header: "Actions",
                disableSortBy: true,
                Cell: ({row}) => <>
                    {row.original.request_status.id === 0 ?
                        <PatientRemovalRequestsActionsButton requestId={row.original.id}/> :
                        '-'
                    }
                </>,
                width: 60,
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
        filters: {
            requestStatuses: [
                {
                    id: 0,
                    label: 'New',
                },
            ],
        },
    },
    patientNoteUnlockRequests: {
        tableData: [],
        tableColumns: [
            {
                Header: "#",
                accessor: ROW_NUMBER_COLUMN,
                disableSortBy: false,
                width: 50,
            },
            {
                accessor: "therapist_name",
                Header: "Therapist's Name",
                disableSortBy: false,
                width: 150,
            },
            {
                accessor: "progress_note",
                Header: "Progress Note",
                disableSortBy: true,
                Cell: progressNoteLinkCell,
                width: 70,
            },
            {
                accessor: "reason",
                Header: "Reason",
                disableSortBy: true,
                width: 200,
            },
            {
                accessor: "requested_at",
                Header: "Requested at",
                sortType: sortingDate,
                width: 130,
            },
            {
                accessor: "request_status",
                Header: "Request status",
                width: 100,
                Cell: ({value}) => (
                    <div>{value.label}</div>
                ),
            },
            {
                accessor: "approver",
                Header: "Approver",
                width: 150,
                Cell: ({value}) => (
                    <div>{value.name || '-'}</div>
                ),
            },
            {
                accessor: "approved_at",
                Header: "Closed at",
                width: 130,
                Cell: ({value}) => (
                    <div>{value || '-'}</div>
                ),
                sortType: sortingDate,
            },
            {
                accessor: "approver_comment",
                Header: "Approver Comment",
                width: 200,
                Cell: ({value}) => (
                    <div>{value || '-'}</div>
                ),
            },
            {
                accessor: "id",
                Header: "Actions",
                disableSortBy: true,
                Cell: ({row}) => <>
                    {row.original.request_status.id === 0 ?
                        <PatientNoteUnlockRequestsActionsButton requestId={row.original.id}/> :
                        '-'
                    }
                </>,
                width: 60,
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
        filters: {
            requestStatuses: [
                {
                    id: 0,
                    label: 'New',
                },
            ],
        },
    },
};

const slice = createSlice({
    name: "doctorsRequestsDashboard",
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
        setRequestStatusesFilterInTable(state, action) {
            const { tableName, options } = action.payload;
            state[tableName].filters.requestStatuses = options.map(option => ({
                id: option.value,
                label: option.label,
            }));
        },
        removeItemFromTableDataByIdAC(state, action) {
            const { tableName, id } = action.payload;

            const index = state[tableName].tableData.findIndex(item => item.id === id);
            if (index !== -1) {
                state[tableName].tableData.splice(index, 1);
            }
        },
    },
});

export const doctorsRequestsDashboard = slice.reducer;

export const {
    setDataInTableAC,
    setDataIsLoadedAC,
    setCurrentPageInTableAC,
    setLastPageInTableAC,
    setTotalInTableAC,
    setRequestStatusesFilterInTable,
    removeItemFromTableDataByIdAC,
} = slice.actions;
