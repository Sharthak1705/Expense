import React from "react";
import SidebarBox from "./components/Sideleft";
import Navbar from "./components/Navbar";
import Dashboard from './components/Dashboard'
import Logo from './components/logo'
import Chart from './components/Chart'
function App() {
  return (
    <div className="flex bg-gray-400 ">
      <SidebarBox /> 
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="ml-7 bg-gray-400">
        <Dashboard />
        <Logo/>
        </div>
        <Chart />
      </div>
    </div>
  );
}

export default App;
