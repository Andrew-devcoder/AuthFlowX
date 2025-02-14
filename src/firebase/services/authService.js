import {
	createUserWithEmailAndPassword,
	getAuth,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from '../config';

export const signInUser = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		return { email: userCredential.user.email, uid: userCredential.user.uid };
	} catch (error) {
		throw new Error(error.message);
	}
};

export const signOutUser = async () => {
	try {
		await signOut(auth);
	} catch (error) {
		throw new Error(error.message);
	}
};

export const registrationUser = async (email, password) => {
	const auth = getAuth();
	const newUser = await createUserWithEmailAndPassword(auth, email, password);
	return newUser.user.uid;
};

export const resetPassword = async (email) => {
	const auth = getAuth();
	try {
		await sendPasswordResetEmail(auth, email);
		console.log('Password reset email sent!');
	} catch (error) {
		console.error('Error:', error.message);
	}
};
