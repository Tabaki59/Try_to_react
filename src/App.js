import React from 'react';
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";


const MainStyle = {
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    flexFlow: "row nowrap",
    marginBottom: "1%",
    marginTop: "1%",
    height: "95vh"
}

function App() {
  return (
      <div style={MainStyle}>
        <LeftPanel />
        <RightPanel/>
      </div>
  );
}

export default App;
