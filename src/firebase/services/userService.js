import { doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config';
import { store } from '../../redux/store';
import { resetForm } from '../../redux/slices/formSlice';

export const saveUserData = async (uid, user) => {
	try {
		await setDoc(doc(db, 'users', uid), {
			uid: uid,
			name: user.name,
			email: user.email,
		});
		console.log('User data saved successfully.');
		return true;
	} catch (error) {
		console.error('Error saving user data:', error);
		throw error;
	}
};

export const getUserData = async (uid) => {
	if (!uid) return;

	const userRef = doc(db, 'users', uid);
	const userDoc = await getDoc(userRef);
	return userDoc.data();
};

export const subscribeToUser = (uid, callback) => {
	if (!uid) return;

	const userRef = doc(db, 'users', uid);

	const unsubscribe = onSnapshot(userRef, (docSnapshot) => {
		if (docSnapshot.exists()) {
			callback(docSnapshot.data());
		} else {
			console.log('User document does not exist');
		}
	});

	return unsubscribe;
};

export const changeInformation = async (uid) => {
	if (!uid) return;

	const state = store.getState().form.formData;

	try {
		const userRef = doc(db, 'users', uid);
		await updateDoc(userRef, state);
		store.dispatch(resetForm());
	} catch (error) {
		console.error('Error updating user data:', error);
		throw error;
	}
};
