import React, { useState, useEffect } from "react";
import BirthdayForm from "./components/BirthdayForm";
import BirthdayCard from "./components/BirthdayCard";
import "./styles/App.css"; // Importing global styles

function App() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const age = params.get('age');
    const message = params.get('message');

    if (name && age && message) {
      setFormData({ name, age, message });
    }
  }, []);

  return (
    <div className="App">
      <h1 style={{ display: "none" }}>Birthday Wishes Generator</h1>
      <div className="balloons">
        <div></div>
        <div></div>
        <div></div>
        {/* Add more balloon divs if needed */}
      </div>
      <div className="confetti"></div>
      <div className="stars">
        <div></div>
        <div></div>
        <div></div>
        {/* Add more star divs if needed */}
      </div>
      {!formData ? (
        <BirthdayForm setFormData={setFormData} />
      ) : (
        <BirthdayCard formData={formData} />
      )}
    </div>
  );
}

export default App;
