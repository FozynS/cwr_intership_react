import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/app.reducer";
import { secretaryDashboardReducer } from "./reducers/secretaryDashboard.reducer";
import { newPatientsDashboardReducer } from "./reducers/newPatientsDashboard.reducer";
import { supervisorDashboardReducer } from "./reducers/supervisorDashboard.reducer";
import { reauthorizationRequestsDashboardReducer } from "./reducers/reauthorizationRequestsDashboard.reducer";
import { doctorsRequestsDashboard } from "./reducers/doctorsRequestsDashboard.reducer";
import { patientTransfersDashboardReducerReducer } from "./reducers/patientTransfersDashboard.reducer";

const rootReducer = combineReducers({
    app: appReducer,
    secretaryDashboard: secretaryDashboardReducer,
    newPatientsDashboard: newPatientsDashboardReducer,
    supervisorDashboard: supervisorDashboardReducer,
    reauthorizationRequestsDashboard: reauthorizationRequestsDashboardReducer,
    doctorsRequestsDashboard: doctorsRequestsDashboard,
    patientTransfersDashboard: patientTransfersDashboardReducerReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).prepend(
            thunkMiddleware,
        ),
});

window.store = store;
