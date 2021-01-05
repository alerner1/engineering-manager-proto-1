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

  const triangleWidth = width/2
  const rectWidth = width

  return(
    <Stage ref={elementRef} width={rectWidth} height={40}>
      <Layer>
        <Line closed points={[5, 2, triangleWidth + 2, 2, triangleWidth + 2, 38]} fill={getColor(row["% Schedule delays"])} stroke={getStrokeColor()} strokeWidth={2} />
        <Line closed points={[2, 2, 2, 38, triangleWidth - 2, 38]} fill={getColor(row["% Design Errors"])} stroke={getStrokeColor()} strokeWidth={2} />
      </Layer>
    </Stage>
  );
}

export default Triangles;