import React from 'react';
import { connect } from 'react-redux';

import { setModal } from '../store/reducers/ui';
import {Link} from 'react-router-dom';
import Button from '../components/button/Button';
import "./ui.css"
import Modal from './Modal'
import SigninComponent from '../components/SigninComponent/SigninComponent';
import { GrClose } from "react-icons/gr";
import {emailSelector, isAuthenticatedSelector} from "../store/selectors/authSelectors";


function Nav(props) {

  const handleClick = () => {
    props.setModal();
  };

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
                  (<p>{props.email}</p>) :
                  (<Button type="sign" label="Sign In" onSignIn={handleClick} />)
            }

          </div>
        </nav>
        <Modal show={props.showModal}>
          <Button type="close" label={<GrClose />} onClose={handleClick} />
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
  };
};

const mapDispatchToPros = {
  setModal
};

export default connect(mapStateToProps, mapDispatchToPros)(Nav);
