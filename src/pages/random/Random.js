import React, { useState, useEffect } from 'react';
import BeerDetails from '../../components/beerDetails/BeerDetails';
import api from '../api';



function Random() {
  const [beer, setBeer] = useState("");


  useEffect(() => {
    api.get("random").then((response) => {
      setBeer(response.data[0]);  
    })
  }, []);

  console.log(beer)
  
  return (
    <>
      <BeerDetails data={beer}/>
    </>

  );
}

export default Random;
