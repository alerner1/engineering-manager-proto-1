import React from 'react'
import Card from 'react-bootstrap/Card'
import TrendsChart from '../Components/TrendsChart'

const TrendsChartContainer = () => {
  return(
    <Card className="mx-auto" style={{width: '38rem'}}>
      <Card.Body>

      <TrendsChart />
      </Card.Body>
    </Card>
  )
}

export default TrendsChartContainer