import React from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import {v4 as uuidv4} from 'uuid';

const DisplayDropdown1 = ({ kpiFilter, unitFilter, handleFilter, info }) => {
  const mapOptions = () => {
    return info.options.map(option => <option key={uuidv4()}>{option}</option>);
  }

  return(
    <Col xs={3}>
      <Form.Group controlId={info.title}>
        <Form.Label>{info.title}</Form.Label>
        {/* this system only works well for two dropdowns
        if adding more use a switch function or something */}
        <Form.Control value={info.title === "Filter on business unit" ? unitFilter : kpiFilter } onChange={(event) => handleFilter(event.target.id, event.target.value)} size="sm" as="select">
          {mapOptions()}
        </Form.Control>
      </Form.Group>
    </Col>
  );
};

export default DisplayDropdown1;