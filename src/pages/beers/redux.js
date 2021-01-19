const FETCH_BEERS_REQUESTED = "beers/FETCH_BEERS_REQUESTED";
const FETCH_BEERS_SUCCEDED = "beers/FETCH_BEERS_SUCCEDED";
const FETCH_BEERS_FAILED = "beers/FETCH_BEERS_FAILED";

const RESET_BEERS = "beers/BEERS_RESET";
// const FETCH_BEER_SUCCEDED = "beers/FETCH_BEER_SUCCEDED";

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
// const fetchUserSucceded = (data) => ({
//   type: FETCH_USER_SUCCEDED,
//   payload: data
// });

export const fetchBeers = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchBeersSucceded(data.data));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};

// export const addUser = () => {
//   return function (dispatch) {
//     dispatch(fetchRequested());
//     fetch("https://randomuser.me/api/?results=1")
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(fetchUserSucceded(data.results));
//       })
//       .catch((error) => {
//         dispatch(fetchFailed());
//       });
//   };
// };


function reducer (state = INITIAL_STATE, action) => {
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
        users: action.payload
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