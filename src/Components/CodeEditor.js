import React, { useState } from "react";
import marked from "marked";

function CodeEditor(props) {
  const [markdown, setMarkdown] = useState("");
  const preview = document.querySelector("#preview");

  const handleCompile = (code) => {
    const rendered = marked(code);
    console.log(preview);
    setMarkdown(rendered);
  };

  const handleType = (e) => {
    const code = e.target.value;
    handleCompile(code);
  };

  return (
    <div className="container">
      <div className="editor">
        <textarea onInput={handleType} name="editor" id="editor"></textarea>
      </div>
      <div className="rendered">
        <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
      </div>
    </div>
  );
}

export default CodeEditor;
