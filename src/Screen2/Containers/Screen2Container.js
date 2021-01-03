import React from 'react';
import { useParams } from 'react-router';
import { dataScreen2 } from '../../dataScreen2';

const Screen2Container = () => {
  let { name } = useParams();

  const subData = dataScreen2.filter(row => {return row["Subdivision"] === name});

  return(
    <p>hi {subData[0]["subdivisionId"]}</p>
  );
}

export default Screen2Container;