import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TrendsLegend = () => {
  return(
    <Col className="font-xs" style={{color: 'midnightblue'}}>
      <Row noGutters>
        <Col xs={3}>
          <FontAwesomeIcon style={{color: '#DF2935'}} icon="circle" /> Design error 
        </Col>
        <Col xs={3}>
          <FontAwesomeIcon style={{color: '#F58F29'}} icon="circle" /> Avoidable revision
        </Col>
        <Col xs={3}>
          <FontAwesomeIcon style={{color: '#EFEA5A'}} icon="circle" /> Unavoidable revision
        </Col>
        <Col>
          <FontAwesomeIcon style={{color: '#0DAB76'}} icon="circle" /> No error
        </Col>
      </Row>
    </Col>
  )
}

export default TrendsLegend