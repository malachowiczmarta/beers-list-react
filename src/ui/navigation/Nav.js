import React from 'react';
import { connect } from 'react-redux';

import { setModal } from '../redux';
import {Link} from 'react-router-dom';
import Button from '../../components/button/Button';
import "./Nav.css"
import Modal from '../containers/Modal'
import SigninComponent from '../../pages/SigninComponent/SigninComponent';
import { GrClose } from "react-icons/gr";


function Nav(props) {

  const handleClick = () => {
    props.setModal();
    console.log("click hhh")
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
          <Button type="sign" label="Sign In" onSignIn={handleClick} />

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
    showModal: state.ui.showModal
  };
};

const mapDispatchToPros = {
  setModal
}

export default connect(mapStateToProps, mapDispatchToPros)(Nav);
