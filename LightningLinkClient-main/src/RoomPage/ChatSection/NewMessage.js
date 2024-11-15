import { useState } from "react";
import SendMessageButton from "../../assets/icons/send-message.svg";
import * as webRTCHandler from "../../utils/webRTCHandler";

const NewMessage = () => {
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      // send message to other users
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message.length > 0) {
      webRTCHandler.sendMessageUsingDataChannel(message);
      setMessage("");
    }
  };

  return (
    <div className="new_message_container">
      <input
        className="new_message_input"
        value={message}
        onChange={handleTextChange}
        placeholder="Type your message ..."
        type="text"
        onKeyDown={handleKeyPressed}
      />
      <img
        className="new_message_button"
        src={SendMessageButton}
        onClick={sendMessage}
        alt="new msg"
      />
    </div>
  );
};

export default NewMessage;
