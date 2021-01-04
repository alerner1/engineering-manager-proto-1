import React from 'react';
import PartInfo from '../Components/PartInfo';
import DesignReviewProcess from '../Components/DesignReviewProcess';
import RiskAlerts from '../Components/RiskAlerts';
import PredictedRisk from '../Components/PredictedRisk';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Screen3Container = () => {
  return(
    <Container className="my-3">
      <Row>
        <Col>
          <PartInfo />
        </Col>
        <Col>
          <DesignReviewProcess />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <RiskAlerts />
        </Col>
        <Col>
          <PredictedRisk />
        </Col>
      </Row>
    </Container>
  );
};

export default Screen3Container;
