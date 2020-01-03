import axios from "axios";
import _get from "lodash/get";

const getURL = (url: string) => `${process.env.REACT_APP_API_HOST}${url}`;

export function getJSON(url: string, token?: string) {
  return axios
    .get(getURL(url), {
      headers: {
        ...(token && { "auth-token": token })
      }
    })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

export function postJSON(url: string, values: {}, token?: string) {
  return axios
    .post(getURL(url), values, {
      headers: {
        ...(token && { "auth-token": token })
      }
    })
    .then(res => res)
    .catch(error => {
      throw _get(error, "response.data");
    });
}

export function putJSON(url: string, values: {}, token?: string) {
  return axios
    .put(getURL(url), values, {
      headers: {
        ...(token && { "auth-token": token })
      }
    })
    .then(res => res)
    .catch(error => {
      throw _get(error, "response.data");
    });
}

export function deleteJSON(url: string, token?: string) {
  return axios
    .delete(getURL(url), {
      headers: {
        ...(token && { "auth-token": token })
      }
    })
    .then(res => res)
    .catch(error => {
      throw _get(error, "response.data");
    });
}
