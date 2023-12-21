import React from "react";
import TextEditor from "./TextEditor";
import Tiptap from "./Tiptap.jsx";

function TextArea() {
  return (
    <div className="flex flex-1 flex-col bg-lightMode-lighter dark:bg-darkMode-lighter">
      {/* px-10 pt-10 pl-10*/}
      {/* <TextEditor className="flex flex-1 w-full" /> */}
      <Tiptap />
    </div>
  );
}

export default TextArea;
