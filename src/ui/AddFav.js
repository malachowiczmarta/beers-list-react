import React from 'react';
import { connect } from 'react-redux';

import { add, alert, setAlertType } from '../store/reducers/ui';
import Button from '../components/button/Button';
import { FaRegHeart } from "react-icons/fa";


function AddFav(props) {

    const handleClick = (beer) => {
      if (!props.favorite.includes(beer)) {
        props.setAlertType("add")
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorite: state.ui.favorite,
    showAlert: state.ui.showAlert,
    alertType: state.ui.alertType
  };
};

const mapDispatchToPros = {
  add,
  alert,
  setAlertType
}

export default connect(mapStateToProps, mapDispatchToPros)(AddFav);
