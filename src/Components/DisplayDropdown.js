import React from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import {v4 as uuidv4} from 'uuid';

const DisplayDropdown = ({ info }) => {
  const mapOptions = () => {
    return info.options.map(option => <option key={uuidv4()}>{option}</option>);
  }

  return(
    <Col xs={3}>
      <Form.Label>{info.title}</Form.Label>
      <Form.Control size="sm" as="select">
        {mapOptions()}
      </Form.Control>
    </Col>
  );
};

export default DisplayDropdown;