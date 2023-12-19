import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import TextArea from "./TextArea";

function App() {
  return (
    <div className="justify-start items-start inline-flex w-screen h-screen bg-lightMode-lighter dark:bg-darkMode-lighter">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-orange-600">
        <Topbar />
        <TextArea />
      </div>
    </div>
  );
}

export default App;
