import React from "react";

const JoinRoomTitle = ({ isRoomHost }) => {
  const titleText = isRoomHost ? "HOST MEETING" : "JOINT MEETING";

  return <p className="join_room_title">{titleText}</p>;
};

export default JoinRoomTitle;
