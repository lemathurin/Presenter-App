import React from "react";
import TextEditor from "./TextEditor";

function TextArea() {
  return (
    <div className="flex flex-1 px-10 flex-col bg-slate-50 dark:bg-zinc-800">
      <TextEditor className="flex flex-1 w-full overflow-hidden" />
    </div>
  );
}

export default TextArea;
