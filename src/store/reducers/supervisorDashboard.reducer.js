import { createSlice } from "@reduxjs/toolkit";
import {
    dateValueCell,
    patientNameValueCell,
} from "../../mixins/cells-functions";
import CustomBadge from "../../pages/SecretaryDashboard/components/CustomBadge";
import hexToRgba from "../../utilities/hexToRgba";
import { ROW_NUMBER_COLUMN } from "../../constants";
import { sortingDate, sortingStatus } from "../../mixins/sorting-functions";
import moment from "moment-timezone";

const initialState = {
    supervisees: null,
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
            width: 120,
        },
        {
            accessor: "date_of_assignment",
            Header: "Date of Assignment",
            Cell: ({ value }) => value ? moment(value).format('MM/DD/YY') : '-',
            sortType: sortingDate,
            width: 80,
        },
        {
            accessor: "count_visits",
            Header: "Count of Visits",
            width: 100,
        },
        {
            accessor: "date_of_last_visit",
            Header: "Date of Last Visit",
            Cell: dateValueCell,
            sortType: sortingDate,
            width: 80,
        },
    ],
};

const slice = createSlice({
    name: "supervisorDashboard",
    initialState: initialState,
    reducers: {
        setSuperviseesAC(state, action) {
            state.supervisees = action.payload.data;
        },
    },
});

export const supervisorDashboardReducer = slice.reducer;

export const { setSuperviseesAC } = slice.actions;
