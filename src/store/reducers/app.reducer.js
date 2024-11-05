import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ringCentralNumbers: [],
    callLog: {},
    user: null,
    userData: {
        isOnlyAdmin: false,
        isLoadedIsOnlyAdmin: false,
    },
    queryParams: {},
};

const slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setRingCentralNumbersAC(state, action) {
            state.ringCentralNumbers = action.payload.numbers;
        },
        setCallLogAC(state, action) {
            state.callLog = action.payload.callLog;
        },
        setUserAC(state, action) {
            state.user = action.payload.user;
        },
        setQueryParamsAC(state, action) {
            state.queryParams = action.payload.data;
        },
        setUserDataIsOnlyAdminAC(state, action) {
            state.userData.isOnlyAdmin = action.payload.value;
        },
        setUserDataIsLoadedIsOnlyAdminAC(state, action) {
            state.userData.isLoadedIsOnlyAdmin = action.payload.value;
        },
    },
});
export const appReducer = slice.reducer;
export const {
    setRingCentralNumbersAC,
    setCallLogAC,
    setUserAC,
    setQueryParamsAC,
    setUserDataIsOnlyAdminAC,
    setUserDataIsLoadedIsOnlyAdminAC
} = slice.actions;
