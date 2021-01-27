import React, { useState } from "react";
import fakeAuth from "fake-auth";
import "./SigninComponent.css"
import Button from "../../components/button/Button";
import {connect} from "react-redux";
import {initAuthentication, setAuthError} from "../../store/reducers/auth";
import {setModal} from "../../ui/redux";
import {authErrorSelector, authLoadingSelector} from "../../store/selectors/authSelectors";


function SigninComponent(props) {
    const [error, setError] = useState();

    const handleSubmit = (email, pass, e) => {
        e.preventDefault();
        fakeAuth
            .signin(email.value, pass.value)
            .then((response) => {
                props.initAuthentication({
                    isAuthenticated: true,
                    email: response.user.email
                });
                props.setModal()
            })
            .catch((error) => {
                setError(error);
                let errorMessage = error && error.message ?
                    error.message : 'Something went wrong. Please try again later';
                props.setAuthError({error: errorMessage})
            });
    };

    return (
        <div className="sign-container">
            <h2>Hello,<br />Sign in!</h2>

            <form
                onSubmit={(event) => {
                    const [email, pass] = event.target.children;
                    handleSubmit(email, pass, event);
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

const mapStateToProps = (state) => {
    return {
        isLoading: authLoadingSelector(state),
        error: authErrorSelector(state)
    };
};

const mapDispatchToProps = {
    initAuthentication,
    setAuthError,
    setModal
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninComponent);
