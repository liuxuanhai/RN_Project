import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCES,
  LOGIN_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER:
      return {...state, loading: false};
    case LOGIN_USER_SUCCES:
      return {...state, loading: false};
    case LOGIN_USER_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
};
