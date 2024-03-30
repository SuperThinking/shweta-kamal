import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import NavigationHeader from "./components/NavigationHeader";
import { TABS } from "./config";

function App() {
  const [tab, setTab] = useState<TABS>(TABS.HOME);

  return (
    <div className="rootContainer">
      <NavigationHeader tab={tab} setTab={setTab} />
      <Home />
    </div>
  );
}

export default App;
