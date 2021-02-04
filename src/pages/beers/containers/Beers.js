import React, { useEffect } from 'react';

import { connect } from "react-redux";
import { fetchBeers, setPage, setRows } from "../../../store/reducers/beers";

import Loader from "react-loader-spinner";
import Table from '../components/Table';
import PaginationContainer from '../components/PaginationContainer';
import './Beers.css';


function Beers(props) {
    const fetchBeers = props.fetchBeers;
    const page = props.page;
    const rows = props.rows;

    useEffect(() => {
        fetchBeers(page, rows);
    }, [fetchBeers, page, rows]);

    const handleChangePage = (event, newPage) => {
      props.setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      props.setRows(parseInt(event.target.value, 10));
      props.setPage(0);
    };

  return (
      <div className="beers-container">
        {props.isError && <p>An error has occurred, try later</p>}
        {props.isLoading ? <div className="loader-container"><Loader type="ThreeDots" color="#31357F" height={100} width={100} /></div> :
          <>
            <Table beers={props.beers}/>
            <PaginationContainer page={page} handleChangePage={handleChangePage} rowsPerPage={rows} handleChangeRowsPerPage={handleChangeRowsPerPage} />
          </>
        }
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers.beers,
    isLoading: state.beers.isLoading,
    isError: state.beers.isError,
    page: state.beers.page,
    rows: state.beers.rows,
  };
};

const mapDispatchToProps = {
  fetchBeers,
  setPage,
  setRows
};

export default connect(mapStateToProps, mapDispatchToProps)(Beers);
