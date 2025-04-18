import { setConnected, setMessage } from '../redux/slices/websocketSlice';
import { connectWebSocket, sendWebSocketMessage } from './websocketService';

let socket = null; // зберігається поза функцією, щоб уникнути повторних підключень

export const websocketMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case 'websocket/connect':
			if (socket && socket.connected) {
				console.log('[WS] Already connected');
				break;
			}

			socket = connectWebSocket();

			socket.on('connect', () => {
				console.log('[WS] ✅ Connected to WebSocket server');
				store.dispatch(setConnected(true));
			});

			socket.on('disconnect', () => {
				console.warn('[WS] ❌ Disconnected from WebSocket server');
				store.dispatch(setConnected(false));
			});

			socket.on('push', (data) => {
				console.log('[WS] 🔔 push event:', data);
				store.dispatch(setMessage(data));
			});

			socket.on('image-ready', (data) => {
				console.log('[WS] 📦 image-ready received:', data);
				store.dispatch(setMessage(data));
			});

			break;

		case 'websocket/send':
			// action.payload = { event: 'ping', data: { ... } }
			if (socket && socket.connected) {
				sendWebSocketMessage(action.payload.event, action.payload.data);
			} else {
				console.warn('[WS] ❌ Cannot send message, socket not connected');
			}
			break;

		default:
			break;
	}

	return next(action);
};
