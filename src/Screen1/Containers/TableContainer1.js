import React from 'react';
import TableScreen1 from '../Components/TableScreen1';

const TableContainer1 = ({kpiFilter, unitFilter, data, percentageMetric}) => {
  return(
    <TableScreen1 data={data} kpiFilter={kpiFilter} unitFilter={unitFilter} percentageMetric={percentageMetric} />
  );
}

export default TableContainer1;