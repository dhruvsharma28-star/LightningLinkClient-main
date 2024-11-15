import React from "react";
import { useHistory } from "react-router-dom";
import ConnectingButton from "./ConnectingButton";

const ConnectingButtons = () => {
  let history = useHistory();

  const pushToJoinRoomPage = () => {
    history.push("/join-room");
  };

  const pushToJoinRoomPageAsHost = () => {
    history.push("/join-room?host=true");
  };

  return (
    <>
    <div className="connecting_buttons_container" >
      <ConnectingButton
        createRoomButton
        buttonText="Host a meeting"
        onClickHandler={pushToJoinRoomPageAsHost}
        />
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
        />
    </div>
    
        </>
  );
};

export default ConnectingButtons;
