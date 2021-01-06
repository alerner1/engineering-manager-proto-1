import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';

const TopTriangleIcon = () => {
  return(
    <Stage
      width={20}
      height={20}
      // padding={{top: 10, bottom: 10}}
    >
      <Layer>
        <Line 
          closed
          fill="#DF2935"
          points={[0, 0, 20, 0, 20, 20]}
        />
      </Layer>
    </Stage>
  );
};

export default TopTriangleIcon;