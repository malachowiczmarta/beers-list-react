const FAV_ADD = "addfav/FAV_ADD";
const FAV_DELETE = "addfav/FAV_DELETE";

export function add(elem) {
    return {
      type: FAV_ADD,
      payload: elem
    };
};

export function deleteBeer(elem) {
  return {
    type: FAV_DELETE,
    payload: elem
  };
};

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    favorite: []
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FAV_ADD:
        return { ...state, favorite: state.favorite.concat([action.payload]) };
      case FAV_DELETE:
        console.log(action.payload)
        return { ...state, favorite: state.favorite.filter(function(elem) {
          return elem.id !== action.payload.id
        })};
      default:
        return state;
    }
}

export default reducer

