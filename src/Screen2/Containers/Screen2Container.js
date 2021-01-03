import React, { useState } from 'react';
import { useParams } from 'react-router';
import { dataScreen2 } from '../../dataScreen2';
import DropdownsContainer2 from './DropdownsContainer2';
import TableContainer2 from './TableContainer2';

const Screen2Container = () => {
  const [percentageMetric, setPercentageMetric] = useState("% Design Errors");
  const [productFilter, setProductFilter] = useState("(All)");

  let { name } = useParams();

  const subData = dataScreen2.filter(row => {return row["Subdivision"] === name});


  const onPercentageMetricChange = (choice) => {
    setPercentageMetric(choice)
  };

  const handleFilter = (value) => {
    setProductFilter(value);
  };

  return(
    <>
      <div className="p-3">
        <DropdownsContainer2 productFilter={productFilter} handleFilter={handleFilter} percentageMetric={percentageMetric} onPercentageMetricChange={onPercentageMetricChange}/>
      </div>
      <div className="p-3">
        <TableContainer2 productFilter={productFilter} data={subData} percentageMetric={percentageMetric} />
      </div>
    </>
  );
}

export default Screen2Container;