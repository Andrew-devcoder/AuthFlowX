export const requestImage = async (publicId, socket) => {
	if (!socket || !socket.connected) {
		console.warn('[client] ❌ No active WebSocket connection');
		return;
	}

	try {
		console.log('[client] 🚀 Sending image request to API with socketId:', socket.id);

		await fetch(`http://localhost:3000/img/${publicId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				socketId: socket.id,
			}),
		});

		console.log('[client] ✅ Request sent, waiting for WebSocket');
	} catch (err) {
		console.error('[client] ❌ Failed to send image request:', err.message);
	}
};
