import { getSocketId } from './socketId';

export const requestImage = async (publicId) => {
	const socketId = getSocketId();

	try {
		console.log('[client] 🚀 Sending image request to API', publicId, socketId);

		const res = await fetch(`https://${import.meta.env.VITE_SERVER}/img/${publicId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ socketId }),
		});

		const data = await res.json();
		console.log('[client] ✅ Request sent, waiting for WebSocket', data);

		return data;
	} catch (err) {
		console.error('[client] ❌ Failed to send image request:', err.message);
	}
};
