import React, { useState } from 'react';
import './App.css';

function App() {

  const [theme, setTheme] = useState("Harshith");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };


  const themeStyles = {
    Harshith: {
      backgroundColor: "#FFD700",
      text: "Welcome to the Harshith Theme!",
    },
    Goutham: {
      backgroundColor: "#87CEEB",
      text: "This is the Goutham Theme.",
    },
  };

  return (
    <div className="App">
      <h1>Theme Change</h1>

      <div style={{ marginBottom: "20px" }}>
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>Theme: </span>
        <button onClick={() => handleThemeChange("Harshith")}>Harshith</button>
        <button onClick={() => handleThemeChange("Goutham")}>Goutham</button>
      </div>

    
      <div
        style={{
          padding: "20px",
          color: "#333",
          backgroundColor: themeStyles[theme].backgroundColor,
          borderRadius: "10px",
        }}
      >
        <p style={{ fontSize: "18px" }}>{themeStyles[theme].text}</p>
      </div>
    </div>
  );
}

export default App;
