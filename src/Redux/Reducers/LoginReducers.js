/** @format */

import { GET_DATA_SIGNIN } from "../Actions/LoginActions";

const token = localStorage.getItem("token");

const initialState = token
    ? {
          isLogged: true,
          data: [],
      }
    : {
          isLogged: false,
          data: [],
          signupData: [],
      };

const user = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SIGNIN:
            return {
                isLogged: true,
            };

        default:
            return state;
    }
};

export default user;
