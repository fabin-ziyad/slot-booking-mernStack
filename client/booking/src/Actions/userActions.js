import axios from "axios";
const APP_URL = "http://localhost:4000";
const token = localStorage.getItem('token');
const handleResponse = (res) => {
  const { data } = res;
  if (res.status < 200 || res.status >= 300) {
    const error = (data && data.message) || res.statusText;
    return Promise.reject(error);
  }
  return data;
};

export const sendOtp = async (mail) => {
  console.log(mail);
  const url = `${APP_URL}/v1/auth/sendOtp`;
  let headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.post(url, { email: mail }, { headers });

  return handleResponse(response);
};
export const verifyOtp = async (data) => {
  const url = `${APP_URL}/v1/auth/verifyOtp`;
  let headers = {
    "Content-Type": "application/json",
  };

  const response = await axios.post(url, data, { headers });
  return handleResponse(response);
};
export const register = async (data) => {
  const url = `${APP_URL}/v1/auth/register`;

  let headers = {
    "Content-Type": "application/json",
  };

  const response = await axios.post(url, data, { headers });
  return handleResponse(response);
};

export const login = async (data) => {
  const url = `${APP_URL}/v1/auth/login`;

  let headers = {
    "Content-Type": "application/json",
  };

  const response = await axios.post(url, data, { headers });
  return handleResponse(response);
};
export const getUser = async () => { 
  const url = `${APP_URL}/v1/user/details`;
  let headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const response = await axios.post(url,{}, { headers: headers });
  console.log(response);

  return handleResponse(response);
}
export const createBooking = async (data) => {
  const url = `${APP_URL}/v1/booking/createBooking`;

  let headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  console.log(headers)
  const response = await axios.post(url, data , { headers });
  return handleResponse(response);
};
