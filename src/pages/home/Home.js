import React, { useEffect } from 'react';

import { connect } from "react-redux";
import { setInitialState } from "../../store/reducers/beers";
import {Link} from 'react-router-dom';
import './Home.css';

function Home(props) {
  const {beers, setInitialState} = props;

  useEffect(() => {
    if (beers && beers.length !== 0) {
      setInitialState();
    };
  }, [beers, setInitialState])

  return (
    <div className="home-container">
      <main className="landing-pg-container">
      <article>
        <h1>Say cheers<br />and<br /> taste the beer!</h1>
        <p>
          Choose from hundreds of beers. Check what types are your favorite and open up to new flavors.
        </p>
        <Link to="/beers">
          <span className="btn-get">get beers list</span>
        </Link>
        <Link to="/random">
          <span className="btn-get">get random beer</span>
        </Link>
      </article>
      </main>
     <a href='https://www.freepik.com/vectors/party'>Party vector created by pch.vector - www.freepik.com</a> 
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers.beers,
  };
};

const mapDispatchToProps = {
  setInitialState
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);;
