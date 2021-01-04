import React, { useEffect, useState, useRef } from 'react';
import { VictoryChart, VictoryLegend, VictoryAxis, VictoryBar, VictoryStack, VictoryLabel } from 'victory';

const DesignReviewChart = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setWidth(elementRef.current.offsetWidth)
    console.log(elementRef.current.offsetWidth)
  }, [elementRef.current]);

  return(
    <div ref={elementRef}>

    <VictoryChart 
      
      horizontal 
      maxDomain={{ x: 3.5, y: 130 }} 
      minDomain={{ x: 1.5, y: 0 }}
      height={width/3}
      width={width}
      >
      <VictoryStack>
        <VictoryBar />
      </VictoryStack>
      <VictoryStack>

      </VictoryStack>
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