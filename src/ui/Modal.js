import React from "react";
import { connect } from "react-redux";
import { setModal } from "../store/reducers/ui";
import "./ui.css";

import Button from "../components/button/Button";
import { GrClose } from "react-icons/gr";

function Modal({ children, ...props }) {
  const handleSignIn = () => {
    props.setModal();
  };

  return (
    <>
      {props.showModal ? (
        <div className="modal-wrapper">
          <div className="modal-container">
            <Button type="close" label={<GrClose />} onClose={handleSignIn} />
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    showModal: state.ui.showModal,
  };
};

const mapDispatchToPros = {
  setModal,
};

export default connect(mapStateToProps, mapDispatchToPros)(Modal);
