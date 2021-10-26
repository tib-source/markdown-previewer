import React from "react";

function Header({ checked }) {
  const handleCheck = (e) => {
    const value = e.target.checked;
    e.target.checked = !value;
    checked(!value);
  };
  return (
    <header className="header">
      <div className="logo">Markdown Editor</div>
      <div className="button">
        <div className="check">
          <input onClick={handleCheck} type="checkbox" id="live"></input>
          <label htmlFor="live">Live Preview</label>
        </div>
        <button id="compile">Compile</button>
      </div>
    </header>
  );
}

export default Header;
