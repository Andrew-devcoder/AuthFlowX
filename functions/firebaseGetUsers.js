// import { admin, checkFirebaseConnection } from './firebaseAdmin';
// import { deleteUser } from './firebaseDelUser';

// async function listAllUsers() {
// 	try {
// 		await checkFirebaseConnection();

// 		let nextPageToken = undefined;
// 		do {
// 			const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);

// 			if (!listUsersResult.users || listUsersResult.users.length === 0) {
// 				console.log('❗ Немає користувачів у Firebase.');
// 				break;
// 			}

// 			listUsersResult.users.forEach((user) => {
// 				const creationTime = new Date(user.metadata.creationTime);
// 				console.log(creationTime.toDateString());

// 				if (creationTime.toDateString() === 'Sat Feb 08 2025') {
// 					deleteUser(user.uid);
// 				}
// 			});

// 			nextPageToken = listUsersResult.pageToken;
// 		} while (nextPageToken);
// 	} catch (error) {
// 		console.error('❌ Помилка отримання користувачів:', error);
// 	}
// }

// export { listAllUsers };

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
