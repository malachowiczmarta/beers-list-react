import React from 'react';
import { connect } from "react-redux";


function FavoriteContainer(props) {

  console.log(props)
  return (
    <div className="favorite-container">
        <p>Yours favorite beers:</p>
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
