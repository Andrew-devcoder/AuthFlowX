import { useState } from "react";
import { InputField } from "../Input/InputField";
import { useNavigate } from "react-router-dom";
import SuccessPopup from "../SuccessPopup/SuccessPopup";

export const Form = ({ fields, onSubmit, submitText }) => {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			await onSubmit();
			setSuccess(true);

			setTimeout(() => {
				setLoading(false);
				navigate('/login', { replace: true });
			}, 2000);
		} catch (err) {
			setError(err.message || "Something went wrong");
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6" >

			{fields.map((field) => (
				<InputField key={field.name} {...field} />
			))}

			<button
				type="submit"
				disabled={loading}
				className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				{loading ? (
					<div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
				) : (
					submitText
				)}

			</button>

			{success && <SuccessPopup />}
			{error && <p className="text-red-500 text-sm">{error}</p>}

		</form>
	)
}


