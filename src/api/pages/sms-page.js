import axios from "axios";

export const getAllSms = async (type, page) => {
  switch (type) {
    case 'all':
      return await axios.get(`api/patients-sms-dashboard/all-messages?page=${page}`);

    case 'unread':
      return await axios.get(`api/patients-sms-dashboard/all-messages?unread=false&page=${page}`);

    case 'archived':
      return await axios.get(`api/patients-sms-dashboard/all-messages?archived=true&page=${page}`);
  
    default:
      return await axios.get(`api/patients-sms-dashboard/all-messages?page=${page}`);
  }
};

export const setSmsAsRead = async (row) => {
  return await axios.post('api/patients-sms-dashboard/all-messages/read-status', {
    sms_id: [row.id]
  });
};
export const setSmsAsUnread = async (row) => {
  return await axios.post('api/patients-sms-dashboard/all-messages/unread-status', {
    sms_id: [row.id]
  });
};
export const setSmsAsArchived = async (row) => {
  return await axios.post('api/patients-sms-dashboard/all-messages/archived-status', {
    sms_id: [row.id]
  });
};

export const getUnreadCount = async () => {
  return await axios.get('api/patients-sms-dashboard/all-messages/unread-status');
}