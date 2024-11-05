import axios from "axios";
// import { getMockDataForImportantForTodayCard, getMockDataForNewLostPatiendCard } from "../../pages/SecretaryDashboard/getMockDataFunctions"

export const getDataForImportantForTodayCard = (timeFrame) => {
    const { startDate, endDate } = timeFrame;

    // return getMockDataForImportantForTodayCard();
    return axios.get(
        `/api/secretaries-dashboard/important-for-today?start_date=${startDate}&end_date=${endDate}`,
    );
};

export const getDataForNewLostPatiendCard = () => {
    // return getMockDataForNewLostPatiendCard();
    return axios.get("/api/secretaries-dashboard/new-lost-patients");
};

export const getTridiuumAppointmentsData = () => {
    return axios.get("/api/secretaries-dashboard/tridiuum-appointments-data");
};

export const restartTridiuumParsers = () => {
    return axios.post("/api/secretaries-dashboard/restart-tridiuum-parsers");
};
