import { Checkmark } from 'react-checkmark'

export default function SuccessPopup() {

	return (
		<div className="relative z-10">
			<div
				className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
			></div>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex  items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<div
						className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
					>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">

								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<Checkmark color="#53a653" />
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											Your account has been created successfully! 🎉 You can now log in and start using all the features.
											Redirecting you to the login page...
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
