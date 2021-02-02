import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/button/Button';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <main className="landing-pg-container">
      <article>
        <h1>Beers list</h1>
        <p className="main-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore.
        </p>
        <Link to="/beers">
          <Button type="get" label="get beers list"/>
        </Link>
        <Link to="/random">
          <Button type="get" label="get random beer"/>
        </Link>
      </article>
      </main>
     <a href='https://www.freepik.com/vectors/party'>Party vector created by pch.vector - www.freepik.com</a> 
    </div>
  );
}

export default Home;
