import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TrendsChart from '../Components/TrendsChart'
import TrendsLegend from '../Components/TrendsLegend'

const TrendsChartContainer = ({ reasonFilter, divisionFilter }) => {
  return(
    <Card className="mx-auto" style={{width: '38rem'}}>
      <Card.Body>
        <Card.Title>
          Design Revisions Over Time
        </Card.Title>
        <Card.Text className="mb-0 font-sm" style={{color: 'midnightblue'}}>
          Yearly, last 5 years
        </Card.Text>
        <Row>
          <Col>
            <TrendsChart reasonFilter={reasonFilter} divisionFilter={divisionFilter} />
          </Col>
        </Row>
        <Row>
          <TrendsLegend />
        </Row>
      </Card.Body>
    </Card>
  )
}

export default TrendsChartContainer