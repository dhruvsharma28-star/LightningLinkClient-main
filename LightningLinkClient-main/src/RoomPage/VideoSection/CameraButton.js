import React, { useState } from "react";

import CameraButtonImgOff from "../../assets/icons/camera-off.svg";
import CameraButtonImg from "../../assets/icons/camera.svg";
import * as webRTCHandler from "../../utils/webRTCHandler";

const CameraButton = () => {
  const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);

  const handleCameraButtonPressed = () => {
    webRTCHandler.toggleCamera(isLocalVideoDisabled);

    setIsLocalVideoDisabled(!isLocalVideoDisabled);
  };

  return (
    <div className="video_button_container">
      <img
        src={isLocalVideoDisabled ? CameraButtonImgOff : CameraButtonImg}
        className="video_button_image"
        onClick={handleCameraButtonPressed}
        alt="Camera"
      />
    </div>
  );
};

export default CameraButton;
