// src/Tiptap.jsx
import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// define your extension array
const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

const Tiptap = () => {
  return (
    <div className="tiptapeditor bg-lime-400">
      {/* h-screen flex flex-col bg-green-200 */}
      <EditorProvider extensions={extensions} content={content}>
        <FloatingMenu>This is the floating menu</FloatingMenu>
        <BubbleMenu>This is the bubble menu</BubbleMenu>
      </EditorProvider>
    </div>
  );
};

export default Tiptap;
