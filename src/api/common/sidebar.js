import axios from 'axios'

export const getMessages = (page) => {
    return axios.get(`/provider/messages?page=${page}`)
}

export const deleteMessage = (payload) => {
    return axios.post('/provider/messages/set-read', payload)
}