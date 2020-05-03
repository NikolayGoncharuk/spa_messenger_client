import socketIOClient from 'socket.io-client';

export const customUseSocket = (collection, action) => {
  const socket = socketIOClient(process.env.REACT_APP_API_URL);
  socket.on(collection, data => action());
};