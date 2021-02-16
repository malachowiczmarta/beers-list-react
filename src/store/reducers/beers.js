const FETCH_BEERS_REQUESTED = "beers/FETCH_BEERS_REQUESTED";
const FETCH_BEERS_SUCCEDED = "beers/FETCH_BEERS_SUCCEDED";
const FETCH_BEERS_FAILED = "beers/FETCH_BEERS_FAILED";

const SET_PAGE_NUMBER = "beers/SET_PAGE_NUMBER";
const SET_ROWS_PER_PAGE = "beers/SET_ROWS_PER_PAGE";
const SET_INITIAL_STATE = "beers/SET_INITIAL_STATE";

const INITIAL_STATE = {
  beers: [],
  isLoading: false,
  isError: false,
  page: 0,
  rows: 10,
};

const fetchRequested = () => ({ type: FETCH_BEERS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_BEERS_FAILED });
const fetchBeersSucceded = (data) => ({
  type: FETCH_BEERS_SUCCEDED,
  payload: data,
});

export const fetchBeers = (page, rows) => {
  console.log("Fetch beers");
  return function (dispatch) {
    dispatch(fetchRequested());
    const punkApiPage = page + 1;
    fetch(
      `https://api.punkapi.com/v2/beers?page=${punkApiPage}&per_page=${rows}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchBeersSucceded(data));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};

export const setPage = (data) => ({
  type: SET_PAGE_NUMBER,
  payload: data,
});

export const setRows = (data) => ({
  type: SET_ROWS_PER_PAGE,
  payload: data,
});

export const setInitialState = () => ({
  type: SET_INITIAL_STATE,
});

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BEERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_BEERS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        beers: action.payload,
      };
    case FETCH_BEERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        page: INITIAL_STATE.page,
        rows: INITIAL_STATE.rows,
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        page: action.payload,
      };
    case SET_ROWS_PER_PAGE:
      return {
        ...state,
        rows: action.payload,
      };
    case SET_INITIAL_STATE:
      return {
        ...state,
        beers: INITIAL_STATE.beers,
        page: INITIAL_STATE.page,
        rows: INITIAL_STATE.rows,
      };
    default:
      return state;
  }
}

export default reducer;
