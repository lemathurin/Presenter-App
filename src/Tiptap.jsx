// // src/Tiptap.jsx
// import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";

// // define your extension array
// const extensions = [StarterKit];

// const content = "<p>Hello World!</p>";

// const Tiptap = () => {
//   return (
//     <div className="">
//       {/* tiptapeditor bg-lime-400 */}
//       <EditorProvider extensions={extensions} content={content}>
//         <FloatingMenu>This is the floating menu</FloatingMenu>
//         <BubbleMenu>This is the bubble menu</BubbleMenu>
//       </EditorProvider>
//     </div>
//   );
// };

// export default Tiptap;

// src/Tiptap.jsx
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Text,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
        HTMLAttributes: {
          // h1: { className: "text-4xl font-bold" }, // This doesn't work right now
          // h2: { class: "text-3xl font-semibold" },
          // h3: { class: "text-2xl font-medium" },
        },
      }),
    ],
    content: `
    <h1>This is a 1st level heading</h1>
    <h2>This is a 2nd level heading</h2>
    <h3>This is a 3rd level heading</h3>
    <h4>This is a 4th level heading</h4>
    <h5>This is a 5th level heading</h5>
    <h6>This is a 6th level heading</h6>
    <p>This is a paragraph</p>
  `,
    editorProps: {
      attributes: {
        class: "pt-10 px-10 focus:outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </>
  );
};

export default Tiptap;
