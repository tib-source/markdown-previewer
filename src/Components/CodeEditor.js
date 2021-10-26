import React from "react";

function CodeEditor({ handleType }) {
  return (
    <div>
      <div className="editor">
        <textarea
          onChange={handleType}
          name="editor"
          id="editor"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="rendered">
        <div id="preview"></div>
      </div>
    </div>
  );
}

export default CodeEditor;
