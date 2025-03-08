import { useState } from "react";
import Home from "./components/Home";
import Beliefs from "./components/Beliefs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/inicio" element={<Home />} />
          <Route path="/creencias" element={<Beliefs />} />
          <Route path="/" element={<Navigate to="/inicio" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
