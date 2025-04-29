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

	const url = `wss://${import.meta.env.VITE_SERVER}/ws`;
	console.log('[WS] connecting to:', url);

	socket = new WebSocket(url);

	socket.onopen = () => {
		console.log('[WS] ✅ Connected to WebSocket server');
	};

	socket.onmessage = (event) => {
		try {
			const data = JSON.parse(event.data);
			console.log('[WS] 📩 Message received:', data);
		} catch (e) {
			console.error('[WS] ❌ Failed to parse message:', event.data);
		}
	};

	socket.onerror = (error) => {
		console.error('[WS] ❌ WebSocket error:', error);
	};

	socket.onclose = () => {
		console.log('[WS] ❌ WebSocket closed');
	};

	return socket;
};

export const sendWebSocketMessage = (data) => {
	if (socket && socket.readyState === WebSocket.OPEN) {
		socket.send(JSON.stringify(data));
	}
};

export const closeWebSocket = () => {
	if (socket) {
		socket.close();
		socket = null;
	}
};

export const getWebSocket = () => socket;
