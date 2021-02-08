import React from 'react';
import TrendsDropdowns from '../Components/TrendsDropdowns'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {v4 as uuidv4} from 'uuid'

const TrendsDropdownsContainer = ({ reasonFilter, divisionFilter, handleFilter }) => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown) => <Col><TrendsDropdowns reasonFilter={reasonFilter} divisionFilter={divisionFilter} handleFilter={handleFilter} info={dropdown} key={uuidv4()} /></Col>);
  };

  return(
    <Row>
      {mapDropdowns()}
      <Col xs={3}>
      </Col>
      
    </Row>
  );
};

export default TrendsDropdownsContainer;


const mapDivisions = () => {
  const divisions = [
    "(All)",
    "Car Powertrain Technology",
    "Car Chassis Technology",
    "Commercial Vehicle Technology",
    "Industrial Technology",
    "E-Mobility",
    "Aftermarket",
    "Electronics & ADAS",
    "Passive Safety Systems",
    "Active Safety Systems",
    "Commercial Vehicle Control Systems"
  ];
  return divisions;
  
}
const dropdownsList = [
  // this dropdown won't do anything yet until we have a backend/more robust seed data
  {
    title: "Division",
    options: mapDivisions()
  },
  {
    title: "Reason for change",
    options: [
      '(All)',
      'no error',
      'unavoidable revision',
      'avoidable revision',
      'design error'
    ]
  }
];