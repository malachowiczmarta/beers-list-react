const FETCH_BEERS_REQUESTED = "beers/FETCH_BEERS_REQUESTED";
const FETCH_BEERS_SUCCEDED = "beers/FETCH_BEERS_SUCCEDED";
const FETCH_BEERS_FAILED = "beers/FETCH_BEERS_FAILED";

const INITIAL_STATE = {
  beers: [],
  isLoading: false,
  isError: false
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
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${rows}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchBeersSucceded(data));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};


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
    default:
      return state;
  }
};

export default reducer;