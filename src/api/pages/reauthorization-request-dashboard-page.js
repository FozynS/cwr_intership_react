import axios from "axios";

export const getPatientStatuses = () => {
    return axios.get("/patient/statuses");
};

export const getProvidersList = () => {
    return axios.get("/provider/all");
};

export const getDocumentDefaultFaxesList = () => {
    return axios.get("/document-default-faxes");
};

export const getDocumentDefaultEmailsList = () => {
    return axios.get("/document-default-emails");
};

export const getSubmittedReauthorizationRequestForms = (params) => {
    return axios.get(
        "/api/reauthorization-request-dashboard/submitted-reauthorization-request-forms",
        { params },
    );
};

export const createReauthorizationRequestForm = (payload) => {
    return axios.post(
        "/api/reauthorization-request-dashboard/submitted-reauthorization-request-forms",
        payload,
    );
};

export const getReauthorizationRequestFormStages = () => {
    return axios.get(
        "/api/reauthorization-request-dashboard/submitted-reauthorization-request-forms/stages",
    );
};

export const changeReauthorizationRequestFormStage = (id, payload) => {
    return axios.put(
        `/api/reauthorization-request-dashboard/submitted-reauthorization-request-forms/${id}/change-stage`,
        payload,
    );
};

export const sendDocumentFax = (payload) => {
    return axios.post("/patient/document-fax-send", payload);
};

export const sendDocumentEmail = (payload) => {
    return axios.post("/patient/document-mail-send", payload);
};

export const getUpcomingReauthorizationRequests = (params) => {
    return axios.get(
        "/api/reauthorization-request-dashboard/upcoming-reauthorization-requests",
        { params },
    );
};

export const getExpirationsList = () => {
    return axios.get(
        "/api/reauthorization-request-dashboard/upcoming-reauthorization-requests/expirations",
    );
};

export const createLog = (id, payload) => {
    return axios.post(
        `/api/reauthorization-request-dashboard/submitted-reauthorization-request-forms/${id}/create-log`,
        payload,
    );
};

export const saveFutureInsuranceReauthorizationData = (id, payload) => {
    return axios.post(
        `/api/reauthorization-request-dashboard/submitted-reauthorization-request-forms/${id}/future-insurance-reauthorization-data`,
        payload,
    );
};

export const updateAuthNumber = (payload) => {
    return axios.put(
        "/api/reauthorization-request-dashboard/submitted-reauthorization-request-forms/auth-number",
        payload,
    );
};
