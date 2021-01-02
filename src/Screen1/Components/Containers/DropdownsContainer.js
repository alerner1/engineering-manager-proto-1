import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DisplayDropdown from '../DisplayDropdown';
import {v4 as uuidv4} from 'uuid';
import { data } from '../../../data';

const DropdownsContainer = ({ kpiFilter, unitFilter, handleFilter, percentageMetric, onPercentageMetricChange}) => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown) => <DisplayDropdown kpiFilter={kpiFilter} handleFilter={handleFilter} unitFilter={unitFilter} key={uuidv4()} info={dropdown}  />);
  }

 

  return(
    <Row>
      {mapDropdowns()}
      <Col>
        <Form onChange={event => onPercentageMetricChange(event.target.value)}>
          <div key="default-radio" className="mb-3">
            <Form.Check type="radio" checked={percentageMetric === "% Schedule delays"} id="schedule-delays" label="% Schedule delays" value="% Schedule delays" />
            <Form.Check type="radio" checked={percentageMetric === "% Design Errors"} id="design-errors" label="% Design errors" value="% Design Errors" />
            <Form.Check type="radio" checked={percentageMetric === "% Cost overrun"} id="cost-overrun" label="% Cost overrrun" value="% Cost overrun" />
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default DropdownsContainer;


const mapDivisions = () => {
  const divisionsList = ['(All)'];
  for (let row of data) {
    if (!divisionsList.includes(row["Division"])) {
      divisionsList.push(row["Division"])
    }
  }
  return divisionsList;
}

const dropdownsList = [
  {
    title: "Select KPIs to display",
    options: [
      "(All)",
      "Iterations per design",
      "% Rushed design",
      "Digital design",
      "SME Involvement"
    ]
  },
  {
    title: "Filter on business unit",
    options: mapDivisions()
  }
];