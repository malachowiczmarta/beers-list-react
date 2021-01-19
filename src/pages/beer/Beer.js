import React, { useState, useEffect } from 'react';
import {
  useParams,
  Link
} from "react-router-dom";

import { connect } from "react-redux";

import Loader from "react-loader-spinner";
import BeerDetails from '../../components/beerDetails/BeerDetails';
import './Beer.css';
import Button from '../../components/button/Button';
import { BiArrowBack } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

function Beer(props) {
  let {id} = useParams();
  // const [beer, setBeer] = useState("");
  // const [spinnerLoading, setSpinnerLoading] = useState(true);
  // const [hasError, setError] = useState(false);

  const {beers} = props;
  console.log(beers)

  const beer = beers.filter(function (item) {
    return item.id == id;
  });

  console.log(beer)


  // useEffect(() => {
  //   getBeer(beers)

  //   console.log(beer)
  //   // api.get(`/${id}`)
  //   // .then(response => {
  //   //   setBeer(response.data[0]);  
  //   //   setSpinnerLoading(false)})
  //   //   .catch(error => {
  //   //     setError(true);
  //   //     setSpinnerLoading(false);
  //   //   })
  // }, [beers, id]);
  
  return (
    <>
      <div className="link-container">
        <Link to="/table"><span><BiArrowBack /> back to the list</span></Link>
        <Button label="add to the favorite" icon={<FaRegHeart />}/>
      </div>
        {props.isError && <p>An error has occurred, try later</p>}
        {
          props.isLoading ? <Loader type="ThreeDots" color="#31357F" height={100} width={100} /> : 
          <BeerDetails data={beer[0]}/>
        }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers.beers,
    isLoading: state.beers.isLoading,
    isError: state.beers.isError
  };
};


export default connect(mapStateToProps)(Beer);
