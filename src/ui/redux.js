const FAV_ADD = "addfav/FAV_ADD";

export function add(elem) {
    return {
      type: FAV_ADD,
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
      default:
        return state;
    }
}

export default reducer