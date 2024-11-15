import React from "react";
const ConnectingButton = ({
  createRoomButton = false,
  buttonText,
  onClickHandler,
}) => {
  

  return (
    <button type="button" className='room_button' onClick={onClickHandler}>
      {buttonText}
    </button>
    
  
    );
};

export default ConnectingButton;
