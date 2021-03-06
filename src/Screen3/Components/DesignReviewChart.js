import React, { useEffect, useState, useRef } from 'react';
import { VictoryChart, VictoryScatter, VictoryLine, VictoryAxis, VictoryBar, VictoryStack, VictoryLabel } from 'victory';

const DesignReviewChart = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setWidth(elementRef.current.offsetWidth)
  }, [elementRef.current]);

  return(
    <div ref={elementRef}>

    <VictoryChart 
      horizontal 
      maxDomain={{ x: 4.5, y: 150 }} 
      minDomain={{ x: 1.5, y: 0 }}
      height={width/5}
      width={width}
      padding={{top: 1, bottom: 40, left: 55, right: 20}}
      >
      <VictoryStack>
        <VictoryBar 
        data={[{ x: 3, y: 58 }]}
        style={{
          data: {fill: 'deepskyblue', width: width/30}
        }}
        />
        <VictoryBar 
        data={[{ x: 3, y: 20}]}
        style={{
          data: {fill: 'transparent', width: width/30}
        }}
        />
        <VictoryBar 
        data={[{ x: 3, y: 18}]}
        style={{
          data: {fill: 'deepskyblue', width: width/30}
        }}
        />
        <VictoryBar 
        data={[{ x: 3, y: 6}]}
        style={{
          data: {fill: 'transparent', width: width/30}
        }}
        />
        <VictoryBar 
        data={[{ x: 3, y: 2}]}
        style={{
          data: {fill: 'deepskyblue', width: width/30}
        }}
        />
        <VictoryBar 
        data={[{ x: 3, y: 6}]}
        style={{
          data: {fill: 'transparent', width: width/30}
        }}
        />
        <VictoryBar 
        data={[{ x: 3, y: 2}]}
        style={{
          data: {fill: 'deepskyblue', width: width/30}
        }}
        />
        <VictoryBar 
        data={[{ x: 3, y: 8}]}
        style={{
          data: {fill: 'transparent', width: width/30}
        }}
        />
      </VictoryStack>
      <VictoryScatter 
        data={[{ x: 2, y: 60 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 65 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 70 }]}
        style={{ data: { fill: "#EFEA5A", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 75 }]}
        style={{ data: { fill: "#DF2935", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 96 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 98 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 100 }]}
        style={{ data: { fill: "#EFEA5A", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 101 }]}
        style={{ data: { fill: "#DF2935", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 106 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 107 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 108 }]}
        style={{ data: { fill: "#EFEA5A", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 109 }]}
        style={{ data: { fill: "#DF2935", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 114 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 115 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 116 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryScatter 
        data={[{ x: 2, y: 117 }]}
        style={{ data: { fill: "#0DAB76", stroke: "lightgray", strokeWidth: 1 } }}
        size={width/70}
      />
      <VictoryLine 
        data={[
          {x: 1.5, y: 120},
          {x: 3.5, y: 120}
        ]}
        style={{labels: {fontSize: 10}}}
        labels={({datum}) => {if (datum.x === 3.5) return "System release deadline"}}
        labelComponent={
          <VictoryLabel textAnchor="middle" dy={-10} />
        }
      />
      <VictoryAxis 
        dependentAxis 
        tickValues={[1, 60, 120]} 
        tickFormat={(tick) => {
          if (tick === 1) {
            return 'January 1';
          } else if (tick === 60) {
            return 'March 1';
          } else if (tick === 120) {
            return 'May 1'
          }
        }}
      />
      <VictoryAxis
        
        style={{
          axis: {stroke: 'transparent'}
        }}
        tickValues={[2, 3]} 
        tickFormat={(tick) => {
          if (tick === 2) {
            return 'Review';
          } else if (tick === 3) {
            return 'Design';
          }
        }}
        />
    </VictoryChart>
    </div>
  );
};

export default DesignReviewChart;