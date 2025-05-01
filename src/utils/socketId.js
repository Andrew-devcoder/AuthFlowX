export const getSocketId = () => {
	const id = localStorage.getItem('socketId');

	console.log('[WS] Socket ID from localStorage:', id);

	if (!id) {
		const newId = crypto.randomUUID();
		console.log('[WS] Generated new socket ID:', newId);
		localStorage.setItem('socketId', newId);
		return newId;
	}

	return id;
};
