import React from 'react';
import Row from 'react-bootstrap/Row';
import DisplayDropdown from '../Components/DisplayDropdown';

const DropdownsContainer = () => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown, index) => <DisplayDropdown info={dropdown} key={index} />);
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