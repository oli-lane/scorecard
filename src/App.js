import './App.css';
import React from "react";
import { Reset } from "styled-reset";

import Scoretable from "./Scoretable.js";

const App = () => {
  return (
    <>
      <Reset />
      <Scoretable/>
    </>
  );
};

export default App;
