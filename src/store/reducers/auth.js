const AUTH_REQUESTED = "auth/AUTH_REQUESTED";
const AUTH_SUCCEEDED = "auth/AUTH_SUCCEEDED";
const AUTH_FAILED = "auth/AUTH_FAILED";

const INITIAL_STATE = {
  isAuthenticated: false,
  email: null,
  isLoading: false,
  error: false,
};

const authRequested = () => ({ type: AUTH_REQUESTED });
const authFailed = (data) => ({
  type: AUTH_FAILED,
  payload: data,
});

const authSucceeded = (data) => ({
  type: AUTH_SUCCEEDED,
  payload: data,
});

export const initAuthentication = (payload) => {
  return function (dispatch) {
    dispatch(authRequested());
    dispatch(authSucceeded(payload));
  };
};

export const setAuthError = (payload) => {
  return function (dispatch) {
    dispatch(authFailed(payload));
  };
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCEEDED:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        email: action.payload.email,
        isLoading: false,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default reducer;
