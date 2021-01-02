import DropdownsContainer from './Containers/DropdownsContainer';
import TableContainer from './Containers/TableContainer';
import { data } from './data';
import React, {useState, useEffect} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlusCircle, faMinusCircle)

const App = () => {
  
  const [percentageMetric, setPercentageMetric] = useState("% Design Errors");
  const [unitFilter, setUnitFilter] = useState("(All)");
  const [kpiFilter, setKpiFilter] = useState("(All)")

  const onPercentageMetricChange = (choice) => {
    setPercentageMetric(choice)
  };

  const handleFilter = (targetId, value) => {
    if (targetId === "Filter on business unit") {
      setUnitFilter(value);
    } else {
      setKpiFilter(value);
    }
  }

  return (
    <>
      <div className="p-3">
        <DropdownsContainer kpiFilter={kpiFilter} unitFilter={unitFilter} handleFilter={handleFilter} percentageMetric={percentageMetric} onPercentageMetricChange={onPercentageMetricChange} />
      </div>
      <div className="p-3">
        <TableContainer kpiFilter={kpiFilter} unitFilter={unitFilter} data={data} percentageMetric={percentageMetric} />
      </div>
    </>
  );
}

export default App;
