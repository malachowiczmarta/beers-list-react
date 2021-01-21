import React from 'react';
import "./Button.css"


function Button({label, icon, type, onAddFavClick, onDelete}) {
  let buttonClassName = "btn";
  let handleClick
  if (type === "delete") {
    buttonClassName += "-delete";
    handleClick = onDelete
  } else if (type === "fav") {
    buttonClassName += "-fav";
    handleClick = onAddFavClick
  } else if (type === "get") {
    buttonClassName += "-get"
  }

  return (
    <button className={buttonClassName} onClick={handleClick}>{icon} {label}</button>
  );
}

export default Button;
