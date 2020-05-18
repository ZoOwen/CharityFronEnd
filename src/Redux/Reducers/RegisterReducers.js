import {
  GET_DATA_BEGIN,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
} from "../Actions/RegisterActions";

const initState = {
  data: [],
  error: null,
  isLoading: false,
};

const getSignUp = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.result,
        isLoading: false,
      };

    case GET_DATA_FAILED:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default getSignUp;
