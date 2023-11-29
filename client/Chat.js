import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000'); // Replace with your server's URL

function Chat() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    socket.on('aiMessage', (newMessage) => {
      setChatHistory([...chatHistory, newMessage]);
    });
  }, [chatHistory]);

  const sendMessage = () => {
    socket.emit('userMessage', message);
    setMessage('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        {chatHistory.map((msg, index) => <div key={index}>{msg}</div>)}
      </div>
    </div>
  );
}

export default Chat;