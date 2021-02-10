
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import PercentageMetricBar from './PercentageMetricBar';

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
      "Design digitization": 0,
      "SME involvement": 0,
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

  const redirectScreen4 = (event, subdivisionName) => {
    event.preventDefault();
    history.push(`/design_errors/${subdivisionName}`)
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

        {flag ? <td className={`${subdivisionDisplay ? 'no-bottom-border' : 'no-border'} division-cell font-small small-padding`}>{row["Division"]}</td> : <td className="no-border font-small"></td>}

        <td onClick={event => redirectScreen2(event.target.innerText)} className={`${flag ? 'no-bottom-border' : 'no-border'} hover-hand font-small small-padding ${subdivisionDisplay ? "toggle-display in" : "toggle-display"}`}>
          {row["Subdivision"]}
        </td>
        <td className={`${flag && subdivisionDisplay ? 'no-bottom-border' : 'no-border'} small-padding`}>
          {<PercentageMetricBar dataPoint={row[percentageMetric]} />}
        </td>
        <td className={`${flag && subdivisionDisplay ? 'no-bottom-border' : 'no-border'} small-padding`}>
          {
            subdivisionDisplay ? 
            <a onClick={event => redirectScreen4(event, row["Subdivision"])} href="">{row["Predicted Design Errors"]}</a>
            :
            <a onClick={event => redirectScreen4(event, row["Division"])} href="">{row["Predicted Design Errors"]}</a>
          }
        </td>
        <td className={`${flag && subdivisionDisplay ? 'no-bottom-border' : 'no-border'} small-padding ${kpiDisplay ? "toggle-display" : "toggle-display in"}`}></td>
        <td className={`${flag && subdivisionDisplay ? 'no-bottom-border' : 'no-border'} small-padding  ${checkIfDisplayed('Iterations per design')}`}>
          {row["Iterations per design"]}
        </td>
        <td className={`${flag && subdivisionDisplay ? 'no-bottom-border' : 'no-border'} small-padding  ${checkIfDisplayed('% Rushed design')}`}>
          {row["% Rushed design"]}
        </td>
        <td className={`${flag && subdivisionDisplay ? 'no-bottom-border' : 'no-border'} small-padding  ${checkIfDisplayed('Design digitization')}`}>
          {row["Design digitization"]}
        </td>
        <td className={`${flag && subdivisionDisplay ? 'no-bottom-border' : 'no-border'} small-padding  ${checkIfDisplayed('SME involvement')}`}>
          {row["SME involvement"]}
        </td>
        <td className={kpiDisplay ? `${flag && subdivisionDisplay ? 'no-bottom-border' : 'no-border'} toggle-display in` : "toggle-display"} ></td>
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


  return (
    <Table>
      {/* this is also a mess, try to fix */}
      <thead>
        <tr>
          <th style={{ width: '12%'}} className="no-top-border small-padding">
            <div className="hover-hand font-small" onClick={() => toggleSubdivisions()}>
              Division &nbsp;
              {subdivisionDisplay ? <FontAwesomeIcon className="hover-hand" icon="minus-circle" /> : <FontAwesomeIcon className="hover-hand" icon="plus-circle" />}
            </div>
          </th>
          <th style={{ width: '20%' }} className={`no-top-border font-small small-padding ${subdivisionDisplay ? "toggle-display in" : "toggle-display"}`}>
            Subdivision
          </th>
          <th className="no-top-border font-small small-padding">
            {percentageMetric}
          </th>
          <th className="no-top-border font-small small-padding" style={{ width: "7%" }}>
            Predicted Errors
          </th>
          <th style={{ width: "20%" }} onClick={toggleKPIs} className={`no-top-border font-small small-padding ${kpiDisplay ? "toggle-display" : "toggle-display in"}`}>
            Design Performance KPIs &nbsp; <FontAwesomeIcon className="hover-hand" icon="plus-circle" />
          </th>
          <th style={{width: '7%'}} className={`no-top-border font-small small-padding ${checkIfDisplayed('Iterations per design')}`}>
            Iterations per design
          </th>
          <th style={{width: '7%'}} className={`no-top-border font-small small-padding ${checkIfDisplayed('% Rushed design')}`}>
            Rushed design
          </th>
          <th style={{width: '7%'}} className={`no-top-border font-small small-padding ${checkIfDisplayed('Design digitization')}`}>
            Design digitization
          </th>
          <th style={{width: '7%'}} className={`no-top-border font-small small-padding ${checkIfDisplayed('SME involvement')}`}>
            SME involvement 
          </th>
          <th style={{width: '2%'}} className={`no-top-border font-small small-padding ${kpiDisplay ? "toggle-display in" : "toggle-display"}`}><FontAwesomeIcon className="hover-hand" onClick={() => toggleKPIs()} icon="minus-circle" /></th>
        </tr>
      </thead>
      <tbody>
        {subdivisionDisplay ? mapRows(data) : mapDivisionRows()}
      </tbody>
    </Table>
  );
}

export default TableScreen1;