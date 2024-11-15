import CheckImg from "../assets/images/check.png";

const OnlyWithAudioCheckbox = ({
  connectOnlyWithAudio,
  setConnectOnlyWithAudio,
}) => {
  const handleConnectionTypeChange = () => {
    setConnectOnlyWithAudio(!connectOnlyWithAudio);
  };

  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img className="checkbox_image" alt='check' src={CheckImg} ></img>
        )}
      </div>
      <p className="checkbox_container_paragraph">Only audio</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox;
