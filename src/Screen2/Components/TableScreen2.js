import React, { useEffect, useState, useRef } from 'react';
import Konva from 'konva';
import { Stage, Layer, Line } from 'react-konva';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';
import Triangles from './Triangles';
import EllipsePoint from '../../Screen3/Components/EllipsePoint';

const TableScreen2 = ({ productFilter, data, percentageMetric }) => {
    
  // ok this is dumb you know all the products and departments just set them manually
  // if you have to do it programmatically later you can do that with the help of a solid backend

  const checkIfDisplayed = (product) => {
    if (productFilter !== '(All)') {
      if (productFilter === product) {
        return "toggle-display in";
      } else {
        return "toggle-display";
      }
    }
  }

  const mapRow = (product) => {
    const thisProduct = data.filter(row => {return row["Product"] === product});
    thisProduct.sort((a, b) => (a["Department"] > b["Department"]) ? 1 : -1)
    return thisProduct.map(row => <td className={checkIfDisplayed(product)}><Triangles row={row} /></td>)
  }

  return(
    <Table>
      <thead>
        <th>
          
        </th>
        <th style={{width: '17%'}}>
          Body design
        </th>
        <th style={{width: '17%'}}>
          Electronic systems
        </th>
        <th style={{width: '17%'}}>
          Interior design
        </th>
        <th style={{width: '17%'}}>
          Production engineering
        </th>
        <th style={{width: '17%'}}>
          Vehicle performance development
        </th>
      </thead>
      <tbody>
        <tr>
          <th className={checkIfDisplayed("Product 1")}>
            Product 1
          </th>
          {mapRow("Product 1")}
        </tr>
        <tr>
          <th className={checkIfDisplayed("Product 2")}>
            Product 2
          </th>
          {mapRow("Product 2")}
        </tr>
        <tr>
          <th className={checkIfDisplayed("Product 3")}>
            Product 3
          </th>
          {mapRow("Product 3")}
        </tr>
        <tr>
          <th className={checkIfDisplayed("Product 4")}>
            Product 4
          </th>
          {mapRow("Product 4")}
        </tr>
        <tr>
          <th className={checkIfDisplayed("Product 5")}>
            Product 5
          </th>
          {mapRow("Product 5")}
        </tr>
      </tbody>
    </Table>
  );
}

export default TableScreen2;