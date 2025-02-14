import React from 'react'
import { Form } from '../components/Form/Form'
import { resetPassword } from '../firebase/services/authService'
import { useSelector } from 'react-redux'

export default function ResetPassword() {
	const FormData = useSelector(state => state.form.formData)

	const handleSubmit = async () => {
		resetPassword(FormData.email)
	}

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 transition-opacity ease-in-out delay-150 duration-500">

			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
				<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
					Reset your password
				</h2>
			</div>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<Form
					fields={[
						{ label: "Email address", name: "email", maxLength: 30, required: true },
					]}
					onSubmit={handleSubmit}
					submitText='Reset Password'
				/>
			</div>
		</div>
	)
}
