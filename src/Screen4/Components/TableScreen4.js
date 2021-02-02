import React from 'react';
import {useHistory} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const TableScreen4 = () => {
  const history = useHistory();

  const sendToPartsScreen = (e) => {
    e.preventDefault();
    history.push('/parts')
  }

  const mapRows = () => {
    const rows = [];
    for (let i = 1; i < 51; i++) {
      rows.push(
        <tr>
          <td>
            <a onClick={e => sendToPartsScreen(e)} href="">Part {i}</a>
          </td>
          <td>
            {Math.floor(Math.random() * 10) + 1}
          </td>
          <td>
            {Math.floor(Math.random() * 10) + 1}
          </td>
          <td>
            {Math.floor(Math.random() * 10) + 1}
          </td>
        </tr>)

    }
    return rows.map(row => {return row});
  }

  return(
    <Table>
      <thead>
        <th>
          Part
        </th>
        <th>
          Risk Alerts
        </th>
        <th>
          Predicted Risk
        </th>
        <th>
          Process Deviations
        </th>
      </thead>
      <tbody>
        {mapRows()}
      </tbody>
    </Table>
  )
}

export default TableScreen4;