import React, { useEffect, useState } from 'react'
import { Form } from '../components/Form/Form'
import { useSelector } from 'react-redux';
import { changeInformation, getUserData } from '../firebase/services/userService';
import { updateFormField } from '../redux/actions/formActions';

export default function Settings() {
	const uid = useSelector((state) => state.user.uid)
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	useEffect(() => {
		getUserData(uid).then((doc) => {
			updateFormField('name', doc.name)
		})
	}, [uid])

	const handleSubmit = async () => {
		changeInformation(uid)
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
						Edit account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

					<Form fields={[
						{ label: "Name", name: "name", maxLength: 30, required: true },
					]}
						submitText='Save'
						onSubmit={handleSubmit}
					/>
				</div>
			</div>
		</div>
	)
}
