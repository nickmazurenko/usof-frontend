/* eslint-disable comma-dangle */
import axios from 'axios';
import * as Endpoints from './endpoints';

const headers = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const loadCurrentUser = () => axios.get(Endpoints.currentUserData);

export const logoutUser = () => axios.post(Endpoints.logoutUser);

export const registerUser = (login, password, confirmPassword, email) => {
  const body = JSON.stringify({
    login,
    password,
    confirmPassword,
    email,
  });

  return axios.post(Endpoints.registerUser, body, headers);
};

export const loginUser = (login, email, password) => {
  const body = JSON.stringify({ login, email, password });

  return axios.post(Endpoints.loginUser, body, headers);
};

export const resetUserPassword = (email) => {
  const body = JSON.stringify({ email });

  return axios.post(Endpoints.resetUserPassword, body, headers);
};

export const resetUserPasswordToken = (password, token) => {
  const body = JSON.stringify({ password });
  return axios.post(
    Endpoints.resetUserPasswordToken.replace('{token}', token),
    body,
    headers
  );
};

export const confirmUserEmail = (email) => {
  const body = JSON.stringify({ email });
  return axios.post(Endpoints.confirmUserEmail, body, headers);
};