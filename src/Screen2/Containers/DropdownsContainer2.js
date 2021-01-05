import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DisplayDropdown2 from '../Components/DisplayDropdown2';
import {v4 as uuidv4} from 'uuid';

const DropdownsContainer2 = ({ productFilter, handleFilter, percentageMetric, onPercentageMetricChange}) => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown) => <DisplayDropdown2 productFilter={productFilter} handleFilter={handleFilter} key={uuidv4()} info={dropdown}  />);
  }

 

  return(
    <Row>
      {mapDropdowns()}
      <Col xs={6}>
      </Col>
      <Col>
        <Form onChange={event => onPercentageMetricChange(event.target.value)}>
          <div key="default-radio" className="mb-3">
            <Form.Check type="radio" checked={percentageMetric === "% Schedule delays"} id="schedule-delays" label="% Schedule delays" value="% Schedule delays" />
            <Form.Check type="radio" checked={percentageMetric === "% Design Errors"} id="design-errors" label="% Design errors" value="% Design Errors" />
            <Form.Check type="radio" checked={percentageMetric === "% Cost overrun"} id="cost-overrun" label="% Cost overrrun" value="% Cost overrun" />
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default DropdownsContainer2;

const dropdownsList = [
  {
    title: "Select Product?",
    options: [
      "(All)",
      "Product 1",
      "Product 2",
      "Product 3",
      "Product 4",
      "Product 5"
    ]
  },
];