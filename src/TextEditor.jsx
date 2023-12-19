// import { BlockNoteView, useBlockNote } from "@blocknote/react";
// import "@blocknote/core/style.css";

// function TextEditor() {
//   // Creates a new editor instance.
//   const editor = useBlockNote();

//   // Renders the editor instance using a React component.
//   return (
//     <BlockNoteView editor={editor} className="w-full h-full" theme="light" />
//   );
// }

// export default TextEditor;

import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  darkDefaultTheme,
  lightDefaultTheme,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";

// Custom red light theme
const lightTheme = {
  colors: {
    editor: {
      text: "text-lightMode-text",
      background: "bg-lightMode-lighter",
    },
    menu: {
      text: "text-lightMode-text",
      background: "bg-lightMode-darker",
    },
    tooltip: {
      text: "#ffffff",
      background: "#F76B15",
    },
    hovered: {
      text: "text-lightMode-text",
      background: "bg-lightMode-lighter",
    },
    selected: {
      text: "#ffffff",
      background: "#F76B15",
    },
    disabled: {
      text: "#9b0000",
      background: "#7d0000",
    },
    shadow: "rgba(0, 0, 0, 0.2)",
    border: "border-lightMode-border",
    sideMenu: "#bababa",
    highlightColors: lightDefaultTheme.colors.highlightColors,
  },
  borderRadius: 0,
  fontFamily: "Inter, sans-serif",
};

// Custom red dark theme
const darkTheme = {
  colors: {
    editor: {
      text: "text-darkMode-text",
      background: "bg-darkMode-lighter",
    },
    menu: {
      text: "text-darkMode-text",
      background: "bg-darkMode-darker",
    },
    tooltip: {
      text: "#ffffff",
      background: "#F76B15",
    },
    hovered: {
      text: "text-darkMode-text",
      background: "bg-darkMode-lighter",
    },
    selected: {
      text: "#ffffff",
      background: "#F76B15",
    },
    disabled: {
      text: "#9b0000",
      background: "#7d0000",
    },
    shadow: "rgba(0, 0, 0, 0.2)",
    border: "border-darkMode-border",
    sideMenu: "#bababa",
    highlightColors: darkDefaultTheme.colors.highlightColors,
  },
  borderRadius: 0,
  fontFamily: "Inter, sans-serif",
};

// Combining the custom themes into a single theme object.
const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default function App() {
  const editor = useBlockNote();

  return (
    <BlockNoteView
      editor={editor}
      // Adding the custom themes. The editor will use the browser settings to
      // determine if the light or dark theme is used.
      theme={theme}
    />
  );
}
