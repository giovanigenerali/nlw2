import dotenv from "dotenv";
import React from "react";

import Routes from "./routes";

import "./assets/styles/global.css";

dotenv.config();

function App() {
  return <Routes />;
}

export default App;
