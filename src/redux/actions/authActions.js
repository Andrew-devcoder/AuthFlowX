import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { signInUser, signOutUser } from '../../firebase/services/authService';
import { clearUser, setUser } from '../slices/userSlice';
import { store } from '../store';

export const loginUser = async (email, password) => {
	console.log(email, password);
	try {
		const userData = await signInUser(email, password);
		store.dispatch(setUser(userData));
		console.log('Вхід успішний:', userData);
	} catch (error) {
		console.error('Помилка входу:', error.message);
		throw error;
	}
};

export const outUser = async () => {
	try {
		signOutUser();
		store.dispatch(clearUser());
	} catch (error) {
		console.error(error);
	}
};
