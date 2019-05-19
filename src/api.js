import axios from 'axios';

export const update = (id, newTitle, newDescription, newType, newEvtStatus) => {
    return axios.put(`/api/events/${id}`, { title: newTitle, description: newDescription, type: newType, evtstatus: newEvtStatus })
        .then(resp => resp.data);
};

export const getAll = async () => {
    const resp = await axios.get('/api/events')
    return resp.data;
};

export const add = async (newTitle, newDescription, newType, newEvtStatus) => {
    const resp = await axios.post('/api/events', { title: newTitle, description: newDescription, type: newType, evtstatus: newEvtStatus });
    return resp.data;
};

export const del = async id => {
    await axios.delete(`/api/events/${id}`);
    const resp = await axios.get('/api/events');
    return resp.data;
};
