import { getSocketId } from '../utils/socketId';

let socket = null;
let socketId = null;

export const connectWebSocket = () => {
	if (socket) return socket;

	const url = `wss://${import.meta.env.VITE_SERVER}/ws`;
	console.log('[WS] connecting to:', url);

	socket = new WebSocket(url);

	socket.onopen = () => {
		console.log('[WS] ✅ Connected to WebSocket server');

		socketId = getSocketId();
		socket.send(JSON.stringify({ type: 'register', socketId }));
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
		socket = null;
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
