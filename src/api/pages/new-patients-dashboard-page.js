import axios from "axios";
// import { getMockDataForNewPatientsDashboard } from "../../pages/NewPatientsDashboard/getMockDataFunctions";

export const getInquiriesByStage = (params) => {
    return axios.get(`api/new-patients-crm/inquiries`, {
        params,
    });
};

export const getArchivedInquiries = (params) => {
    return axios.get(`api/new-patients-crm/inquiries/archived`, {
        params
    });
};

export const createInquiry = (payload) => {
    return axios.post(`api/new-patients-crm/inquiries`, payload);
};

export const createPatientFromPatientLeadForInquiry = (payload) => {
    return axios.post(
        `api/new-patients-crm/inquiries/${payload.id}/create-patient-from-patient-lead`,
    );
};

export const updateInquiry = (payload) => {
    return axios.put(`api/new-patients-crm/inquiries/${payload.id}`, payload);
};

export const getInquirablesWithoutActiveInquiries = ({
    page,
    limit,
    search_query,
}) => {
    const searchQuery = search_query ? `&search_query=${search_query}` : "";
    return axios.get(
        `api/new-patients-crm/leads/inquirables-without-active-inquiries?page=${page}&limit=${limit}` +
            searchQuery,
    );
};

export const archiveInquiry = ({ id, data }) => {
    return axios.post(`/api/new-patients-crm/inquiries/${id}/archive`, data);
};

export const getInquiryComments = ({ id, page }) => {
    return axios.get(
        `api/new-patients-crm/inquiries/${id}/comments?page=${page}`,
    );
};

export const changeState = ({ id, data }) => {
    return axios.post(
        `/api/new-patients-crm/inquiries/${id}/change-stage`,
        data,
    );
};

export const createInquiryComment = ({ id, data }) => {
    return axios.post(`api/new-patients-crm/inquiries/${id}/comments`, data);
};

export const createOnboardingCompleteComment = ({ id, data }) => {
    return axios.post(
        `api/new-patients-crm/inquiries/${id}/onboarding-complete-comment`,
        data,
    );
};

export const createInitialSurveyComment = ({ id, data }) => {
    return axios.post(
        `api/new-patients-crm/inquiries/${id}/initial-survey-comment`,
        data,
    );
};

export const createSecondSurveyComment = ({ id, data }) => {
    return axios.post(
        `api/new-patients-crm/inquiries/${id}/second-survey-comment`,
        data,
    );
};

export const getCompletedInitialAppointment = (id) => {
    return axios.get(`api/new-patients-crm/inquiries/${id}/completed-initial-appointment`);
}

export const getCompletedAppointments = (id) => {
    return axios.get(
        `api/new-patients-crm/inquiries/${id}/completed-appointments`,
    );
};

export const getRegistrationMethods = () => {
    return axios.get(`/api/new-patients-crm/registration-methods`);
};

export const getChannels = () => {
    return axios.get(`/api/new-patients-crm/channels`);
};

export const getSources = () => {
    return axios.get(`/api/new-patients-crm/sources`);
};

export const createSource = (name) => {
    return axios.post('/api/new-patients-crm/sources', { name });
};

export const getLanguages = () => {
    return axios.get("api/system/languages");
};

export const getProviders = ({ page, limit }) => {
    return axios.get(`api/providers?page=${page}&limit=${limit}`);
};

export const getInsurances = ({ page, limit }) => {
    return axios.get(`api/insurances?page=${page}&limit=${limit}`);
};

export const getEligibilityPayers = ({ page, limit }) => {
    return axios.get(`api/eligibility-payers?page=${page}&limit=${limit}`);
};

export const getInsuranceProcedures = () => {
    return axios.get(`api/insurance-procedures`);
};

export const getDiagnoses = ({ query = "" } = {}) => {
    return axios.get(`api/system/diagnoses/autocomplete?q=${query}`);
};

export const getTherapyTypes = () => {
    return axios.get(`api/therapy-types`);
};

export const getDocumentTypesTree = () => {
    return axios.get("/documents/types-tree");
};

export const uploadPatientFile = (payload) => {
    return axios.post(`patient/upload-file`, payload);
};

export const uploadPatientLeadFile = (id, payload) => {
    return axios.post(`api/new-patients-crm/leads/${id}/upload-file`, payload);
};

export const setPatientDocumentType = (payload) => {
    return axios.post("/documents/set-type", payload);
};

export const setPatientLeadDocumentType = (payload) => {
    return axios.put(
        `api/new-patients-crm/leads/documents/${payload.document_id}/set-type`,
        payload,
    );
};

export const deletePatientDocument = (payload) => {
    return axios.post(`documents/delete`, payload);
};

export const deletePatientLeadDocument = (id) => {
    return axios.delete(`api/new-patients-crm/leads/documents/${id}`);
};

export const getProvidersDatasetForTribute = () => {
    return axios.get("/provider/dataset-for-tribute");
};
