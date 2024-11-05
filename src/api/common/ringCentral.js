import axios from 'axios';

export const getRingCentralNumbers = () => {
    return axios.get('/api/ringcentral/account-numbers');
}

export const getRingCentralPatientCallDetails = (patientId, patientType) => {
    return axios.get(`api/ringcentral/patients/${patientId}/call-details?patient_type=${patientType}`);
}

export const patientRingOutCall = (payload) => {
    return axios.post('/api/ringcentral/patients/ring-out', payload);
}

export const patientLogExternalRingOutCall = (payload) => {
    return axios.post('/api/ringcentral/patients/log-external-ring-out', payload);
}

export const updateRingOutCall = (id, payload) => {
    return axios.put(`/api/ringcentral/ring-out/${id}`, payload);
}
