import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

const PredictedRiskRectangle = ({color}) => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setWidth(elementRef.current.attrs.container.offsetWidth);

  }, [elementRef.current]);

  const getColor = () => {
    if (color === 4) {
      return '#DF2935';
    } else if (color === 3) {
      return '#F58F29';
    } else if (color === 2) {
      return '#EFEA5A';
    } else {
      return '#0DAB76';
    }
  };


  const rectWidth = width/2;

  return(
    <Stage ref={elementRef} width={rectWidth} height={40}>
      <Layer>
        <Rect 
          x={0}
          y={10}
          width={rectWidth/2}
          height={20}
          fill={getColor()}
        />
      </Layer>
    </Stage>
  );
}

export default PredictedRiskRectangle;