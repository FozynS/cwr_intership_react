import axios from "axios";

export const getAllSms = async (page, type) => {
  switch (type) {
    case 'all':
      return await axios.get(`api/patients-sms-dashboard/all-messages`);

    case 'unread':
      return await axios.get(`api/patients-sms-dashboard/all-messages?unread=false`);

    case 'archived':
      return await axios.get(`api/patients-sms-dashboard/all-messages?archived=true`);
  
    default:
      return await axios.get(`api/patients-sms-dashboard/all-messages`);
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