import React, { useState, useEffect } from 'react';
import {
  useParams,
  Link
} from "react-router-dom";
import BeerDetails from '../../components/BeerDetails';
import api from '../api';
import './Beer.css';



function Beer() {
  let {id} = useParams();
  const [beer, setBeer] = useState("");

  console.log(id)
  console.log(beer)

  useEffect(() => {
    api.get(id).then((response) => {
      setBeer(response.data[0]);  
    })
  }, []);
  
  return (
    <>
      <Link to="/table">wróc do listy piw</Link>
      <BeerDetails data={beer}/>
    </>

  );
}

export default Beer;
