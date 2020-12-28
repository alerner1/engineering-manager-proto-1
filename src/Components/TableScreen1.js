
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { v4 as uuidv4 } from 'uuid';
import { VictoryChart, VictoryAxis, VictoryBar, VictoryLabel } from 'victory';
import React, {useEffect} from 'react';

const TableScreen1 = ({ data, percentageMetric }) => {

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
          {createBar(row[percentageMetric])}
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
        <td>
          {forecastRisk(row["Forecasted Risk"])}
        </td>
      </tr>
    })
  }

  const forecastRisk = (dataPoint) => {
    let color = "green";
    if (dataPoint === 2) {
      color = "yellow";
    } else if (dataPoint === 3) {
      color = "red";
    }

    const formattedData = [{ x: 0, y: 100 }]

    return <VictoryChart maxDomain={{y: 100}} horizontal height={20} width={100} padding={5}>
    <VictoryBar 
      style={{ data: {fill: color, width: 25 }, labels: { fill: "transparent" }}}
      data={formattedData} 
      labels={({datum}) => (`${datum.y}`)} 
    />
    <VictoryAxis
      style={{
        axis: { stroke: "transparent" },
        ticks: { stroke: "transparent" },
        tickLabels: { fill: "transparent" }
      }}
    />
    <VictoryAxis
      dependentAxis
      style={{
        axis: {stroke: "transparent" },
        tick: { stroke: "transparent" },
        tickLabels: { fill: "transparent" }
      }}
    />
  </VictoryChart>
  }

  const createBar = (dataPoint) => {
    const formattedData = [{ x: 0, y: dataPoint }];
    
    let color = "GoldenRod";
    if (dataPoint > 33 && dataPoint < 67) {
      color = "DarkOrange";
    } else if (dataPoint > 67) {
      color = "DarkRed";
    }

    return (
      <Row noGutters>
        <Col xs={9}>
          <VictoryChart maxDomain={{y: 100}} horizontal height={20} width={100} padding={5}>
            <VictoryBar 
              style={{ data: {fill: color, width: 25 }, labels: { fill: "transparent" }}}
              data={formattedData} 
              labels={({datum}) => (`${datum.y}`)} 
            />
            <VictoryAxis
              style={{
                axis: { stroke: "transparent" },
                ticks: { stroke: "transparent" },
                tickLabels: { fill: "transparent" }
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: {stroke: "transparent" },
                tick: { stroke: "transparent" },
                tickLabels: { fill: "transparent" }
              }}
            />
          </VictoryChart>
        </Col>
        <Col xs={3}>

        {dataPoint}
        </Col>
      </Row>
    );
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
            {percentageMetric}
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