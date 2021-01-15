import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  LOGOUT,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return{
        ...state,
        isAuthenticated: true
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh
      };
    case SIGNUP_SUCCESS:
      alert("Check email for activation link.")
      return{
        ...state,
        isAuthenticated: false,
      }
    case USER_LOADED_SUCCESS:
      return{
        ...state,
        user: payload
      };
    case AUTHENTICATED_FAIL:
      return{
        ...state,
        isAuthenticated: false
      }
    case USER_LOADED_FAIL:
      return{
        ...state,
        user: null
      };
    case SIGNUP_FAIL:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      alert("Signup failed");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null
      };
    case LOGIN_FAIL:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      alert("Login failed");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null
      };
    case LOGOUT:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null
      };
    case RESET_PASSWORD_SUCCESS:
      alert("Check email for link. Valid only for 30 min.")
      return{
        ...state
      }
    case RESET_PASSWORD_CONFIRM_SUCCESS:
      alert("Password has been changed.")
      return{
        ...state
      }
    case RESET_PASSWORD_CONFIRM_FAIL:
    case RESET_PASSWORD_FAIL:
      alert("Something is not right.")
      return{
        ...state
      }
    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL:
      return{
        ...state
      }
    default:
      return state;
  }
}
