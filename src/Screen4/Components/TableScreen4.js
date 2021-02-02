import React from 'react';
import {useHistory} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import PredictedRiskRectangle from './PredictedRiskRectangle';

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
            {rand10()}
          </td>
          <td>
            {rand10()}
          </td>
          <td>
            <PredictedRiskRectangle color={rectColor(rand10())} />
          </td>
        </tr>)

    }
    
    // sorts by color then by part number
    // when you change the part numbers to actually have names, sort by full name alphabetical order instead
    // or this whole sort might not even be necessary if you have the actual numbers in advance rather than randomly generating them in real time
    rows.sort((a, b) => (a.props.children[3].props.children.props.color < b.props.children[3].props.children.props.color) ? 1 : (a.props.children[3].props.children.props.color === b.props.children[3].props.children.props.color) ? ((a.props.children[0].props.children.props.children[1] > b.props.children[0].props.children.props.children[1]) ? 1 : -1 ) : -1);
    
    return rows.map(row => {console.log(row.props.children[0].props.children.props.children[1]); return row});
  }

  const rand10 = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  const rectColor = (risk) => {
    if (risk >= 7) {
      return 4;
    } else if (risk >= 5) {
      return 3;
    } else if (risk >= 2) {
      return 2;
    } else {
      return 1;
    }
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
          Process Deviations
        </th>
        <th>
          Predicted Risk
        </th>
      </thead>
      <tbody>
        {mapRows()}
      </tbody>
    </Table>
  )
}

export default TableScreen4;