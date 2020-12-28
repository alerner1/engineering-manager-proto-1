import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DisplayDropdown from '../Components/DisplayDropdown';
import {v4 as uuidv4} from 'uuid';

const DropdownsContainer = () => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown) => <DisplayDropdown key={uuidv4()} info={dropdown}  />);
  }

  return(
    <Row>
      {mapDropdowns()}
      <Col>
        <Form>
          <div key="default-radio" className="mb-3">
            <Form.Check type="radio" id="schedule-delays" label="Schedule delays" />
            <Form.Check type="radio" checked id="design-errors" label="Design errors" />
            <Form.Check type="radio" id="cost-overruns" label="Cost overrruns" />
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default DropdownsContainer;

const dropdownsList = [
  {
    title: "Display subsystem?", 
    options: [
      "(All)",
      "Intake",
      "Exhaust",
      "Fuel",
      "Valve",
      "Transmission",
      "Differential",
      "Braking",
      "Software"
    ]
  },
  {
    title: "Select KPIs to display",
    options: [
      "(All)",
      "Iterations per design review",
      "% Rushed design",
      "Digital design",
      "SME Involvement"
    ]
  },
  {
    title: "Filter on business unit",
    options: [
      "(All)",
      "Commercial",
      "Government",
      "Bespoke"
    ]
  }
];