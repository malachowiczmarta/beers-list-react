import React from 'react';
import "./Button.css"


function Button({label, icon = null, type, onAddFavClick, onDelete, onSign, onClose}) {
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
    handleClick = onSign
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
