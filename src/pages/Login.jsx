import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/authActions";
import { resetPassword } from "../firebase/services/authService";
import { Form } from "../components/Form/Form";

export default function Login() {
	const formData = useSelector((state) => state.form.formData);

	const [error, setError] = useState('');
	const navigate = useNavigate();

	const isAuth = useSelector((state) => !!state.user.uid);

	if (isAuth) {
		return <Navigate to="/" replace />;
	}

	const handleSubmit = async () => {
		try {
			await loginUser(formData.email, formData.password);
		} catch (err) {
			setError(err.message);
		}
	};

	const createNewAccount = (e) => {
		e.preventDefault()
		navigate('/reg');
	}

	const handleResetPassword = (e) => {
		e.preventDefault()
		navigate('/reset-password');
	}

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 transition-opacity ease-in-out delay-150 duration-500">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<Form
						fields={[
							{ label: "Email address", name: "email", maxLength: 30, required: true },
							{
								label: "Password", name: "password", type: "password", maxLength: 30, required: true,
								extra: (
									<div className="text-sm text-right">
										<a
											href="#"
											className="font-semibold text-indigo-600 hover:text-indigo-500"
											onClick={handleResetPassword}
										>
											Forgot password?
										</a>
									</div>
								),
							},
						]}
						onSubmit={handleSubmit}
						submitText='Sign in'
					/>

					<p className="mt-10 text-center text-sm/6 text-gray-500">
						New here? {' '}
						<a
							onClick={createNewAccount}
							href="#"
							className="font-semibold text-indigo-600 hover:text-indigo-500"
						>
							Sign up for free!
						</a>
					</p>
				</div>
			</div>
		</>
	)
}
