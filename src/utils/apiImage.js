// export const requestImage = async (publicId, socket) => {
// 	if (!socket || !socket.connected) {
// 		console.warn('[client] ❌ No active WebSocket connection');
// 		return;
// 	}

// 	try {
// 		console.log('[client] 🚀 Sending image request to API with socketId:', socket.id);

// 		// const res = await fetch(`http://localhost:3000/img/${publicId}`, {

// 		const res = await fetch(`https://${import.meta.env.VITE_SERVER}/img/${publicId}`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				socketId: socket.id,
// 			}),
// 		});

// 		const data = await res.json();
// 		console.log('[client] ✅ Request sent, waiting for WebSocket', data);

// 		return data;
// 	} catch (err) {
// 		console.error('[client] ❌ Failed to send image request:', err.message);
// 	}
// };

export const requestImage = async (publicId, socket) => {
	if (!socket || socket.readyState !== WebSocket.OPEN) {
		console.warn('[client] ❌ No active WebSocket connection');
		return;
	}

	try {
		console.log('[client] 🚀 Sending image request to API');

		const res = await fetch(`https://${import.meta.env.VITE_SERVER}/img/${publicId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			// якщо потрібно socketId — ти маєш додати його самостійно
			body: JSON.stringify({
				// socketId: 'your-generated-id' // або видалити повністю
			}),
		});

		const data = await res.json();
		console.log('[client] ✅ Request sent, waiting for WebSocket', data);

		return data;
	} catch (err) {
		console.error('[client] ❌ Failed to send image request:', err.message);
	}
};
