import { VictoryChart, VictoryAxis, VictoryBar, VictoryStack, VictoryLabel } from 'victory';
import React, { useRef, useState, useEffect} from 'react';

const PercentageMetricBar = ({ dataPoint }) => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setWidth(elementRef.current.offsetWidth)
  }, [elementRef.current]);

  const formattedData = [{ x: 0, y: dataPoint }];

  let color = "#0DAB76";
  if (dataPoint > 33 && dataPoint < 67) {
    color = "#EFEA5A";
  } else if (dataPoint > 67) {
    color = "#DF2935";
  }

  return (
    <div ref={elementRef}>
      <VictoryChart 
        maxDomain={{ x: 2, y: 100 }} 
        horizontal 
        height={width/20} 
        width={width} 
        padding={{top: width/40, bottom: width/40, left: 0, right: 0}}
      >
        <VictoryStack
          style={{ labels: { fill: "midnightblue", fontSize: '.8rem' } }}
        >
          <VictoryBar
            style={{ data: { fill: color, width: width/40 } }}
            data={formattedData}
            labels={() => (`${dataPoint}%`)}
            labelComponent={
              <VictoryLabel x={(dataPoint/100 * width)} dx={dataPoint * .05} textAnchor="middle" verticalAnchor="middle" />
            }
          />
          <VictoryBar
            style={{ data: { fill: "whitesmoke", width: width/40 } }}
            data={[{ x: 0, y: 100 - dataPoint }]}
          />
        </VictoryStack>
        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fill: "transparent" }
          }}
          tickValues={[0]}
          tickCount={1}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "transparent" },
            tick: { stroke: "transparent" },
            tickLabels: { fill: "transparent" }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default PercentageMetricBar;