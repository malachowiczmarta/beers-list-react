import React from 'react';
import "./ui.css"

function Alert({icon, variant}) {
    let style = "alert-container";
    let label = "";
    if (variant === "success") {
        label = " Added to the list";
        style += " alert-success";
    } else if (variant === "info") {
        label = " Already exists in the list";
        style += " alert-info";
    }

    return (
        <div className={style}>
            <span>{icon}{label}</span>
        </div>
    );
}

export default Alert;