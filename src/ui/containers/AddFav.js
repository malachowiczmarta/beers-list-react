import React from 'react';
import { connect } from 'react-redux';

import { add, alert, setAlertType } from '../redux';
import Button from '../../components/button/Button';
import { FaRegHeart } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import Alert from './Alert';



function AddFav(props) {

    const handleClick = (beer) => {
      if (!props.favorite.includes(beer)) {
        props.setAlertType("success")
        props.add(beer);
        props.alert();
        const timer = setTimeout(() => props.alert(), 2000);
        return () => clearTimeout(timer);
      }
      props.setAlertType("info")
      props.alert();
      const timer = setTimeout(() => props.alert(), 2000);
      return () => clearTimeout(timer);

    };


  return (
    <div className="addFav-container">
        <Button type="fav" label="add to the favorite" icon={<FaRegHeart />} onAddFavClick={() => handleClick(props.data)}/>
        {props.showAlert ? <Alert variant={props.alertType} icon={<BsCheckCircle />} /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite.favorite,
    showAlert: state.favorite.showAlert,
    alertType: state.favorite.alertType
  };
};

const mapDispatchToPros = {
  add,
  alert,
  setAlertType
}

export default connect(mapStateToProps, mapDispatchToPros)(AddFav);
