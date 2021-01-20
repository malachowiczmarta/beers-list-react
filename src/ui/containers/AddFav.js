import React from 'react';
import { connect } from 'react-redux';

import { add } from '../redux';
import Button from '../../components/button/Button';
import { FaRegHeart } from "react-icons/fa";


function AddFav(props) {

    const handleClick = (beer) => {
        props.add(beer);
    };


  return (
    <>
        <Button label="add to the favorite" icon={<FaRegHeart />} onAddFavClick={() => handleClick(props.data)}/>
    </>
  );
}

const mapDispatchToPros = {
  add
}

export default connect(null, mapDispatchToPros)(AddFav);
