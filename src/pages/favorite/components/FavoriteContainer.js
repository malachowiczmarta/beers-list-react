import React from 'react';
import "./FavoriteContainer.css"
import { connect } from "react-redux";


function FavoriteContainer(props) {

  console.log(props)
  return (
    <div className="favorite-container">
        <h2>Yours favorite beers:</h2>
        <ul>
          {props.favorite.map(beer => {
            return <li key={`fav-${beer.id}`}>{beer.name}</li>
          })}
        </ul>
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
