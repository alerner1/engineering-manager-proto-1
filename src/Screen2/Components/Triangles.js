import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Line } from 'react-konva';

const Triangles = ({row}) => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setWidth(elementRef.current.attrs.container.offsetWidth);

  }, [elementRef.current]);

  const getColor = (value) => {
    if (value > 67) {
      return 'red';
    } else if (value > 33) {
      return '#E0BA3E';
    } else {
      return 'green';
    }
  };

  const getStrokeColor = () => {
    const topColor = getColor(row["% Schedule delays"]);
    const bottomColor = getColor(row["% Design Errors"]);

    if (topColor === 'red' && bottomColor === 'red' || topColor === 'red' && bottomColor === '#E0BA3E' || topColor === '#E0BA3E' && bottomColor === 'red') {
      return 'darkred';
    } else {
      return 'black';
    }
  };

  const triangleWidth = window.innerWidth/10

  return(
    <Stage ref={elementRef} width={width} height={40}>
      <Layer>
        <Line closed points={[(width - triangleWidth)/2 + 2, 0, (width - triangleWidth)/2 + triangleWidth, 0, (width - triangleWidth)/2 + triangleWidth, 40]} fill={getColor(row["% Schedule delays"])} stroke={getStrokeColor()} strokeWidth={2} />
        <Line closed points={[(width - triangleWidth)/2, 0, (width - triangleWidth)/2, 40, (width - triangleWidth)/2 + triangleWidth, 40]} fill={getColor(row["% Design Errors"])} stroke={getStrokeColor()} strokeWidth={2} />
      </Layer>
    </Stage>
  );
}

export default Triangles;