import React from 'react';
import { useParams } from 'react-router';

const Screen2Container = () => {
  let { id } = useParams();

  return(<p>hi {id}</p>)
}

export default Screen2Container;