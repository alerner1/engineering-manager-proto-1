import React, { useEffect, useState, useRef } from 'react';
import Konva from 'konva';
import { Stage, Layer, Line } from 'react-konva';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';
import Triangles from './Triangles';

const TableScreen2 = ({ productFilter, data, percentageMetric }) => {
    
  // ok this is dumb you know all the products and departments just set them manually
  // if you have to do it programmatically later you can do that with the help of a solid backend

  const mapRow = (product) => {
    // so what information do we want here?
    // for each cell, we want to see where the data matches both product and department
    // right?
    // i think?
    // each cell has two triangles, one for the department and one for the product
    // i thought the colors were, like, where they intersect
    // but maybe not
    // maybe it's info overall for department compared to info overall for product?
    // like how the department as a whole is doing compared to how product as a whole is doing
    // anyway it doesn't matter he said it could be random colors right
    // but how to generate them...
    // wait it says on top, schedule delays and design errors
    // so it's not a toggle for all three?
    // ok w/e we can leave the toggle there and just not have it do anything for now
    // so yes it is the intersection of them and then we just need the triangles based on schedule delays and design errors
    // ok cool we're gonna use canvas for the triangles
    // console.log(elementRef.current.attrs.container.offsetWidth)
    const thisProduct = data.filter(row => {return row["Product"] === product});
    thisProduct.sort((a, b) => (a["Department"] > b["Department"]) ? 1 : -1)
    return thisProduct.map(row => <td className=""><Triangles row={row} /></td>)
  }

  return(
    <Table>
      <thead>
        <th>
          
        </th>
        <th>
          Body design
        </th>
        <th>
          Electronic systems
        </th>
        <th>
          Interior design
        </th>
        <th>
          Production engineering
        </th>
        <th>
          Vehicle performance development
        </th>
      </thead>
      <tbody>
        <tr>
          <th>
            Product 1
          </th>
          {mapRow("Product 1")}
        </tr>
        <tr>
          <th>
            Product 2
          </th>
          {mapRow("Product 2")}
        </tr>
        <tr>
          <th>
            Product 3
          </th>
          {mapRow("Product 3")}
        </tr>
        <tr>
          <th>
            Product 4
          </th>
          {mapRow("Product 4")}
        </tr>
        <tr>
          <th>
            Product 5
          </th>
          {mapRow("Product 5")}
        </tr>
      </tbody>
    </Table>
  );
}

export default TableScreen2;