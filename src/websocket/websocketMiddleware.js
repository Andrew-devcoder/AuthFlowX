// import { setConnected, setMessage } from '../redux/slices/websocketSlice';
// import { connectWebSocket, sendWebSocketMessage } from './websocketService';

// let socket = null; // зберігається поза функцією, щоб уникнути повторних підключень

// export const websocketMiddleware = (store) => (next) => (action) => {
// 	switch (action.type) {
// 		case 'websocket/connect':
// 			if (socket && socket.connected) {
// 				console.log('[WS] Already connected');
// 				break;
// 			}

// 			socket = connectWebSocket();

// 			socket.on('connect', () => {
// 				console.log('[WS] ✅ Connected to WebSocket server');
// 				store.dispatch(setConnected(true));
// 			});

// 			socket.on('disconnect', () => {
// 				console.warn('[WS] ❌ Disconnected from WebSocket server');
// 				store.dispatch(setConnected(false));
// 			});

// 			socket.on('push', (data) => {
// 				console.log('[WS] 🔔 push event:', data);
// 				store.dispatch(setMessage(data));
// 			});

// 			socket.on('image-ready', (data) => {
// 				console.log('[WS] 📦 image-ready received:', data);
// 				store.dispatch(setMessage(data));
// 			});

// 			break;

// 		case 'websocket/send':
// 			// action.payload = { event: 'ping', data: { ... } }
// 			if (socket && socket.connected) {
// 				sendWebSocketMessage(action.payload.event, action.payload.data);
// 			} else {
// 				console.warn('[WS] ❌ Cannot send message, socket not connected');
// 			}
// 			break;

// 		default:
// 			break;
// 	}

// 	return next(action);
// };

import { connectWebSocket, sendWebSocketMessage, getWebSocket } from './websocketService';

let socket = null;

export const websocketMiddleware = () => (next) => (action) => {
	switch (action.type) {
		case 'websocket/connect': {
			socket = getWebSocket();

			if (socket && socket.readyState === WebSocket.OPEN) {
				console.log('[WS] 🔄 Already connected');
				break;
			}

			socket = connectWebSocket();

			socket.onopen = () => {
				console.log('[WS] ✅ Connected to WebSocket server');
			};

			socket.onclose = () => {
				console.warn('[WS] ❌ Disconnected from WebSocket server');
			};

			socket.onmessage = (event) => {
				try {
					const data = JSON.parse(event.data);
					console.log('[WS] 📩 Message received:', data);
				} catch (e) {
					console.error('[WS] ❌ Failed to parse message:', event.data);
				}
			};

			socket.onerror = (err) => {
				console.error('[WS] ❌ WebSocket error:', err);
			};

			break;
		}

		case 'websocket/send': {
			socket = getWebSocket();
			if (socket && socket.readyState === WebSocket.OPEN) {
				sendWebSocketMessage(action.payload);
			} else {
				console.warn('[WS] ❌ Cannot send, socket not connected');
			}
			break;
		}

		default:
			break;
	}

	return next(action);
};
