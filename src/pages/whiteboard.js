import * as React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import background from '../../assets/background.jpg';



function WhiteBoard() {
  return (
    <ReactSketchCanvas
      className="border border-gray-300 rounded fixed top-0 w-full h-full"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    ></ReactSketchCanvas>
  );
}

export default WhiteBoard;

