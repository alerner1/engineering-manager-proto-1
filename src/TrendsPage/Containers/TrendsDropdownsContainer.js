import React from 'react';
import TrendsDropdowns from '../Components/TrendsDropdowns'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TrendsDropdownsContainer = () => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown) => <Col><TrendsDropdowns info={dropdown}  /></Col>);
  };

  return(
    <Row>
      {mapDropdowns()}
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