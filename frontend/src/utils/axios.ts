import axios from "axios";
import _get from "lodash/get";

export const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}`,
  timeout: 5000
});

export function setAuthHeader(token: string) {
  if (token) {
    API.defaults.headers["auth-token"] = token;
  } else {
    delete API.defaults.headers["auth-token"];
  }
}

export const uploadInstance = axios.create({
  baseURL: process.env.REACT_APP_CLOUDINARY_URL,
  headers: {}
});

export const setupAxiosInterceptors = (onUnauthenticated: () => void) => {
  API.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      const { status } = error.response;
      if (status === 403 || status === 401) {
        onUnauthenticated();
      }
      return Promise.reject(error);
    }
  );
};

export function getJSON(url: string) {
  return API.get(url)
    .then(res => res)
    .catch(error => {
      throw _get(error, "response.data");
    });
}

export function postJSON(url: string, values: {}) {
  return API.post(url, values)
    .then(res => res)
    .catch(error => {
      throw _get(error, "response.data");
    });
}

export function putJSON(url: string, values: {}) {
  return API.put(url, values)
    .then(res => res)
    .catch(error => {
      throw _get(error, "response.data");
    });
}

export function deleteJSON(url: string) {
  return API.delete(url)
    .then(res => res)
    .catch(error => {
      throw _get(error, "response.data");
    });
}
