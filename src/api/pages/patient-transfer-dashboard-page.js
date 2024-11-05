import axios from "axios";

export const getAllProviders = () => {
    return axios.get(`/provider/all`, {
        params: {
            with_trashed: 1,
        }
    });
};

export const getPatientStatuses = () => {
    return axios.get(`/patient/statuses/`);
};

export const getAllInsurances = () => {
    return axios.get(`/api/insurances/all`);
};

export const getPatientsByProviderId = (providerId) => {
    return axios.get(`/api/providers/${providerId}/patients`);
}

export const getPatientTransfers = () => {
    return axios.get(`/api/transfers`);
}

export const unassignProviderFromPatient = ({patientId, providerId, reason, unassignAllProviders}) => {
    return axios.post('/dashboard/delete-patient-provider', {
        patientId,
        providerId,
        reason,
        unassignAllProviders,
    });
}
export const transferPatient = ({patientId, oldProviderId, newProviderId, reason}) => {
    return axios.post('/api/transfers/transfer-patient', {
        patient_id: patientId,
        old_provider_id: oldProviderId,
        new_provider_id: newProviderId,
        reason,
    });
}
export const assignProviderToPatient = ({patientId, providerId}) => {
    return axios.post('/dashboard/add-patient-provider', {
        patientId,
        providerId,
    });
}

export const archivePatientById = ({patientId, comment}) => {
    return axios.put(`/dashboard/patients/${patientId}`, {
        status_id: 7,
        comment,
    })
}
