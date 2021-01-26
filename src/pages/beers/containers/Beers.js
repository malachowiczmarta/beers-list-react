import React, { useEffect, useState } from 'react';

import { connect } from "react-redux";
import { fetchBeers } from "../redux";

import Loader from "react-loader-spinner";
import Table from '../components/Table';
import PaginationContainer from '../components/PaginationContainer';


function Beers(props) {
    const fetchBeers = props.fetchBeers;
    useEffect(() => {
        fetchBeers("1", "25");
    }, [fetchBeers]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
      let fetchPage = newPage + 1;
      console.log(fetchPage)
      fetchBeers(`${fetchPage}`, "25");
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

  return (
      <div className="beers-container">
        {props.isError && <p>An error has occurred, try later</p>}
        {props.isLoading ? <div className="loader-container"><Loader type="ThreeDots" color="#31357F" height={100} width={100} /></div> :
          <>
            <Table beers={props.beers}/>
            <PaginationContainer page={page} handleChangePage={handleChangePage} rowsPerPage={rowsPerPage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
          </>
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
