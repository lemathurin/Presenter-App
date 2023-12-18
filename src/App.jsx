import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import TextArea from "./TextArea";

function App() {
  return (
    <div className="justify-start items-start inline-flex w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-orange-600">
        {/* w-full h-screen bg-orange-600 overflow-scroll */}
        <Topbar />
        <TextArea />
      </div>
    </div>
  );
}

export default App;
