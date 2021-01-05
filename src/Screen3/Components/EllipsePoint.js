import { Stage, Layer, Ellipse } from 'react-konva';

const EllipsePoint = ({x, y, datum}) => {
  return(
    <g
    transform={`translate(${x}, ${y})`}
    >
      
    <Stage x={x} y={y} width={7} height={7} >
      <Layer>
        <Ellipse radius={{ x: 2, y: 5 }} fill='red' />
      </Layer>
    </Stage>
    </g>
  );
};

export default EllipsePoint;