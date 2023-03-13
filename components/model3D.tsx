import React from "react";
import { StlViewer } from "react-stl-viewer";

const style = {
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
};
function Model() {
  return (
    <div>
      <StlViewer
        style={style}
        url="elephant/elephant.stl"
        width={500}
        height={500}
        orbitControls={true}
      />
    </div>
  );
}

export default Model;
