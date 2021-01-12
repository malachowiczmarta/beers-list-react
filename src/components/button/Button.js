import React from 'react';
import "./Button.css"


function Button({label, icon}) {
  return (
    <button>{icon} {label}</button>
  );
}

export default Button;
