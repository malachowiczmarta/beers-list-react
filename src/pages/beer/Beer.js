import React from 'react';
import {
  useParams,
  Link
} from "react-router-dom";

import { connect } from "react-redux";

import Loader from "react-loader-spinner";
import BeerDetails from '../../components/beerDetails/BeerDetails';
import './Beer.css';
import { BiArrowBack } from "react-icons/bi";
import AddFav from '../../ui/containers/AddFav';

function Beer(props) {
  let {id} = useParams();

  const {beers} = props;
  console.log(beers)

  const beer = beers.filter(function (item) {
    return item.id === Number(id);
  });

  
  return (
    <>
      <div className="link-container">
        <Link to="/table"><span><BiArrowBack /> back to the list</span></Link>
        <AddFav data={beer[0]}/>
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
