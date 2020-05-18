/** @format */

import axios from "axios";

export const GET_DATA_BEGIN = "GET_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export const getDataBegin = () => {
  return {
    type: GET_DATA_BEGIN,
  };
};

export const getDataSuccess = (result) => {
  return {
    type: GET_DATA_SUCCESS,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GET_DATA_FAILED,
    error,
  };
};

export const getDataSignUp = () => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .get("https://backend-go-charity.herokuapp.com/")
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
};

export const postDataSignUp = (postObj) => {
  return (dispatch) => {
    dispatch(getDataBegin());

    axios
      .post("https://backend-go-charity.herokuapp.com/register", postObj)
      .then(() => dispatch(getDataSignUp()))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
};
