import React from 'react';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';

const TableScreen1 = ({ data }) => {

  const programsList = [];
  const mapRows = () => {
    return data.map(row => {
      let flag = false;
      if (!programsList.includes(row["Program"])) {
        programsList.push(row["Program"]);
        flag = true;
      }

      return <tr key={uuidv4()}>
        
          {flag ? <td>{row["Program"]}</td> : <td style={{border: 'none'}}></td>}
        
        <td>
          {row["System"]}
        </td>
        <td>
          {row["% Design Errors"]}
        </td>
        <td>
          {row["Iterations per design"]}
        </td>
        <td>
          {row["% Rushed design"]}
        </td>
        <td>
          {row["Digital design"]}
        </td>
        <td>
          {row["SME Involvement"]}
        </td>
      </tr>
    })

  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            Program
          </th>
          <th>
            Subsystem
          </th>
          <th>
            % with design errors
          </th>
          <th>
            Iterations per design
          </th>
          <th>
            Rushed design
          </th>
          <th>
            Design digitization
          </th>
          <th>
            SME involvement
          </th>
          <th>
            Forecasted risk
          </th>
        </tr>
      </thead>
      <tbody>
        {mapRows()}
      </tbody>
    </Table>
  );
}

export default TableScreen1;