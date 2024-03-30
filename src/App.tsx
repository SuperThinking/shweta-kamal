import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import NavigationHeader from "./components/NavigationHeader";
import { TABS } from "./config";

function App() {
  const [tab, setTab] = useState<TABS>(TABS.HOME);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavigationHeader tab={tab} setTab={setTab} />
      <Home />
    </div>
  );
}

export default App;
