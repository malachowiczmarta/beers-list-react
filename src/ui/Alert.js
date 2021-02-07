import React from 'react';
import { connect } from 'react-redux';

import "./ui.css"

function Alert(props) {
    const {alertType, showAlert} = props
    let style = "alert-container";
    let label = "";

    if (alertType === "success") {
        label = "You have been successfully logged out.";
        style += " alert-success";
    } else if (alertType === "add") {
        label = " Added to the list";
        style += " alert-success";
    } else if (alertType === "info") {
        label = " Already exists in the list";
        style += " alert-info";
    }

    return (
        <>
            {showAlert ? <div className={style}><p>{label}</p></div> : null}
        </>

    );
}

const mapStateToProps = (state) => {
    return {
      showAlert: state.ui.showAlert,
      alertType: state.ui.alertType
    };
};

  export default connect(mapStateToProps)(Alert);