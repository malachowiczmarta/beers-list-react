import React, { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import Loader from "react-loader-spinner";

import MaterialTable from 'material-table';
import {Link} from "react-router-dom";
import './Table.css';
import api from '../api';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};



function Table() {
    const [beersList, setBeersList] = useState([]);
    const [spinnerLoading, setSpinnerLoading] = useState(true);

    useEffect(() => {
        api.get().then((response) => {
          setBeersList(response.data);
          setSpinnerLoading(false);  
        })
    }, []);

    console.log(beersList)

  return (
      <div className="table-container">
            {spinnerLoading ? <Loader type="ThreeDots" color="#31357F" height={100} width={100} /> :
            <MaterialTable
                columns={[
                { title: 'Id', field: 'id', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.id}</Link>},
                { title: 'Name', field: 'name', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.name}</Link>},
                { title: 'Tagline', field: 'tagline', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.tagline}</Link>},
                { title: 'First brewed', field: 'first_brewed', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.first_brewed}</Link>},
                { title: 'abv', field: 'abv', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.abv}</Link>},
                { title: 'ibu', field: 'ibu', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.ibu}</Link>},
                { title: 'ebc', field: 'ebc', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.ebc}</Link>},            
                ]}
                data = {beersList}
                options={
                    {
                        search: true
                    },
                    {
                        paging:true,
                        pageSize:10,       
                        emptyRowsWhenPaging: true,   
                        pageSizeOptions:[10,20,30,40],
                    }
                }
                icons={tableIcons}
            />

            }
      </div>

  );
}

export default Table;
