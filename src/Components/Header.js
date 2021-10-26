import React from "react";

function Header(props) {
  return (
    <div>
      <div className="logo">Markdown Editor</div>
      <div className="button">
        <div className="check">
          <label htmlFor="live"></label>
          <input type="checkbox" id="live"></input>
        </div>
        <button id="compile">Compile</button>
      </div>
    </div>
  );
}

export default Header;
