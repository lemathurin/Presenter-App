import React from "react";
import TextEditor from "./TextEditor";

function TextArea() {
  return (
    <div className="flex flex-1 px-10 pt-10 flex-col bg-lightMode-lighter dark:bg-darkMode-lighter">
      <TextEditor className="flex flex-1 w-full" />
    </div>
  );
}

export default TextArea;
