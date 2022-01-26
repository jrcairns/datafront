import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
})

export const API_KEYS = {
  LOGIN: '/login'
}

api.interceptors.request.use((config) => {
  // any required headers go here
  return config;
});

const onResponseFulfilled = (response) => {
  return response;
};

const onResponseRejected = (error) => {
  return Promise.reject(error);
};

api.interceptors.response.use(onResponseFulfilled, onResponseRejected);