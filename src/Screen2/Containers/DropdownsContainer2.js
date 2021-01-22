import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DisplayDropdown2 from '../Components/DisplayDropdown2';
import {v4 as uuidv4} from 'uuid';
import TopTriangleIcon from '../Components/TopTriangleIcon';
import BottomTriangleIcon from '../Components/BottomTriangleIcon';

const DropdownsContainer2 = ({ productFilter, handleFilter, percentageMetric, onPercentageMetricChange}) => {
  const mapDropdowns = () => {
    return dropdownsList.map((dropdown) => <DisplayDropdown2 productFilter={productFilter} handleFilter={handleFilter} key={uuidv4()} info={dropdown}  />);
  }

 

  return(
    <Row className="d-flex justify-content-between">
      {mapDropdowns()}
      <Col xs={7}>
      </Col>
      <Col>
        <Row>
          <Col>
            {/* <Form onChange={event => onPercentageMetricChange(event.target.value)}>
              <div key="default-radio" className="mb-3">
                <Form.Check type="radio" className="font-small" checked={percentageMetric === "% Design Errors"} id="design-errors" label="% Design errors" value="% Design Errors" />
                <Form.Check type="radio" className="font-small"  checked={percentageMetric === "% Schedule delays"} id="schedule-delays" label="% Schedule delays" value="% Schedule delays" />
                <Form.Check type="radio" className="font-small"  checked={percentageMetric === "% Cost overrun"} id="cost-overrun" label="% Cost overrrun" value="% Cost overrun" />
              </div>
            </Form> */}
          </Col>
        </Row>
        <Row noGutters className="mt-3 m-0">
          <Col xs={1}>
            <TopTriangleIcon />
          </Col>
          <Col className="font-small">
            &nbsp;&nbsp;&nbsp; Design errors
          </Col>
        </Row>
        <Row noGutters className="m-0">
        <Col xs={1}>
            <BottomTriangleIcon />
          </Col>
          <Col className="font-small">
            &nbsp;&nbsp;&nbsp; Schedule delays
          </Col>
        </Row>
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