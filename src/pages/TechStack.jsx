import React from 'react'

export default function TechStack() {
	const techStack = ['react', 'vite', 'yarn', 'tailwind', 'firebase', 'netlify']
	return (
		<>
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
					<h2 className="text-center text-base/7 font-semibold text-indigo-600">Tech Stack</h2>
					<p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
						The Tools I Chose for Development
					</p>
					<div className="mt-10 grid grid-cols-2 gap-4 sm:mt-16 lg:grid-cols-2 ">

						<div className="flex flex-col rounded-lg bg-white lg:rounded-l-[2rem]">
							<div className="px-8 py-8 sm:px-10 sm:py-10 ">
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
									Frontend
								</p>
								<div className="mt-2 max-w-lg text-sm/6 text-gray-600 ">
									<ul>
										<li><b>Framework</b>: React</li>
										<li><b>State Management</b>: Redux (Toolkit, Persist)</li>
										<li><b>Routing</b>: React Router</li>
										<li><b>Styling</b>: Tailwind CSS</li>
										<li><b>UI Components</b>: Headless UI, Heroicons</li>
										<li><b>Build Tool</b>: Vite</li>
										<li><b>Authentication & Database</b>: Firebase (Authentication, Firestore)</li>
										<li><b>Deployment</b>: Netlify</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="flex flex-col rounded-lg bg-white lg:rounded-r-[2rem]">
							<div className="px-8 py-8 sm:px-10 sm:py-10 ">
								<p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
									Backend
								</p>
								<div className="mt-2 max-w-lg text-sm/6 text-gray-600 ">
									<ul>
										<li> <b>Serverless Execution:</b> Netlify Schedule</li>
										<li> <b>Admin SDK:</b> Firebase Admin SDK (used for secure user management)</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*  */}

			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<h2 className="text-center text-lg/8 font-semibold text-gray-900">
						Technologies Used
					</h2>
					<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">

						{techStack.map((skill, index) => (
							<img
								key={index}
								alt={skill}
								src={`https://skillicons.dev/icons?i=${skill}`}
								width={158}
								height={48}
								className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
