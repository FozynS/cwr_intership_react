import axios from 'axios';

export const getPatientForms = (patientId) => {
    return axios.get(`/api/patients/${patientId}/forms`);
}

export const sendPatientForms = (patientId, data) => {
    return axios.post(`/api/patients/${patientId}/forms/send`, data);
}

export const getBase64PatientDocument = (patientId, documentId) => {
    return axios.get(
        `/api/patients/${patientId}/documents/${documentId}`,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
}

export const downloadPatientDocuments = (patientId, documents) => {
    return axios.get(
        `/api/patients/${patientId}/documents/download`,
        {
            params: {
                documents,
            },
            responseType: 'blob',
        }
    );
}
