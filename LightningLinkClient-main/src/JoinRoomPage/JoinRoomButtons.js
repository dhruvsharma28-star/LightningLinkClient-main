import React from "react";
import { useHistory } from "react-router-dom";

const Button = ({ buttonText, cancelButton = false, onClickHandler }) => {
  

  return (
    <button onClick={onClickHandler} className="room_button" >
      {buttonText}
    </button>
  );
};

const JoinRoomButtons = ({ handleJoinRoom, isRoomHost }) => {
  const successButtonText = isRoomHost ? "Host" : "Join";

  const history = useHistory();

  const pushToIntroductionPage = () => {
    history.push("/");
  };

  return (
    <div className="join_room_buttons_container">
      <Button buttonText={successButtonText} onClickHandler={handleJoinRoom} />
      <Button
        buttonText="Cancel"
        cancelButton
        onClickHandler={pushToIntroductionPage}
      />
    </div>
  );
};

export default JoinRoomButtons;
