import axios from "axios";
const APP_URL = "http://localhost:4000";

const handleResponse = (res) => {
  // Response handler.
  const { data } = res;
  if (res.status < 200 || res.status >= 300) {
    const error = (data && data.message) || res.statusText;
    return Promise.reject(error);
  }
  return data;
};
export const createDoctor = async (data) => {
    const url = `${APP_URL}/v1/admin/createDoctor`;

    let headers = {
      "Content-Type": "application/json"
    };
    const response = await axios.post(url, { ...data }, { headers });
    return handleResponse(response);
};

export const updateDoctor = async (id,data) => {
    const url = `${APP_URL}/v1/admin/updateDoctor/${id}`;

    let headers = {
      "Content-Type": "application/json"
    };
    const response = await axios.post(url, { ...data }, { headers });
    return handleResponse(response);
};
export const getDoctor = async (id) => {
    console.log("entered")
    const url = `${APP_URL}/v1/admin/getDoctor/${id}`;

    let headers = {
      "Content-Type": "application/json"
    };
    const response = await axios.post(url, { headers });
    return handleResponse(response);
};
