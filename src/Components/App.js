import "../Style/App.css";
import Header from "./Header";
import CodeEditor from "./CodeEditor";
import marked from "marked";
function App() {
  return (
    <div>
      <Header />
      <CodeEditor />
    </div>
  );
}

export default App;
