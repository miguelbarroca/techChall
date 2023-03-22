import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Phones from "./pages/Phones";
import PhoneDetails from "./pages/PhoneDetails";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Phones />}></Route>
      <Route path="/phones/details/:phoneId" element={<PhoneDetails />}></Route>
    </Routes>
  );
}

export default App;
