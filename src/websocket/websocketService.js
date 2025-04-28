import { io } from 'socket.io-client';

let socket = null;

export const connectWebSocket = () => {
	if (socket) return socket;

	// socket = io('http://localhost:3000', {
	socket = io(`https://${import.meta.env.VITE_SERVER}`, {
		path: '/wss',
		transports: ['websocket'],
	});

	return socket;
};

export const sendWebSocketMessage = (event, data) => {
	if (socket && socket.connected) {
		socket.emit(event, data);
	}
};

export const closeWebSocket = () => {
	if (socket) {
		socket.disconnect();
		socket = null;
	}
};

export const getWebSocket = () => socket;
