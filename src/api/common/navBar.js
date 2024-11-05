import axios from "axios"

export const getMenuList = () => {
  return axios.get(`/api/menu-api`);
}