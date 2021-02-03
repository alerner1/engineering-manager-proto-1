import React from 'react';
import Form from 'react-bootstrap/Form';
import {v4 as uuidv4} from 'uuid';

const TrendsDropdowns = ({ info }) => {
  const mapOptions = () => {
    return info.options.map(option => <option key={uuidv4()}>{option}</option>);
  }

  return(
    <Form.Group controlId={info.title}>
      <Form.Label>{info.title}</Form.Label>
      {/* this system only works well for two dropdowns
      if adding more use a switch function or something */}
      <Form.Control size="sm" as="select">
        {mapOptions()}
      </Form.Control>
    </Form.Group>
  );
};

export default TrendsDropdowns;