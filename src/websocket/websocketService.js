// import { io } from 'socket.io-client';

// let socket = null;

// export const connectWebSocket = () => {
// 	if (socket) return socket;

// 	// socket = io('http://localhost:3000', {
// 	socket = io(`wss://${import.meta.env.VITE_SERVER}`, {
// 		path: '/socket.io',
// 		transports: ['websocket'],
// 	});

// 	return socket;
// };

// export const sendWebSocketMessage = (event, data) => {
// 	if (socket && socket.connected) {
// 		socket.emit(event, data);
// 	}
// };

// export const closeWebSocket = () => {
// 	if (socket) {
// 		socket.disconnect();
// 		socket = null;
// 	}
// };

// export const getWebSocket = () => socket;

let socket = null;

export const connectWebSocket = () => {
	if (socket) return socket;

	socket = new WebSocket(`wss://${import.meta.env.VITE_SERVER}/ws`);

	socket.onopen = () => {
		console.log('WebSocket connected');
	};

	socket.onerror = (error) => {
		console.error('WebSocket error:', error);
	};

	return socket;
};

export const sendWebSocketMessage = (event, data) => {
	if (socket && socket.readyState === WebSocket.OPEN) {
		socket.send(JSON.stringify({ event, data }));
	}
};

export const closeWebSocket = () => {
	if (socket) {
		socket.close();
		socket = null;
	}
};

export const getWebSocket = () => socket;
