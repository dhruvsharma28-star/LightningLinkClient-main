import jwt from 'jsonwebtoken';
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setConnectOnlyWithAudio,
  setIdentity,
  setRoomId,
} from "../store/actions";
import { getRoomExists } from "../utils/api";
import ErrorMessage from "./ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import JoinRoomInputs from "./JoinRoomInputs";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";

const JoinRoomContent = (props) => {
  const {
    isRoomHost,
    setConnectOnlyWithAudio,
    connectOnlyWithAudio,
    setIdentityAction,
    setRoomIdAction,
  } = props;


  const jwtToken = localStorage.getItem("jwt");
  let username = '';
  if (jwtToken) {
    const decodedToken = jwt.decode(jwtToken);
    if (decodedToken && decodedToken.user && decodedToken.user.username) {
      username = decodedToken.user.username.toString();
    }
  }

  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState(username);
  const [errorMessage, setErrorMessage] = useState(null);



  const history = useHistory();

  const handleJoinRoom = async () => {
    setIdentityAction(nameValue);
    if (isRoomHost) {
      createRoom();
    } else {
      await joinRoom();
    }
  };

  const joinRoom = async () => {
    const responseMessage = await getRoomExists(roomIdValue);

    const { roomExists, full } = responseMessage;

    if (roomExists) {
      if (full) {
        setErrorMessage("Meeting is full. Please try again later.");
      } else {
        // join a room !
        setRoomIdAction(roomIdValue);
        history.push("/room");
      }
    } else {
      setErrorMessage("Meeting not found. Check your meeting id.");
    }
  };

  const createRoom = () => {
    history.push("/room");
  };

  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckbox
        setConnectOnlyWithAudio={setConnectOnlyWithAudio}
        connectOnlyWithAudio={connectOnlyWithAudio}
      />
      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButtons
        handleJoinRoom={handleJoinRoom}
        isRoomHost={isRoomHost}
        
      />
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setConnectOnlyWithAudio: (onlyWithAudio) =>
      dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
    setIdentityAction: (identity) => dispatch(setIdentity(identity)),
    setRoomIdAction: (roomId) => dispatch(setRoomId(roomId)),
  };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(JoinRoomContent);
