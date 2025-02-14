import { useSelector } from 'react-redux';
import { updateFormField } from '../../redux/actions/formActions';

export const InputField = ({ label, name, type = "text", autoComplete = undefined, maxLength, required = false, extra }) => {
	const value = useSelector((state) => state.form.formData[name]);
	const error = useSelector((state) => state.form.formErrors[name]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		updateFormField(name, value);
	};

	return (
		<div className="mb-4">
			{label && (
				<div className="flex items-center justify-between">
					<label htmlFor={name} className="block text-sm font-medium text-gray-700">
						{label}
					</label>
					{extra && extra}
				</div>
			)}
			<input
				id={name}
				type={type}
				name={name}
				value={value || ''}
				required={required}
				onChange={handleChange}
				maxLength={maxLength}
				autoComplete={autoComplete}
				className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'
					} rounded-md shadow-sm focus:outline-none ${error ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'
					}`}
			/>
			{error && <p className="mt-2 text-sm text-red-500">{error}</p>}
		</div>
	)
}

