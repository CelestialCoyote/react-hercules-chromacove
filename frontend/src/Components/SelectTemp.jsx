export default function SelectTemp({ searchTerm, options, value, setValue }) {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <label className="flex flex-col">
            {searchTerm}
            <select
                className="w-24"
                value={value}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <option
                        className="bg-slate-500"
                        value={option.name}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </label>
    );
};
