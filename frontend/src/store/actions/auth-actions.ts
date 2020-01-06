import jwtDecode from "jwt-decode";
import actionTypes from "./action-types";
import { postJSON } from "../../utils/axios";

const login = (values: {}) =>
  postJSON("/user/login", values)
    .then(d => {
      const token = d.data["auth-token"];
      const data = {
        token,
        user: jwtDecode(token)
      };
      return data;
    })
    .catch(err => {
      throw err;
    });

const register = (values: {}) => {
  const data = { ...values, role: "user" };
  return postJSON("/user/register", data)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const forgotPassword = (values: any) => {
  const data = { ...values, role: "client" };
  return postJSON("/user/resetPassword", data)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const updatePassword = (values: any) => {
  const data = { ...values, role: "client" };
  return postJSON("/user/updatePassword", data)
    .then(d => {
      return d;
    })
    .catch(err => {
      throw err;
    });
};

const logout = (dispatch: any) => {
  return dispatch({ type: actionTypes.LOGOUT_SUCCESS });
};

export default { login, register, forgotPassword, updatePassword, logout };
