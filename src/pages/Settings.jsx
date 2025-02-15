import React, { useEffect, useState } from 'react'
import { Form } from '../components/Form/Form'
import { useSelector } from 'react-redux';
import { changeInformation, getUserData } from '../firebase/services/userService';
import { updateFormField } from '../redux/actions/formActions';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

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

					{/* <div className="col-span-full">
						<label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
							Photo
						</label>
						<div className="mt-2 flex items-center gap-x-3">
							<UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
							<button
								type="button"
								className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
							>
								Change
							</button>
						</div>
					</div>

					<div className="col-span-full">
						<label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
							Cover photo
						</label>
						<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
							<div className="text-center">
								<PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
								<div className="mt-4 flex text-sm/6 text-gray-600">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
									>
										<span>Upload a file</span>
										<input id="file-upload" name="file-upload" type="file" className="sr-only" />
									</label>
									<p className="pl-1">or drag and drop</p>
								</div>
								<p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
							</div>
						</div>
					</div> */}


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
