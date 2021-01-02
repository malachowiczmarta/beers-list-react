import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Table.css';
import api from './api';
import Beer from '../beer/Beer'


function Table() {

    const [beersList, setBeersList] = useState([]);

    useEffect(() => {
        api.get("beers").then((response) => {
          setBeersList(response.data);  
        })
    }, []);

    console.log(beersList)

  return (
    
    <div>
        <MaterialTable
            columns={[
            { title: 'Id', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Tagline', field: 'tagline'},
            { title: 'First brewed', field: 'first_brewed'},
            { title: 'abv', field: 'abv'},
            { title: 'ibu', field: 'ibu'},
            { title: 'ebc', field: 'ebc'}
            ]}
            data = {beersList}
            onRowClick={(event, rowData) => <Link to={`/beers/:${rowData.id}`}></Link>}
        />
    </div>
    
  );
}

export default Table;
