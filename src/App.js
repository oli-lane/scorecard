import './App.css';
import React from "react";
import { Reset } from "styled-reset";

import Scoretable from "./Scoretable.js";

const App = () => {
  return (
    <>
      <div>
        <p align="center">
          Golf Scorecard
        </p>
      </div>
      <Reset />
      <Scoretable/>
    </>
  );
};

export default App;
