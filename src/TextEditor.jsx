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
      background: "#F8FAFC",
    },
    tooltip: {
      text: "#ffffff",
      background: "#F76B15",
    },
    hovered: {
      text: "text-lightMode-text",
      background: "#F1F5F9",
    },
    selected: {
      text: "#ffffff",
      background: "#F76B15",
    },
    disabled: {
      text: "#E8E8E8",
      background: "#CECECE",
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
      text: "#EDEEF0",
      background: "bg-darkMode-lighter",
    },
    menu: {
      text: "#EDEEF0",
      background: "#18181A",
    },
    tooltip: {
      text: "#ffffff",
      background: "#F76B15",
    },
    hovered: {
      text: "#EDEEF0",
      background: "#27272A",
    },
    selected: {
      text: "#ffffff",
      background: "#F76B15",
    },
    disabled: {
      text: "#7B7B7B",
      background: "#484848",
    },
    shadow: "rgba(0, 0, 0, 0.2)",
    border: "#404040",
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
