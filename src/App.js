import "./App.css";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [position, sertPosition] = useState({ top: 100, left: 100 });

  const handleMouseEnter = () => {
    const newTop = Math.random() * (window.innerHeight - 50);
    const newLeft = Math.random() * (window.innerHeight - 100);
    sertPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="App">
      <Main />
      <button
        className="btnn run"
        type="button"
        onMouseEnter={handleMouseEnter}
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          transition: "all 0.2s",
        }}
      >
        Злови мене!
      </button>
    </div>
  );
}
export default App;
