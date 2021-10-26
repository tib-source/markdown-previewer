import React from "react";

function CodeEditor(props) {
  return (
    <div>
      <div className="editor">
        <textarea name="editor" id="editor" cols="30" rows="10"></textarea>
      </div>
      <div className="rendered">
        <div id="preview"></div>
      </div>
    </div>
  );
}

export default CodeEditor;
