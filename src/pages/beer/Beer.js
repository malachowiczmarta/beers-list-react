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
  const beer = beers.filter(function (item) {
    return item.id === Number(id);
  });

  
  return (
    <>
      <div className="link-container">
        <Link to="/beers"><BiArrowBack/> back to the list</Link>
        <AddFav data={beer[0]}/>
      </div>
      <BeerDetails data={beer[0]}/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers.beers,
  };
};


export default connect(mapStateToProps)(Beer);
