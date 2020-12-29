
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import { VictoryChart, VictoryAxis, VictoryBar, VictoryLabel, VictoryStack } from 'victory';
import React, { useState } from 'react';

const TableScreen1 = ({ data, percentageMetric }) => {

  const [kpiDisplay, setKpiDisplay] = useState(false)

  const toggleKPIs = () => {
    setKpiDisplay(!kpiDisplay)
  }

  const divisionsList = [];
  
  const mapRows = () => {
    return data.map((row, index) => {
      let flag = false;
      if (!divisionsList.includes(row["Division"])) {
        divisionsList.push(row["Division"]);
        flag = true;
      }

      return <tr key={uuidv4()}>
        
        {flag ? <td>{row["Division"]}</td> : <td style={{border: 'none'}}></td>}
        
        <td>
          {row["Subdivision"]}
        </td>
        <td className="with-chart">
          {createBar(row[percentageMetric])}
        </td>
        <td className={kpiDisplay ? "toggle-display" : "toggle-display in"} style={{border: 'none'}}></td>
        <td className={kpiDisplay ? "toggle-display in" : "toggle-display"}>
          {row["Iterations per design"]}
        </td>
        <td className={kpiDisplay ? "toggle-display in" : "toggle-display"}>
          {row["% Rushed design"]}
        </td>
        <td className={kpiDisplay ? "toggle-display in" : "toggle-display"}>
          {row["Digital design"]}
        </td>
        <td className={kpiDisplay ? "toggle-display in" : "toggle-display"}>
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
      color = "#E0BA3E";
    } else if (dataPoint === 3) {
      color = "red";
    }

    const formattedData = [{ x: 0, y: 100 }]

    return <VictoryChart maxDomain={{y: 100}} horizontal height={10} width={100} padding={1}>
    <VictoryBar 
      style={{ data: {fill: color, width: 10 }, labels: { fill: "transparent" }}}
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
    
    let color = "green";
    if (dataPoint > 33 && dataPoint < 67) {
      color = "#E0BA3E";
    } else if (dataPoint > 67) {
      color = "red";
    }

    return (
      
          <VictoryChart maxDomain={{y: 100}} horizontal height={5} width={100} padding={1}>
            <VictoryStack
              style={{ data: { width: 5 }, labels: { fill: "white", fontSize: 5 }}}
            >

              <VictoryBar 
                cornerRadius={{ bottomLeft: 2, bottomRight: 2 }}
                style={{ data: { fill: color, stroke: "gray", strokeWidth: 0.5 }}}
                data={formattedData} 
                labels={dataPoint} 
                labelComponent={
                  <VictoryLabel x={dataPoint} dx={-dataPoint * 0.01} textAnchor="middle"  verticalAnchor="middle" />
                }
                />
              <VictoryBar
                cornerRadius={2}
                style={{ data: { fill: "darkslategray", stroke: "gray", strokeWidth: 0.5 } }}
                data={[{ x: 0, y: 100 - dataPoint }]}
              />
            </VictoryStack>
            <VictoryAxis
              style={{
                axis: { stroke: "transparent" },
                ticks: { stroke: "transparent" },
                tickLabels: { fill: "transparent" }
              }}
              tickValues={[0]}
              tickCount={1}
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
    );
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>
            Division
          </th>
          <th>
            Subdivision
          </th>
          <th style={{width: "35%"}}>
            {percentageMetric}
          </th>
          <th style={{width: "15%"}} className={kpiDisplay ? "toggle-display" : "toggle-display in"}>
            <Button className={kpiDisplay ? "toggle-display" : "toggle-display in"} onClick={toggleKPIs}>Toggle KPIs</Button>
          </th>
          <th className={kpiDisplay ? "toggle-display in" : "toggle-display"}>
            Iterations per design
          </th>
          <th className={kpiDisplay ? "toggle-display in" : "toggle-display"}>
            Rushed design
          </th>
          <th className={kpiDisplay ? "toggle-display in" : "toggle-display"}>
            Design digitization
          </th>
          <th className={kpiDisplay ? "toggle-display in" : "toggle-display"}>
            SME involvement
          </th>
          <th style={{width: "7%"}}>
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