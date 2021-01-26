import React from 'react';
import "./Button.css"


function Button({label, icon = null, type, onAddFavClick, onDelete, onSignIn, onClose}) {
  let buttonClassName = "btn";
  let handleClick
  if (type === "delete") {
    buttonClassName += "-delete";
    handleClick = onDelete
  } else if (type === "fav") {
    buttonClassName += "-fav";
    handleClick = onAddFavClick
  } else if (type === "sign") {
    buttonClassName += "-sign";
    handleClick = onSignIn
  } else if (type === "close") {
    buttonClassName += "-close";
    handleClick = onClose
  } else if (type === "get") {
    buttonClassName += "-get"
  } else if (type === "submit") {
    buttonClassName += "-submit"
  } 

  return (
    <button className={buttonClassName} onClick={handleClick}>{icon} {label}</button>
  );
}

export default Button;
