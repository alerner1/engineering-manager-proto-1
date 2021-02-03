import React from 'react'
import TrendsDropdownsContainer from './TrendsDropdownsContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TrendsPageContainer = () => {
  return(
    <Row  style={{width: '75vw'}}>
      <Col xs={12}>
        <div className="pt-2 px-3 d-block mx-auto w-100">
          <TrendsDropdownsContainer />
        </div>
        <div className="pt-2 px-3 d-block mx-auto w-100">
        </div>
      </Col>
    </Row>
  );
}

export default TrendsPageContainer