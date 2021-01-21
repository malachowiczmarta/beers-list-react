const FAV_ADD = "addfav/FAV_ADD";
const FAV_DELETE = "addfav/FAV_DELETE";
const ALERT = "addfav/FAV_ALERT";
const ALERT_TYPE = "addfav/FAV_ALERT_TYPE";

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

export function alert() {
  return {
    type: ALERT,
  };
};

export function setAlertType(type) {
  return {
    type: ALERT_TYPE,
    payload: type
  };
};

const INITIAL_STATE = {
    favorite: [],
    showAlert: false,
    alertType: ""
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FAV_ADD:
        return { ...state, favorite: state.favorite.concat([action.payload]) };
      case FAV_DELETE:
        return { ...state, favorite: state.favorite.filter(function(elem) {
          return elem.id !== action.payload.id
        })};
      case ALERT:
        return { ...state, showAlert: !state.showAlert };
      case ALERT_TYPE:
        return { ...state, alertType: action.payload };
      default:
        return state;
    }
}

export default reducer

