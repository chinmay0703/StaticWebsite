import React, { useState } from 'react';
import watt from "../assets/img/45.png";
import "../App.css";
function ChatBot() {
  const recipientNumber = '+917507316272'; 
  const [isClicked, setIsClicked] = useState(false);

  const openWhatsApp = () => {
    setIsClicked(true);
    const message = 'Hello, Raghu Sir, I have a question'; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${encodedMessage}`;

    const isConfirmed = window.confirm("Are you sure you want to open WhatsApp app?");
    if (isConfirmed) {
     
      window.open(whatsappURL, '_blank');
    } else {
  
      setIsClicked(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className={`chat-icon ${isClicked ? 'clicked' : ''}`} onClick={openWhatsApp}>
        <img src={watt} alt="WhatsApp Logo" className="whatsapp-logo" />
      </div>
    </div>
  );
}

export default ChatBot;
