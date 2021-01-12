import React, { useState, useEffect } from 'react';
import BeerDetails from '../../components/beerDetails/BeerDetails';
import api from '../api';
import Loader from "react-loader-spinner";
import './Random.css';
import Button from '../../components/button/Button';
import { FaRegHeart } from "react-icons/fa";



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
    <>
      {
        spinnerLoading ? <Loader type="ThreeDots" color="#31357F" height={100} width={100} /> :
          <>
            <div className="add-btn-container">
              <Button label="add to the favorite" icon={<FaRegHeart />}/>
            </div>
            <BeerDetails data={beer}/>
          </>
      }
    </>

  );
}

export default Random;
