import React from 'react';
import TableScreen2 from '../Components/TableScreen2';

const TableContainer2 = ({productFilter, data, percentageMetric}) => {
  return(
    <TableScreen2 data={data} productFilter={productFilter} percentageMetric={percentageMetric} />
  );
}

export default TableContainer2;