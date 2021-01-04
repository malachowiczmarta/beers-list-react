import React, { useState, useEffect } from 'react';
import {
  useParams,
  Link
} from "react-router-dom";
import api from '../api';



function Beer() {
  let {id} = useParams();
  const [beer, setBeer] = useState("");

  console.log(id)
  console.log(beer)

  useEffect(() => {
    api.get(id).then((response) => {
      setBeer(response.data[0]);  
    })
  }, []);
  
  return (
    

    <section class="grid-container">
      <Link to="/table">wróc do listy piw</Link>

      <div class="grid-item-header-abv">
        <h3>ABV</h3>
      </div>
      <div class="grid-item"></div>
      <div class="grid-item-header-ibu">
        <h3>IBU</h3>
      </div>
      <div class="grid-item"></div>
      <div class="grid-item-header-ebc">
        <h3>EBC</h3>
      </div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>

      <div class="grid-item-abv">{beer.abv}</div>
      <div class="grid-item"></div>
      <div class="grid-item-ibu"></div>
      <div class="grid-item"></div>
      <div class="grid-item-ebc"></div>
      <div class="grid-item"></div>
      <div class="grid-item-chartMalt">
        <canvas id="chartMalt"></canvas>
      </div>

      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>

      <div id="name" class="grid-item-main"></div>
      <div id="tagline" class="grid-item-main"></div>
      <div class="grid-item-main"></div>
      <div class="grid-item-main"></div>
      <div class="grid-item-main"></div>
      <div class="grid-item"></div>
      <div class="grid-item-chartHops">
        <canvas id="chartHops"></canvas>
      </div>

      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>

      <div id="description" class="grid-item-desc"></div>
      <div class="grid-item-desc"></div>
      <div class="grid-item-desc"></div>
      <div class="grid-item-desc"></div>
      <div class="grid-item-desc"></div>
      <div class="grid-item"></div>
      <div class="grid-item-chartYeast">
        <canvas id="chartYeast"></canvas>
      </div>
    </section>
  );
}

export default Beer;
