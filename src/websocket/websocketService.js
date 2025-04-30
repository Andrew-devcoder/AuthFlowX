let socket = null;

const generateClientId = () => {
	let clientId = localStorage.getItem('clientId');
	if (!clientId) {
		clientId = crypto.randomUUID();
		localStorage.setItem('clientId', clientId);
	}
	return clientId;
};

export const connectWebSocket = () => {
	if (socket) return socket;

	const url = `wss://${import.meta.env.VITE_SERVER}/ws`;
	console.log('[WS] connecting to:', url);

	socket = new WebSocket(url);

	socket.onopen = () => {
		console.log('[WS] ✅ Connected to WebSocket server');

		const clientId = generateClientId();
		socket.send(JSON.stringify({ type: 'register', clientId }));
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

export const getClientId = () => localStorage.getItem('clientId');
