import { GET_ERRORS, CLEAR_ERRORS, UNAUTHENTICATE } from '../actions/types';

const initialState = {};
const error = (state = initialState, action) => {
  const { errors, type } = action;
  switch (type) {
    case GET_ERRORS:
      return { ...errors };
    case UNAUTHENTICATE:
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default error;
