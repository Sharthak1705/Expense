import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarBox from "./components/Sideleft";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Logo from "./components/Logo";
import Chart from "./components/Chart";
import Expense from "./components/addexpense";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="flex bg-gray-400">
        <SidebarBox />
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="p-4 bg-gray-400 ml-7">
            <Routes>
              <Route path="/" element={<Chart />} />
              <Route path="/expenses" element={<Expense />} />
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
          <Logo />
        </div>
       
      </div>
    </Router>
  );
}

export default App;
