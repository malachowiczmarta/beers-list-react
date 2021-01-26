import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';
import {Link} from "react-router-dom";
import './Table.css';


function Table({beers}) {
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

          {beers.map(beer => {
            return (
              <tr>
                <td><Link to={`/beers/${beer.id}`}>{beer.id}</Link></td>
                <td><Link to={`/beers/${beer.id}`}>{beer.name}</Link></td>
                <td><Link to={`/beers/${beer.id}`}>{beer.tagline}</Link></td>
                <td><Link to={`/beers/${beer.id}`}>{beer.first_brewed}</Link></td>
                <td><Link to={`/beers/${beer.id}`}>{beer.abv}</Link></td>
                <td><Link to={`/beers/${beer.id}`}>{beer.ibu}</Link></td>
                <td><Link to={`/beers/${beer.id}`}>{beer.ebc}</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';

// const tableIcons = {
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };


// function Table({beers}) {
//   return (
//     <div className="table-container">
//       <MaterialTable
//         title="list of beers"
//         columns={[
//         { title: 'Id', field: 'id', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.id}</Link>},
//         { title: 'Name', field: 'name', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.name}</Link>},
//         { title: 'Tagline', field: 'tagline', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.tagline}</Link>},
//         { title: 'First brewed', field: 'first_brewed', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.first_brewed}</Link>},
//         { title: 'abv', field: 'abv', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.abv}</Link>},
//         { title: 'ibu', field: 'ibu', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.ibu}</Link>},
//         { title: 'ebc', field: 'ebc', render: rowData => <Link to={`/beers/${rowData.id}`}>{rowData.ebc}</Link>},
//         ]}
//         data = {beers}
//         options = {
//           {
//             search: true,
//             paging:true,
//             pageSize:10,
//             emptyRowsWhenPaging: true,
//             pageSizeOptions:[10,20,30,40],
//             headerStyle: {
//               backgroundColor: '#31357F',
//               color: '#FFF',
//               fontWeight: 'bold'
//             }  
//           }
//         }
//         icons={tableIcons}
//         />
//     </div>
//   );
// }

// export default Table;



