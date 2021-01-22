import React, { useState, useEffect } from 'react';

// import { connect } from "react-redux";

import BeerDetails from '../../components/beerDetails/BeerDetails';
import AddFav from '../../ui/containers/AddFav'
import api from '../../api';
import Loader from "react-loader-spinner";
import './Random.css';




function Random() {
  const [beer, setBeer] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(true);
  const [hasError, setError] = useState(false);



  useEffect(() => {
    api.get("/random")
    .then((response) => {
      setBeer(response.data[0]);
      setSpinnerLoading(false)    
    })
    .catch(error => {
      setError(true);
      setSpinnerLoading(false);
    })
  }, []);
  
  return (
    <>
      {hasError && <p>An error has occurred, try later</p>}
      {
        spinnerLoading ? <div className="loader-container"><Loader type="ThreeDots" color="#31357F" height={100} width={100} /></div> :
          <>
            <div className="add-btn-container">
            <AddFav data={beer}/>
            </div>
            <BeerDetails data={beer}/>
          </>
      }
    </>

  );
}

export default Random;
