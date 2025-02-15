import { admin } from './firebaseAdmin.js';

const getAllUsers = async () => {
	let usersList = [];
	let nextPageToken = undefined;

	try {
		do {
			const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);
			console.log(`📢 Отримано користувачів: ${listUsersResult.users.length}`);

			usersList = [...usersList, ...listUsersResult.users];
			nextPageToken = listUsersResult.pageToken;
		} while (nextPageToken);
	} catch (error) {
		console.error('❌ Помилка отримання користувачів:', error);
		return [];
	}
	console.log(`✅ Всього отримано користувачів: ${usersList.length}`);
	return usersList;
};

export { getAllUsers };
