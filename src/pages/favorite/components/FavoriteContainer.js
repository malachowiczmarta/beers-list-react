import React from 'react';
import "./FavoriteContainer.css"
import { connect } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import Button from '../../../components/button/Button';


function FavoriteContainer(props) {

  console.log(props)
  return (
    <div className="favorite-container">
        <h2>Yours favorite beers:</h2>
        <div>
          {props.favorite.map(beer => {
            return (
            <div key={`fav-${beer.id}`} className="fav-item-wrapper">
              <div className="fav-item-container">
                <h3>{beer.name}</h3>
                <Button type="delete" icon={<AiFillDelete/>}/>
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
    favorite: state.favorite.favorite,
    isLoading: state.favorite.isLoading,
    isError: state.favorite.isError
  };
};


export default connect(mapStateToProps)(FavoriteContainer);
