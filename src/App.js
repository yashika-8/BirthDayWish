import React, { useState } from "react";
import BirthdayForm from "./components/BirthdayForm";
import BirthdayCard from "./components/BirthdayCard";
import "./styles/App.css"; // Importing global styles

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <div className="App">
      <h1 style={{ display: "none" }}>Birthday Wishes Generator</h1>
      
      {/* Balloon animation */}
      <div className="balloons">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* Add more balloon divs if needed */}
      </div>
      
      {/* Confetti animation */}
      <div className="confetti"></div>
      
      {/* Stars animation */}
      <div className="stars">
        <div></div>
        <div></div>
        <div></div>
        {/* Add more star divs if needed */}
      </div>
      
      {/* Conditional rendering of the form and card */}
      {!formData ? (
        <BirthdayForm setFormData={setFormData} />
      ) : (
        <BirthdayCard formData={formData} />
      )}
    </div>
  );
}

export default App;
