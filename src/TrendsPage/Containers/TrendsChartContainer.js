import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TrendsChart from '../Components/TrendsChart'
import TrendsLegend from '../Components/TrendsLegend'

const TrendsChartContainer = () => {
  return(
    <Card className="mx-auto" style={{width: '38rem'}}>
      <Card.Body>
        <Card.Title>
          Design Revisions Over Time
        </Card.Title>
        <Row>
          <TrendsLegend />
        </Row>
        <Row>
          <Col>
            <TrendsChart />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default TrendsChartContainer