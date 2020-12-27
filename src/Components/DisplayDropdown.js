import React from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const DisplayDropdown = ({ info }) => {
  const mapOptions = () => {
    return info.options.map(option => <option>{option}</option>);
  }

  return(
    <Col xs={2}>
      <Form.Label>{info.title}</Form.Label>
      <Form.Control size="sm" as="select">
        {mapOptions()}
      </Form.Control>
    </Col>
  );
};

export default DisplayDropdown;