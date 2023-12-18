import { useState } from "react";
// import './App.css'
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import TextArea from "./TextArea";

function App() {
  return (
    <div className="justify-start items-start inline-flex w-screen h-screen">
      <Sidebar />
      <div className="w-full h-screen bg-orange-600 overflow-hidden">
        <Topbar />
        <TextArea />
      </div>
    </div>
  );
}

export default App;
