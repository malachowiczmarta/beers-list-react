import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import api from '../../../api';
import Table from '../components/Table'


function Beers() {
    const [beersList, setBeersList] = useState([]);
    const [spinnerLoading, setSpinnerLoading] = useState(true);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        api.get("?page=1&per_page=80")
        .then((response) => {
          setBeersList(response.data);
          setSpinnerLoading(false)  
        })
        .catch(error => {
          setError(true);
          setSpinnerLoading(false);
        })
    }, []);


  return (
      <div className="beers-container">
        {hasError && <p>An error has occurred, try later</p>}
        {spinnerLoading ? <Loader type="ThreeDots" color="#31357F" height={100} width={100} /> :
          <Table beers={beersList}/>
        }
      </div>

  );
}

export default Beers;
