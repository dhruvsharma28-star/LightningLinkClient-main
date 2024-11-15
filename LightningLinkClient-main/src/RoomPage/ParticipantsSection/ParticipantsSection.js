import React from "react";
import DirectChat from './DirectChat/DirectChat';
import Participants from "./Participants";
import ParticipantsLabel from "./ParticipantsLabel";

const ParticipantsSection = () => {
  return (
    <div className="participants_section_container">
      <ParticipantsLabel />
      <Participants />
      <DirectChat />
    </div>
  );
};

export default ParticipantsSection;
