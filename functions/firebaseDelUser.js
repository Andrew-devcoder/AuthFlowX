import { admin, firestoreDB } from './firebaseAdmin.js';

const deleteUserDocument = async (uid) => {
	try {
		await firestoreDB.collection('users').doc(uid).delete();
		console.log(`✅ Документ користувача ${uid} видалено з Firestore`);
	} catch (error) {
		console.error(`❌ Помилка видалення документа користувача ${uid}:`, error);
	}
};

const deleteUser = async (uid) => {
	try {
		await admin.auth().deleteUser(uid);
		await deleteUserDocument(uid);
		console.log(`✅ Користувач ${uid} видалений успішно`);
	} catch (error) {
		console.error(`❌ Помилка видалення користувача ${uid}:`, error);
	}
};

export { deleteUser };
