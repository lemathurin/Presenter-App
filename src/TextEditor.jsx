import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

function TextEditor() {
  // Creates a new editor instance.
  const editor = useBlockNote();

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView editor={editor} className="w-full h-full" theme="light" />
  );
}

export default TextEditor;
