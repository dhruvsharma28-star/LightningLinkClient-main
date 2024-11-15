import { useState } from "react";
import { connect } from "react-redux";
import sendMessageButton from "../../../assets/icons/send-message.svg";
import * as wss from "../../../utils/wss";

const NewMessage = ({ activeConversation, identity }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    wss.sendDirectMessage({
      receiverSocketId: activeConversation.socketId,
      identity: identity,
      messageContent: message,
    });

    setMessage("");
  };

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="new_message_container new_message_direct_border">
      <input
        className="new_message_input"
        value={message}
        onChange={handleTextChange}
        placeholder="Type your message.."
        type="text"
        onKeyDown={handleKeyPressed}
      />
      <img
        className="new_message_button"
        src={sendMessageButton}
        onClick={sendMessage}
        alt="send message"
      />
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(NewMessage);
