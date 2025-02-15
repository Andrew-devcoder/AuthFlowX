import { Link } from "react-scroll";

export default function Home() {
	const posts = [
		{
			category: 'Backend as a Service',
			title: 'Firebase',
			description:
				'The project includes user authentication features such as registration, login, and password recovery**, all handled via Firebase Authentication.\nFor profile management, users can currently update their **name**.',
		},
		{
			category: 'State Management',
			title: 'Redux',
			description:
				'To ensure efficient state management, I used **Redux Toolkit**, allowing seamless data access and updates throughout the app.\nAdditionally, **Redux Persist** is implemented to store session data in **localStorage**, preventing users from losing their information after a page refresh.\nTo avoid serialization issues in Redux Toolkit, **middleware adjustments were made to ignore specific persist actions**, ensuring smooth state updates.',

		},
		{
			category: 'UI Styling',
			title: 'Tailwind CSS',
			description:
				'The UI is built with **Tailwind CSS** for modern styling, while **Headless UI** and **Heroicons** provide interactive and accessible components for a smooth user experience.',
		},
		{
			category: 'Form Handling',
			title: 'Custom Form Validation',
			description:
				'The project also includes **custom form validation** to ensure correct user input, with centralized logic for reusability.',
		},
		{
			category: 'Routing',
			title: 'React Router',
			description:
				'The application uses **React Router** for navigation, ensuring a structured and scalable routing system.\nTo protect user data, certain pages (such as **Home** and **Settings**) are accessible **only to authenticated users**.\nA **ProtectedRoute** wrapper automatically redirects unauthenticated users to the login page.',
		},
		{
			category: 'Automated User Cleanup System',
			title: 'Firebase Admin SDK & Netlify Schedule',
			description:
				'Since **anyone can register** on the platform, the database could become cluttered with unnecessary accounts.\nTo prevent this, an **automated cleanup system** was implemented to **remove inactive users** and their associated documents.\n**Firebase Admin SDK** is used for secure database operations, but since it only works on the backend, a server-side function was implemented.\n**Netlify Schedule** is used to **automate the cleanup process**, ensuring that the function runs **daily** without manual intervention.\nTo keep a **test account available**, the system **always retains one user**:\nEmail: example@www.com\nPassword: 123123',
		},
	]


	return (
		<div className="px-2">
			<div className="mx-auto max-w-2xl -mt-16 py-32 sm:py-44 lg:py-48">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
						Let's connect on {' '}
						<a
							target="_blank"
							href="https://www.linkedin.com/in/andrew-kovpak-front-end-developer/"
							className="font-semibold text-indigo-600"
						>
							<span aria-hidden="true" className="absolute inset-0" />
							LinkedIn Profile <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
						A hands-on showcase of my skills
					</h1>
					<p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
						This is a personal pet project created to demonstrate my skills and solutions in modern web development.
						It features a fully functional authentication system, state persistence, and automated user management, built using a modern React stack.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							target="_blank"
							href="https://github.com/Andrew-devcoder"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							GitHub Profile
						</a>

						<Link
							to="features"
							smooth={true}
							duration={500}
							className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
						>
							Read more <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				/>
			</div>


			<div className="bg-white py-20 sm:py-32" id="features">
				<div className="mx-auto max-w-7xl px-6 lg:px-8" >
					<div className="mx-auto max-w-2xl lg:mx-0" >
						<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
							Features
						</h2>
						<p className="mt-2 text-lg/8 text-gray-600">Registration, login, password reset, profile editing. Responsive and clean design. Efficient state management. Automatic removal of inactive users. Protected pages for authenticated users only.</p>
					</div>
					<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{posts.map((post, index) => (
							<article key={index} className="flex max-w-xl flex-col items-start">
								<div className="flex items-center gap-x-4 text-xs">
									<p className="text-gray-500">
										{post.category}
									</p>
								</div>
								<div className="group relative">
									<h3 className="mt-3 text-lg/6 font-semibold text-gray-900">
										{post.title}
									</h3>
									<p className="mt-5 text-sm/6 text-gray-600 whitespace-pre-line">
										{post.description}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>

		</div>
	);
}
