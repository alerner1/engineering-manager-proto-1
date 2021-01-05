
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import { VictoryChart, VictoryAxis, VictoryBar, VictoryLabel, VictoryStack } from 'victory';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const TableScreen1 = ({ kpiFilter, unitFilter, data, percentageMetric }) => {
  const history = useHistory();

  const [kpiDisplay, setKpiDisplay] = useState(false);
  const [subdivisionDisplay, setSubdivisionDisplay] = useState(false);

  useEffect(() => {
    console.log(kpiDisplay)
  }, [kpiDisplay])

  // can animate these toggles with bootstrap collapse eventually
  const toggleKPIs = () => {
    setKpiDisplay(!kpiDisplay);
  }

  const toggleSubdivisions = () => {
    setSubdivisionDisplay(!subdivisionDisplay);
  }

  // could probably do this with hooks bc we need the list for all situations
  // might also be more effective to take averages as soon as loaded so you can 
  // toggle faster
  // honestly this whole thing is very inefficient -- we're iterating over the array
  // way too many times
  // luckily it's a small array
  // but find a more efficient way to do it in the long run
  const mapDivisionRows = () => {
    const divisionsList = [];
    let divisionRows = [];
    for (let row of data) {
      if (!divisionsList.includes(row["Division"])) {
        divisionsList.push(row["Division"])
      }
    }

    for (let division of divisionsList) {
      divisionRows.push(getAverages(division))
    }
    
    return mapRows(divisionRows)
  }

  const getAverages = (division) => {
    const averagedRow = {
      "% Design Errors": 0,
      "% Schedule delays": 0,
      "% Cost overrun": 0,
      "Iterations per design": 0,
      "% Rushed design": 0,
      "Digital design": 0,
      "SME Involvement": 0,
      "Predicted Design Errors": 0
    };
    const allRows = data.filter(row => {return row["Division"] === division})

    for (let row of allRows) {
      for (let key in averagedRow) {
        averagedRow[key] += row[key];
      }
    }
    
    for (let key in averagedRow) {
      averagedRow[key] = Math.round(averagedRow[key]/allRows.length);
    }

    averagedRow["Division"] = division

    return averagedRow;
  }

  const redirectScreen2 = (subdivisionName) => {
    history.push(`/subdivisions/${subdivisionName}`)
  }

  
  const mapRows = (rowData) => {
    if (unitFilter !== "(All)") {
      rowData = rowData.filter(row => {return row["Division"] === unitFilter})
    }

    const divisionsList = [];
    return rowData.map((row) => {
      let flag = false;
      if (!divisionsList.includes(row["Division"])) {
        divisionsList.push(row["Division"]);
        flag = true;
      }

      return <tr key={uuidv4()}>

        {flag ? <td className="font-small small-padding ">{row["Division"]}</td> : <td className="font-small" style={{ border: 'none' }}></td>}

        <td onClick={event => redirectScreen2(event.target.innerText)} className={`hover-hand font-small small-padding ${subdivisionDisplay ? "toggle-display in" : "toggle-display"}`}>
          {row["Subdivision"]}
        </td>
        <td className="small-padding">
          {createBar(row[percentageMetric])}
        </td>
        <td className={`small-padding ${kpiDisplay ? "toggle-display" : "toggle-display in"}`} style={{ border: 'none' }}></td>
        <td className={`small-padding text-center ${checkIfDisplayed('Iterations per design')}`}>
          {row["Iterations per design"]}
        </td>
        <td className={`small-padding text-center ${checkIfDisplayed('% Rushed design')}`}>
          {row["% Rushed design"]}
        </td>
        <td className={`small-padding text-center ${checkIfDisplayed('Digital design')}`}>
          {row["Digital design"]}
        </td>
        <td className={`small-padding text-center ${checkIfDisplayed('SME Involvment')}`}>
          {row["SME Involvement"]}
        </td>
        <td className={kpiDisplay ? "toggle-display in" : "toggle-display"} ></td>
        <td className="small-padding text-center">
          {row["Predicted Design Errors"]}
        </td>
      </tr>
    })
  }

  const checkIfDisplayed = (column) => {
    if (!kpiDisplay) {
      return "toggle-display";
    }
    else {
      if (kpiFilter !== '(All)') {
        if (kpiFilter === column) {
          return "toggle-display in";
        } else {
          return "toggle-display";
        }
      }
    }
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

      <VictoryChart maxDomain={{ y: 100 }} horizontal height={10} width={100} padding={{ top: 2, bottom: 8 }}>
        <VictoryStack
          style={{ labels: { fill: "midnightblue", fontSize: 4 } }}
        >
          <VictoryBar
            cornerRadius={{ bottomLeft: 2, bottomRight: 2 }}
            style={{ data: { fill: color, width: 4, stroke: "lightgray", strokeWidth: 0.5 } }}
            data={formattedData}
            labels={() => (`${dataPoint}%`)}
            labelComponent={
              <VictoryLabel x={dataPoint} dx={dataPoint * 0.01} textAnchor="middle" verticalAnchor="middle" />
            }
          />
          <VictoryBar
            cornerRadius={2}
            style={{ data: { fill: "white", width: 4, stroke: "lightgray", strokeWidth: 0.5 } }}
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
            axis: { stroke: "transparent" },
            tick: { stroke: "transparent" },
            tickLabels: { fill: "transparent" }
          }}
        />
      </VictoryChart>
    );
  }

  return (
    <Table>
      {/* this is also a mess, try to fix */}
      <thead>
        <tr>
          <th style={{ width: '12%' }}>
            <div className="hover-hand font-small" onClick={() => toggleSubdivisions()}>
              Division &nbsp;
              {subdivisionDisplay ? <FontAwesomeIcon className="hover-hand" icon="minus-circle" /> : <FontAwesomeIcon className="hover-hand" icon="plus-circle" />}
            </div>
          </th>
          <th className={`font-small ${subdivisionDisplay ? "toggle-display in" : "toggle-display"}`}>
            Subdivision
          </th>
          <th className="font-small" style={{ width: "50%" }}>
            {percentageMetric}
          </th>
          <th style={{ width: "15%" }} className={`font-small ${kpiDisplay ? "toggle-display" : "toggle-display in"}`}>
            <Button style={{color: "midnightblue", backgroundColor: "transparent", border: "2px solid lightgray"}} className={`p-1 font-small ${kpiDisplay ? "toggle-display" : "toggle-display in"}`} onClick={toggleKPIs}>Display design performance KPIs <FontAwesomeIcon icon="plus-circle" /></Button>
          </th>
          <th className={`font-small ${checkIfDisplayed('Iterations per design')}`}>
            Iterations per design
          </th>
          <th className={`font-small ${checkIfDisplayed('% Rushed design')}`}>
            Rushed design
          </th>
          <th className={`font-small ${checkIfDisplayed('Design digitization')}`}>
            Design digitization
          </th>
          <th className={`font-small ${checkIfDisplayed('SME involvement')}`}>
            SME involvement 
          </th>
          <th className={`font-small ${kpiDisplay ? "toggle-display in" : "toggle-display"}`}><FontAwesomeIcon className="hover-hand" onClick={() => toggleKPIs()} icon="minus-circle" /></th>
          <th className="font-small" style={{ width: "7%" }}>
            Predicted Design Errors
          </th>
        </tr>
      </thead>
      <tbody>
        {subdivisionDisplay ? mapRows(data) : mapDivisionRows()}
      </tbody>
    </Table>
  );
}

export default TableScreen1;