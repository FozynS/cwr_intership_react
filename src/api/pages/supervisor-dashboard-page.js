import axios from "axios";

export const getSupervisors = () => {
    return axios.get(`/api/supervisor`);
};

export const getSupervisees = (query = {}) => {
    return axios.get(`/api/supervisor/supervisees`, { params: query });
};
