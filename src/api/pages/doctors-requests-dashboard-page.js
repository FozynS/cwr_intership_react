import axios from "axios";

export const getNewPatientRemovalRequests = () => {
    return axios.get('/api/doctors-requests-dashboard/patient-removal-requests?request_statuses[]=0');
}

export const getPatientRemovalRequestsList = (params = {}) => {
    return axios.get('/api/doctors-requests-dashboard/patient-removal-requests', {
        params,
    });
}

export const acceptPatientRemovalRequest = ({id}) => {
    return axios.put('/dashboard/patient-removal-requests/accept', {
        request_id: id,
    });
}

export const declinePatientRemovalRequest = ({id, reason}) => {
    return axios.put('/dashboard/patient-removal-requests/decline', {
        request_id: id,
        reason,
    });
}
export const getNewPatientNoteUnlockRequests = () => {
    return axios.get('/api/doctors-requests-dashboard/patient-note-unlock-requests?request_statuses[]=0');
}
export const getPatientNoteUnlockRequestsList = (params = {}) => {
    return axios.get('/api/doctors-requests-dashboard/patient-note-unlock-requests', {
        params,
    });
}

export const acceptPatientNoteUnlockRequest = ({id}) => {
    return axios.put('/dashboard/patient-note-unlock-requests/accept', {
        request_id: id,
    });
}

export const declinePatientNoteUnlockRequest = ({id, reason}) => {
    return axios.put('/dashboard/patient-note-unlock-requests/decline', {
        request_id: id,
        reason,
    });
}