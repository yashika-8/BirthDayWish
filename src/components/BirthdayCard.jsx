import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import "./../styles/BirthdayCard.css";

function BirthdayCard({ formData }) {
  const { name, age, message } = formData;

  useEffect(() => {
    confetti({
      particleCount: 300,
      spread: 180,
      origin: { y: 0.6 },
      ticks: 500,
    });

    const interval = setInterval(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.2 },
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generateShareableLink = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/?name=${encodeURIComponent(name)}&age=${age}&message=${encodeURIComponent(message)}`;
  };

  const handleCopyLink = () => {
    const shareableUrl = generateShareableLink();
    navigator.clipboard.writeText(shareableUrl).then(() => {
      alert("Link copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy link: ", err);
    });
  };

  const animatedText = `Happy ${age}th Birthday, ${name}!`;

  return (
    <div className="birthday-card">
      <div className="animated-text">
        {animatedText.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
      <p className="message-text">{message}</p>
      <button className="copy-link-button" onClick={handleCopyLink}>
        Copy Shareable Link
      </button>
    </div>
  );
}

export default BirthdayCard;
