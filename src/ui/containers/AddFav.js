import React from 'react';
import { connect } from 'react-redux';

import { add } from '../redux';
import Button from '../../components/button/Button';
import { FaRegHeart } from "react-icons/fa";


function AddFav(props) {

    const handleClick = (beer) => {
      if (!props.favorite.includes(beer)) {
        console.log("dodano do listy")
        return props.add(beer);
      }
      return console.log("juz jest na liście")
    };


  return (
    <>
        <Button type="fav" label="add to the favorite" icon={<FaRegHeart />} onAddFavClick={() => handleClick(props.data)}/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite.favorite,
    isLoading: state.favorite.isLoading,
    isError: state.favorite.isError
  };
};

const mapDispatchToPros = {
  add
}

export default connect(mapStateToProps, mapDispatchToPros)(AddFav);
