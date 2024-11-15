import axios from "axios";

const serverApi = process.env.REACT_APP_SERVER;

export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/api/room-exists/${roomId}`);
  return response.data;
};

export const getTURNCredentials = async () => {
  const response = await axios.get(`${serverApi}/api/get-turn-credentials`);
  return response.data;
};
