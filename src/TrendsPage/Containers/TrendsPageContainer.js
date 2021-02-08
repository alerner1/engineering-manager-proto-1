import React, { useState } from 'react'
import TrendsDropdownsContainer from './TrendsDropdownsContainer'
import TrendsChartContainer from './TrendsChartContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TrendsPageContainer = () => {
  const [reasonFilter, setReasonFilter] = useState("(All)")
  const [divisionFilter, setDivisionFilter] = useState("(All)")

  const handleFilter = (targetId, value) => {
    if (targetId === "Reason for change") {
      setReasonFilter(value)
    } else {
      setDivisionFilter(value)
    }
  }

  return(
    <Row  style={{width: '75vw'}}>
      <Col xs={12}>
        <div className="pt-2 px-3 d-block mx-auto w-100">
          <TrendsDropdownsContainer divisionFilter={divisionFilter} reasonFilter={reasonFilter} handleFilter={handleFilter} />
        </div>
        <div className="pt-2 px-3 d-block mx-auto w-100">
          <TrendsChartContainer divisionFilter={divisionFilter} reasonFilter={reasonFilter} handleFilter={handleFilter} />
        </div>
      </Col>
    </Row>
  );
}

export default TrendsPageContainer