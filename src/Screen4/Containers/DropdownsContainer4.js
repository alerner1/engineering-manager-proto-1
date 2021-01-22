import React from 'react';
import DisplayDropdown4 from '../Components/DisplayDropdown4';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DropdownsContainer4 = () => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown) => <Col><DisplayDropdown4 info={dropdown}  /></Col>);
  };

  return(
    <Row>
      {mapDropdowns()}
    </Row>
  );
};

export default DropdownsContainer4;


const mapProductLines = () => {
  const productLines = ['(All)'];
  return productLines;
  
}
const dropdownsList = [
  {
    title: "Product Line",
    options: mapProductLines()
  },
  {
    title: "Severity",
    options: [
      '(All)',
      'high',
      'medium',
      'low'
    ]
  },
  {
    title: "Time Frame",
    options: [
      '(All)',
      'last week',
      'last month',
      'last year'
    ]
  }
];