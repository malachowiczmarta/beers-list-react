import React, { useEffect } from 'react';

import { connect } from "react-redux";
import { fetchBeers } from "../redux";

import Loader from "react-loader-spinner";
import Table from '../components/Table';


function Beers(props) {
    const fetchBeers = props.fetchBeers;
    useEffect(() => {
        fetchBeers();
    }, [fetchBeers]);

  return (
      <div className="beers-container">
        {props.isError && <p>An error has occurred, try later</p>}
        {props.isLoading ? <Loader type="ThreeDots" color="#31357F" height={100} width={100} /> :
          <Table beers={props.beers}/>
        }
      </div>

  );
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers.beers,
    isLoading: state.beers.isLoading,
    isError: state.beers.isError
  };
};

const mapDispatchToProps = {
  fetchBeers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Beers);
