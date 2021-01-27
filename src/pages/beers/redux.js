const FETCH_BEERS_REQUESTED = "beers/FETCH_BEERS_REQUESTED";
const FETCH_BEERS_SUCCEDED = "beers/FETCH_BEERS_SUCCEDED";
const FETCH_BEERS_FAILED = "beers/FETCH_BEERS_FAILED";

// const PAGE_NUMBER = "beers/PAGE_NUMBER";
const SET_PAGE_NUMBER = "beers/SET_PAGE_NUMBER";
// const ROWS_PER_PAGE = "beers/ROWS_PER_PAGE";
const SET_ROWS_PER_PAGE = "beers/SET_ROWS_PER_PAGE";

const INITIAL_STATE = {
  beers: [],
  isLoading: false,
  isError: false,
  page: 0,
  rows: 10
};

const fetchRequested = () => ({ type: FETCH_BEERS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_BEERS_FAILED });
const fetchBeersSucceded = (data) => ({
  type: FETCH_BEERS_SUCCEDED,
  payload: data
});

export const fetchBeers = (page, rows) => {
  return function (dispatch) {
    dispatch(fetchRequested());
    const punkApiPage = page + 1;
    fetch(`https://api.punkapi.com/v2/beers?page=${punkApiPage}&per_page=${rows}`)
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
  payload: data
});

export const setRows = (data) => ({
  type: SET_ROWS_PER_PAGE,
  payload: data
});


function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BEERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_BEERS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        beers: action.payload
      };
    case FETCH_BEERS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        page: action.payload
      };
      case SET_ROWS_PER_PAGE:
        return {
          ...state,
          page: action.payload
        };
    default:
      return state;
  }
}

export default reducer;
