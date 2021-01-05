import React from 'react';
import './BeerDetails.css'

function BeerDetails({data}) {
  
  return (
    <>
      
      <section className="grid-container">
        

        <div className="grid-item-header-abv">
          <h3>ABV</h3>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item-header-ibu">
          <h3>IBU</h3>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item-header-ebc">
          <h3>EBC</h3>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item-abv">
          <p className="number">{data.abv}</p>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item-ibu">
        <p className="number">{data.ibu}</p>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item-ebc">
        <p className="number">{data.ebc}</p>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item-chartMalt">
          <canvas id="chartMalt"></canvas>
        </div>

        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div id="name" className="grid-item-main">
          <h1>{data.name}</h1>
          <h2>{data.tagline}</h2>
        </div>
        <div id="tagline" className="grid-item-main"></div>
        <div className="grid-item-main"></div>
        <div className="grid-item-main"></div>
        <div className="grid-item-main"></div>
        <div className="grid-item"></div>
        <div className="grid-item-chartHops">
          <canvas id="chartHops"></canvas>
        </div>

        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div id="description" className="grid-item-desc">
          <ul>
            <li>{data.first_brewed}</li>
            <li>{data.description}</li>
            <li>{data.food_pairing}</li>
            <li>{data.brewers_tips}</li>
          </ul>
          
        </div>
        <div className="grid-item-desc"></div>
        <div className="grid-item-desc"></div>
        <div className="grid-item-desc"></div>
        <div className="grid-item-desc"></div>
        <div className="grid-item"></div>
        <div className="grid-item-chartYeast">
          <canvas id="chartYeast"></canvas>
        </div>
      </section>
    </>

  );
}

export default BeerDetails;
