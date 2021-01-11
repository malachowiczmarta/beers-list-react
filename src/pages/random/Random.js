import React, { useState, useEffect } from 'react';
import BeerDetails from '../../components/beerDetails/BeerDetails';
import api from '../api';
import Loader from "react-loader-spinner";
import './Random.css';



function Random() {
  const [beer, setBeer] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(true);



  useEffect(() => {
    api.get("random").then((response) => {
      setBeer(response.data[0]);
      setSpinnerLoading(false);    
    })
  }, []);

  console.log(beer)
  
  return (
    <div className="random-details-container">
      {
        spinnerLoading ? <Loader type="ThreeDots" color="#31357F" height={100} width={100} /> : 
        <BeerDetails data={beer}/>
      }
    </div>

  );
}

export default Random;
