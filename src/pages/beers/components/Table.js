import React from "react";
import { Link } from "react-router-dom";

function Table({ beers }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Tagline</th>
            <th>First brewed</th>
            <th>abv</th>
            <th>ibu</th>
            <th>ebc</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer) => {
            return (
              <tr key={`row-${beer.id}`}>
                <td>
                  <Link to={`/beers/${beer.id}`}>{beer.id}</Link>
                </td>
                <td>
                  <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
                </td>
                <td>
                  <Link to={`/beers/${beer.id}`}>{beer.tagline}</Link>
                </td>
                <td>
                  <Link to={`/beers/${beer.id}`}>{beer.first_brewed}</Link>
                </td>
                <td>
                  <Link to={`/beers/${beer.id}`}>{beer.abv}</Link>
                </td>
                <td>
                  <Link to={`/beers/${beer.id}`}>{beer.ibu}</Link>
                </td>
                <td>
                  <Link to={`/beers/${beer.id}`}>{beer.ebc}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
