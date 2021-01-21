import React from 'react';
import "./Button.css"


function Button({label, icon, type, onAddFavClick}) {
  let buttonClassName = "btn";
  if (type === "delete") {
    buttonClassName += "-delete"
  } else if (type === "fav") {
    buttonClassName += "-fav"
  } else if (type === "get") {
    buttonClassName += "-get"
  }

  return (
    <button className={buttonClassName} onClick={onAddFavClick}>{icon} {label}</button>
  );
}

export default Button;
