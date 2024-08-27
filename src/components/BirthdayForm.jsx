import React, { useState } from 'react';
import "./../styles/BirthdayForm.css";

function BirthdayForm({ setFormData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name, age, message });
  };

  return (
    <div className="birthday-form">
      <h1 className="form-title">Create Your Birthday Wish</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <label htmlFor="age">Age:</label>
        <input 
          type="number" 
          id="age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          required 
        />
        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <button type="submit" className="submit-button">Generate Card</button>
      </form>
    </div>
  );
}

export default BirthdayForm;
