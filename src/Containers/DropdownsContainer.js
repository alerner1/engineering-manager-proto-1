import React from 'react';
import Row from 'react-bootstrap/Row';
import DisplayDropdown from '../Components/DisplayDropdown';
import {v4 as uuidv4} from 'uuid';

const DropdownsContainer = () => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown) => <DisplayDropdown key={uuidv4()} info={dropdown}  />);
  }

  return(
    <Row>
      {mapDropdowns()}
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