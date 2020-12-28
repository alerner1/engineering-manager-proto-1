import React from 'react';
import TableScreen1 from '../Components/TableScreen1';

const TableContainer = ({data, percentageMetric}) => {
  return(
    <TableScreen1 data={data} percentageMetric={percentageMetric} />
  );
}

export default TableContainer;