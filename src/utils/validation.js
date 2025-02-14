export const validate = {
	name: (name) => {
		const regex = /^[A-Za-z]+$/;
		if (!regex.test(name)) return 'Only English letters are allowed';
		if (name.length < 2) return 'Name must have at least 2 characters';
		return null;
	},

	email: (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!regex.test(email)) return 'Invalid email format';
		return null;
	},

	password: (password) => {
		const regex = /^[A-Za-z0-9]+$/;
		if (!regex.test(password)) return '';
		if (password.length < 6) return 'Password must have at least 6 characters';
		return null;
	},

	matchPasswords: (password, confirmPassword) => {
		if (password.length >= 6 && confirmPassword && password !== confirmPassword) {
			return 'Passwords do not match';
		}
		return null;
	},
};
