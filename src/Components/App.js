import "../Style/App.css";
import Header from "./Header";
import CodeEditor from "./CodeEditor";
import { useState } from "react";
function App() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Header checked={setChecked} />
      <CodeEditor />
    </>
  );
}

export default App;
