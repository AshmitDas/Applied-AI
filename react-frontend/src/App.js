import "./App.css"
import Navbar from "./components/Navbar";
import * as react from "react";
import { MODELS } from "./Models";

function App() {
  const [view, setView] = react.useState(MODELS.textSummarizer.view);

  return (
    <div>
      <Navbar setView={setView}/>
      {view}
    </div>
  );
}

export default App;
