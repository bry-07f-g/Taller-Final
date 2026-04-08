import api2 from "../api/axios2";

export const listAprendices = (params = {}) =>
    api2.get('/aprendices', { params });

export const createAprendiz = (data) =>
    api2.post('/aprendices', data);

export const getAprendiz = (id) =>
    api2.get(`/aprendices/${id}`);

export const updateAprendiz = (id, data) =>
    api2.put(`/aprendices/${id}`, data);

export const deleteAprendiz = (id) =>
api2.delete(`/aprendices/${id}`);