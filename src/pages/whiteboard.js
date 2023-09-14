import * as React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import background from '../../assets/background.jpg';



function WhiteBoard() {
  return (
    <ReactSketchCanvas
      style={{
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        backgroundColor: '#000',
      }}
    ></ReactSketchCanvas>
  );
}

export default WhiteBoard;

