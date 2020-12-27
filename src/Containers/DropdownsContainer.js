import React from 'react';
import Row from 'react-bootstrap/Row';
import DisplayDropdown from '../Components/DisplayDropdown';

const DropdownsContainer = () => {
  const mapDropdowns = () => {
    return sampleDropdowns.map((dropdown, index) => <DisplayDropdown info={dropdown} key={index} />);
  }

  return(
    <Row>
      {mapDropdowns()}
    </Row>
  );
};

export default DropdownsContainer;

const sampleDropdowns = [
  {
    title: 'Choose Metric:',
    options: ['1', '2']
  },
  {
    title: 'Display Subsystem?',
    options: ['1', '2']
  },
  {
    title: 'Display Warning Signal',
    options: ['1', '2']
  },
  {
    title: 'Filter on business unit',
    options: ['1', '2']
  }
];