import DropdownsContainer from './Containers/DropdownsContainer';
import TableContainer from './Containers/TableContainer';
import { data } from './data';
import React, {useState} from 'react';

const App = () => {
  
  const [percentageMetric, setPercentageMetric] = useState("% Design Errors");

  const onPercentageMetricChange = (choice) => {
    setPercentageMetric(choice)
  };

  return (
    <>
      <div className="p-3">
        <DropdownsContainer percentageMetric={percentageMetric} onPercentageMetricChange={onPercentageMetricChange} />
      </div>
      <div className="p-3">
        <TableContainer data={data} percentageMetric={percentageMetric} />
      </div>
    </>
  );
}

export default App;
