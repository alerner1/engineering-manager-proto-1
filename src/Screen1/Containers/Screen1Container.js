import React, { useState } from 'react';
import DropdownsContainer1 from './DropdownsContainer1';
import TableContainer1 from './TableContainer1';
import { dataScreen1 } from '../../dataScreen1';

const Screen1Container = () => {
  
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
        <DropdownsContainer1 kpiFilter={kpiFilter} unitFilter={unitFilter} handleFilter={handleFilter} percentageMetric={percentageMetric} onPercentageMetricChange={onPercentageMetricChange} />
      </div>
      <div className="p-3">
        <TableContainer1 kpiFilter={kpiFilter} unitFilter={unitFilter} data={dataScreen1} percentageMetric={percentageMetric} />
      </div>
    </>
  );
}

export default Screen1Container;