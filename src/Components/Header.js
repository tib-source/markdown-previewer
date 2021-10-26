import React from "react";

function Header({ handleCompile }) {
  return (
    <div>
      <div className="logo">Markdown Editor</div>
      <div className="button">
        <div className="check">
          <label htmlFor="live"></label>
          <input type="checkbox" id="live"></input>
        </div>
        <button id="compile" onClick={handleCompile}>
          Compile
        </button>
      </div>
    </div>
  );
}

export default Header;
