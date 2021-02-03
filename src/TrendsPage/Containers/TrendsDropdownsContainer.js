import React from 'react';
import TrendsDropdowns from '../Components/TrendsDropdowns'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TrendsDropdownsContainer = () => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown) => <Col><TrendsDropdowns info={dropdown}  /></Col>);
  };

  return(
    <Row>
      {mapDropdowns()}
      <Col xs={3}>
      </Col>
      <Col className="font-xs" style={{color: 'midnightblue'}}>
        <FontAwesomeIcon style={{color: '#DF2935'}} icon="circle" /> Design error
        <br />
        <FontAwesomeIcon style={{color: '#F58F29'}} icon="circle" /> Avoidable revision
        <br />
        <FontAwesomeIcon style={{color: '#EFEA5A'}} icon="circle" /> Unavoidable revision
        <br />
        <FontAwesomeIcon style={{color: '#0DAB76'}} icon="circle" /> No error
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