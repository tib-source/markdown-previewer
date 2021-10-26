import "../Style/App.css";
import Header from "./Header";
import CodeEditor from "./CodeEditor";
import marked from "marked";
import { useState } from "react";
function App() {
  const [editor, setEditor] = useState("");
  const [markdown, setMarkdown] = useState("");
  const preview = document.querySelector("#preview");

  const handleCompile = () => {
    const rendered = marked(editor);
    preview.innerHTML = rendered;
    setMarkdown(rendered);
  };

  const handleType = (e) => {
    setEditor(e.target.value);
  };
  return (
    <div>
      <Header handleCompile={handleCompile} />
      <CodeEditor handleType={handleType} />
    </div>
  );
}

export default App;
