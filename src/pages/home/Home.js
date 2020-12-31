import React from 'react';
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <section className="landing-pg-container">
      <article>
        <h1>Beers list</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore.
        </p>
        <Button label="get beers list"/>
        
      </article>
      </section>
     <a href='https://www.freepik.com/vectors/party'>Party vector created by pch.vector - www.freepik.com</a> 
    </div>
  );
}

export default Home;
