import React from 'react';
import "./FavoriteContainer.css"
import { connect } from "react-redux";
import { deleteBeer } from "../../../store/reducers/ui"
import { AiFillDelete } from "react-icons/ai";
import Button from '../../../components/button/Button';


function FavoriteContainer(props) {

  function handleDelete(elem) {
    props.deleteBeer(elem)
  }

  return (
    <div className="favorite-container">
        <h2>Yours favorite beers:</h2>
        <div>
          {props.favorite.map((beer, index) => {
            return (
            <div key={`fav-${index}`} className="fav-item-wrapper">
              <div className="fav-item-container">
                <h3>{beer.name}</h3>
                <Button type="delete" icon={<AiFillDelete/>} onDelete={() => handleDelete(beer)}/>
              </div>
            </div>
            )
          })}
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorite: state.ui.favorite,
    isLoading: state.ui.isLoading,
    isError: state.ui.isError
  };
};

const mapDispatchToPros = {
  deleteBeer
}


export default connect(mapStateToProps, mapDispatchToPros)(FavoriteContainer);
