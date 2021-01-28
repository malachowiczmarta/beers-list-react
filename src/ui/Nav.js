import React, { useState } from 'react';
import { connect } from 'react-redux';

import fakeAuth from "fake-auth";

import { setModal } from '../store/reducers/ui';
import {Link} from 'react-router-dom';
import Button from '../components/button/Button';
import "./ui.css"
import Modal from './Modal'
import SigninComponent from '../components/SigninComponent/SigninComponent';
import { GrClose } from "react-icons/gr";
import {initAuthentication, setAuthError} from "../store/reducers/auth";
import {emailSelector, isAuthenticatedSelector, authErrorSelector, authLoadingSelector} from "../store/selectors/authSelectors";


function Nav(props) {

  const [error, setError] = useState();

  const handleSignIn = () => {
    props.setModal();
  };

  const handleSignOut = () => {
    fakeAuth
      .signout()
      .then(() => {
          props.initAuthentication({
              isAuthenticated: false,
              email: null
          });
      })
      .catch((error) => {
          setError(error);
          let errorMessage = error && error.message ?
              error.message : 'Something went wrong. Please try again later';
          props.setAuthError({error: errorMessage})
      });
  }

  return (
      <>

        <nav>
          <div className="nav-container">
            <p className="logo">cheers beers</p>
            <div className="nav-links">
              <Link to="/"><p>Home</p></Link>
              <Link to="/favorite"><p>Favorite</p></Link>
            </div>
            {
              props.isAuthenticated && props.email ?
                  (
                    <div className="sign-out-component">
                      <p>{props.email}</p>
                      <Button type="sign" label="Sign Out" onSign={handleSignOut} />
                    </div>
                  ) :
                  (<Button type="sign" label="Sign In" onSign={handleSignIn} />)
            }

          </div>
        </nav>
        <Modal show={props.showModal}>
          <Button type="close" label={<GrClose />} onClose={handleSignIn} />
          <SigninComponent />
        </Modal>
      </>

  );
}

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showModal,
    isAuthenticated: isAuthenticatedSelector(state),
    email: emailSelector(state),
    isLoading: authLoadingSelector(state),
    error: authErrorSelector(state)
  };
};

const mapDispatchToPros = {
  setModal,
  initAuthentication,
  setAuthError,
};

export default connect(mapStateToProps, mapDispatchToPros)(Nav);
