import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { submitForm } from '../redux/actions/formActions';

export default function Registration() {
	const navigate = useNavigate();

	const loginAccount = (e) => {
		e.preventDefault()
		navigate('/login', { replace: true });
	}

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleSubmitRegistration = async () => {
		await submitForm()
	}

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div
				className={`transition-opacity ease-in-out duration-1000 
						 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
			>
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
					<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						Create new account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

					<Form
						fields={[
							{ label: "Name", name: "name", maxLength: 30, required: true },
							{ label: "Email address", name: "email", maxLength: 30, required: true },
							{ label: "Password", name: "password", type: "password", maxLength: 30, required: true, autoComplete: 'new-password' },
							{ label: "Confirm Password", name: "confirmPassword", type: "password", maxLength: 30, required: true }
						]}
						onSubmit={handleSubmitRegistration}
						submitText='Registration'
					/>

					<p className="mt-10 text-center text-sm/6 text-gray-500">
						Have an account?{' '}
						<a
							onClick={loginAccount}
							href="#"
							className="font-semibold text-indigo-600 hover:text-indigo-500"
						>
							Log in here
						</a>
					</p>

				</div>
			</div>

		</div>
	)
}


