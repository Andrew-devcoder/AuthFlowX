import { schedule } from '@netlify/functions';
import { getAllUsers } from './firebaseGetUsers.js';
import { deleteUser } from './firebaseDelUser.js';

const processUsers = async () => {
	const users = await getAllUsers();
	console.log(`📢 Отримано користувачів: ${users.length}`);

	if (!users.length) {
		console.log('❗ Немає користувачів для перевірки.');
		return;
	}

	users.forEach((user) => {
		if (user.email === 'example@www.com') return;

		deleteUser(user.uid);
	});
};

export const handler = schedule('0 0 * * *', processUsers);
// export const handler = schedule('* * * * Mon', processUsers);

// TODO: add logging files
