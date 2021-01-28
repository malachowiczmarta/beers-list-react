import React from 'react';
import "./ui.css"

function Alert({icon, variant, text=""}) {
    let style = "alert-container";
    let label = "";

    if (variant === "success" && text) {
        label = text;
        style += " alert-success alert-signout";
    } else if (variant === "success") {
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