import { VictoryChart, VictoryAxis, VictoryBar, VictoryStack } from 'victory';

const RiskBar = ({dataPoint}) => {
  const formattedData = [{ x: 0, y: dataPoint }];

    let color = "#0DAB76";
    if (dataPoint > 33 && dataPoint < 67) {
      color = "#EFEA5A";
    } else if (dataPoint > 67) {
      color = "#DF2935";
    }

  return(
    <VictoryChart maxDomain={{ y: 100 }} horizontal height={10} width={100} padding={{ top: 5, bottom: 5 }}>
      <VictoryStack
        style={{ labels: { fill: "midnightblue", fontSize: 4 } }}
      >
        <VictoryBar
          style={{ data: { fill: color, width: 4 } }}
          data={formattedData}
        />
        <VictoryBar
          style={{ data: { fill: "whitesmoke", width: 4 } }}
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
  );
};

export default RiskBar;