import axios from 'axios';

export const getUserInfo = () => {
  return axios.get(`/user/meta`);
};

export const getUserOnlyAdmin = () => {
  return axios.get(`/user/is-only-admin`);
}
