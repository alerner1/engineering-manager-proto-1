import React from 'react';
import Table from 'react-bootstrap/Table';

const TableScreen1 = ({ data }) => {

  const mapPrograms = () => {
    return data.map()
  }

  return(
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
        <tr>
          <td>
            
          </td>
          <td>

          </td>
        </tr>
        <tr>
          <td>

          </td>
          <td>

          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableScreen1;