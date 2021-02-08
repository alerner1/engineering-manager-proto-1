import React, { useState } from 'react'
import { VictoryChart, VictoryStack, VictoryAxis, VictoryBar } from 'victory'
import { trendsData } from '../../trendsData'

const TrendsChart = ({ reasonFilter, divisionFilter }) => {


  const getData = (reason) => {

    // gets data for that reason/color in chart
    const reasonData = trendsData.filter(change => { return change.reason === reason })

    const dataByYear = { '2016': 0, '2017': 0, '2018': 0, '2019': 0, '2020': 0 }

    // for each data point, increment appropriate year in object
    for (let i = 0; i < reasonData.length; i++) {
      dataByYear[reasonData[i].year]++
    }

    const data = []

    for (const year in dataByYear) {
      data.push({ x: year, y: dataByYear[year] })
    }

    return data
  }

  // definitely a cleaner way to organize getData() and totalByYear()
  const totalByYear = (reason, year) => {
    if (reason === '(All)') {
      const dataByYear = { '2016': 0, '2017': 0, '2018': 0, '2019': 0, '2020': 0 }

      // for each data point, increment appropriate year in object
      for (let i = 0; i < trendsData.length; i++) {
        dataByYear[trendsData[i].year]++
      }

      return dataByYear[year]
    }
  }

  const getReasonColor = () => {
    switch(reasonFilter) {
      case 'no error':
        return ['#0DAB76']
      case 'unavoidable revision':
        return ['#EFEA5A']
      case 'avoidable revision':
        return ['#F58F29']
      case 'design error':
        return ['#DF2935']
      default:
        return ['#DF2935']
    }
  }

  return (
    // <div className="w-75 mx-auto">

    /* eventually, dropdown will determine which of these victorybars are displayed */

    reasonFilter === '(All)' ?
      <VictoryChart
        height={200} width={400} domainPadding={{ x: 30, y: 20 }} padding={40}
        maxDomain={{ y: 100 }}
      >
        <VictoryAxis
          style={{ tickLabels: { fontSize: 10 }, grid: {stroke: 'grey', strokeWidth: 0.5, strokeDasharray: "4, 8"} }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick}%`}
          style={{ tickLabels: { fontSize: 10 }, grid: {stroke: 'grey', strokeWidth: 0.5, strokeDasharray: "4, 8"} }}
        />
        <VictoryStack
          colorScale={['#0DAB76', '#EFEA5A', '#F58F29', '#DF2935']}
          style={{ labels: { fontSize: 10 } }}
        >
          <VictoryBar data={getData('no error')}>
          </VictoryBar>
          <VictoryBar data={getData('unavoidable revision')}>
          </VictoryBar>
          <VictoryBar data={getData('avoidable revision')}>
          </VictoryBar>
          <VictoryBar data={getData('design error')}
            // for now this total is a random number from 3000-5000
            // should really be the totals for the whole thing, once we have better seed data. in that case use modified data.push for getData() 
            // but make it so you only see it once by having other label formats be invisible
            labels={({ datum }) => (`${Math.floor(Math.random() * 2000 + 3001)}`)}
          >
          </VictoryBar>
        </VictoryStack>
        
      </VictoryChart>
      :
      <VictoryChart
        height={200} width={400} domainPadding={{ x: 30, y: 20 }} padding={40}
        maxDomain={{ y: 100 }}
      >
        <VictoryAxis
          style={{ tickLabels: { fontSize: 10 }, grid: {stroke: 'grey', strokeWidth: 0.5, strokeDasharray: "4, 8"} }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick}%`}
          style={{ tickLabels: { fontSize: 10 }, grid: {stroke: 'grey', strokeWidth: 0.5, strokeDasharray: "4, 8"} }}
        />
        <VictoryStack
          colorScale={getReasonColor()}
          style={{ labels: { fontSize: 10 } }}
        >
          <VictoryBar data={getData(reasonFilter)}
            // for now this total is a random number from 3000-5000
            // should really be the totals for the whole thing, once we have better seed data. in that case use modified data.push for getData() 
            // but make it so you only see it once by having other label formats be invisible
            labels={({ datum }) => (`${Math.floor(Math.random() * 2000 + 3001)}`)}
          >
          </VictoryBar>
        </VictoryStack>
        
      </VictoryChart>

    // </div>
  )
}

export default TrendsChart