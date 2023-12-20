import React from "react";
import TextEditor from "./TextEditor";

function TextArea() {
  return (
    <div className="flex flex-1 flex-col pl-10 bg-lightMode-lighter dark:bg-darkMode-lighter">
      {/* px-10 pt-10 */}
      <TextEditor className="flex flex-1 w-full" />
    </div>
  );
}

export default TextArea;
