import React from 'react';
import "./Button.css"


function Button({label, icon, onAddFavClick}) {
  return (
    <button onClick={onAddFavClick}>{icon} {label}</button>
  );
}

export default Button;
