import React from "react";
import TextEditor from "./TextEditor";

function TextArea() {
  return (
    <div className="flex flex-1 px-10 flex-col bg-slate-50 dark:bg-zinc-800">
      {/* h-full w-full px-10 flex-col justify-start items-center inline-flex bg-slate-50 dark:bg-zinc-800 */}
      <TextEditor className="h-full w-full overflow-hidden" />
    </div>
  );
}

export default TextArea;
