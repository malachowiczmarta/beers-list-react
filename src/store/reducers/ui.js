const FAV_ADD = "ui/FAV_ADD";
const FAV_DELETE = "ui/FAV_DELETE";
const ALERT = "ui/FAV_ALERT";
const ALERT_TYPE = "ui/FAV_ALERT_TYPE";
const SHOW_MODAL = "ui/SHOW_MODAL";

const INITIAL_STATE = {
  favorite: [],
  showAlert: false,
  alertType: "",
  showModal: false
};

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

export function setModal() {
  return {
    type: SHOW_MODAL,
  };
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
      case SHOW_MODAL:
        return { ...state, showModal: !state.showModal };
      default:
        return state;
    }
}

export default reducer

