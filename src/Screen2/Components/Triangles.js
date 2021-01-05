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
      return '#DF2935';
    } else if (value > 33) {
      return '#EFEA5A';
    } else {
      return '#0DAB76';
    }
  };

  const getStrokeColor = () => {
    const topColor = getColor(row["% Schedule delays"]);
    const bottomColor = getColor(row["% Design Errors"]);

    if (topColor === '#DF2935' && bottomColor === '#DF2935' || topColor === '#DF2935' && bottomColor === '#EFEA5A' || topColor === '#EFEA5A' && bottomColor === '#DF2935') {
      return '#A01821';
    } else {
      return 'lightgray';
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