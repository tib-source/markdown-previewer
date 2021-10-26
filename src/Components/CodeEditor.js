import React, { useState, useEffect } from "react";
import marked from "marked";
import INITIAL from "./Constants/initialMarkdown";

marked.setOptions({
  breaks: true,
});
function CodeEditor(props) {
  const [markdown, setMarkdown] = useState(marked(INITIAL));
  const preview = document.querySelector("#preview");
  useEffect(() => {
    document.querySelector("#editor").value = INITIAL;
  }, []);
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
        <code
          id="preview"
          dangerouslySetInnerHTML={{ __html: markdown }}
        ></code>
      </div>
    </div>
  );
}

export default CodeEditor;
