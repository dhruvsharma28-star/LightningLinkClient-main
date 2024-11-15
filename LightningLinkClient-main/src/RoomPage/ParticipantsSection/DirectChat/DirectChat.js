import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ConversationNotChosen from "./ConversationNotChosen";
import DirectChatHeader from "./DirectChatHeader";
import MessagesContainer from "./MessagesContainer";
import NewMessage from "./NewMessage";

const getDirectChatHistory = (directChatHistory, socketId = null) => {
  console.log(directChatHistory);
  console.log(socketId);
  if (!socketId || !directChatHistory) {
    return [];
  }

  const history = directChatHistory.find((h) => h.socketId === socketId);

  return history ? history.chatHistory : [];
};

const DirectChat = ({ activeConversation, directChatHistory }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(
      getDirectChatHistory(
        directChatHistory,
        activeConversation ? activeConversation.socketId : null
      )
    );
  }, [activeConversation, directChatHistory]);

  return (
    <div className="direct_chat_container">
      {console.log(activeConversation)}
      <DirectChatHeader activeConversation={activeConversation} />
      {activeConversation==null && <ConversationNotChosen />}
      <MessagesContainer messages={messages} />
     {activeConversation!=null && <NewMessage />}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(DirectChat);
