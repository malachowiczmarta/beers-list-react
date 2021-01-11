import React, { useState, useEffect } from 'react';
import {
  useParams,
  Link
} from "react-router-dom";
import Loader from "react-loader-spinner";
import BeerDetails from '../../components/beerDetails/BeerDetails';
import api from '../api';
import './Beer.css';



function Beer() {
  let {id} = useParams();
  const [beer, setBeer] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(true);

  useEffect(() => {
    api.get(id).then((response) => {
      setBeer(response.data[0]);  
      setSpinnerLoading(false);  

    })
  }, []);
  
  return (
    <>
      <div className="link-container">
        <Link to="/table">back to the list</Link>
      </div>
      <div className="details-container">
        {
          spinnerLoading ? <Loader type="ThreeDots" color="#31357F" height={100} width={100} /> : 
          <>
            <BeerDetails data={beer}/>
            <div className="charts-container"></div>
          </>
          
        }
      </div>

    </>

  );
}

export default Beer;
