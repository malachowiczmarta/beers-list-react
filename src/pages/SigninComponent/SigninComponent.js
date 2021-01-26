import React, { useState } from "react";
import fakeAuth from "fake-auth";
import "./SigninComponent.css"
import Button from "../../components/button/Button";


function SigninComponent(props) {
  const [error, setError] = useState();

  const handleSubmit = (email, pass) => {
    fakeAuth
      .signin(email.value, pass.value)
      .then((response) => {
        props.onSignin(response.user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="sign-container">
      <h2>Hello,<br />Sign in!</h2>

      <form
        onSubmit={(event) => {
          const [email, pass] = event.target.children;
          handleSubmit(email, pass);
        }}
      >
        {error && <p>{error.message}</p>}
        
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="pass" placeholder="password" />
        <Button type="submit" label="Sign in" />
      </form> 
    </div>
  );
}

export default SigninComponent;
