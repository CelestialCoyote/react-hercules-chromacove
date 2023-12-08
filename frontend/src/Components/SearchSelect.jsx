import { useEffect, useRef, useState } from "react";


export default function SearchSelect({
	options,
	label,
	id,
	selectedVal,
	handleChange
}) {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const inputRef = useRef(null);

	useEffect(() => {
		document.addEventListener("click", toggle);
		return () => document.removeEventListener("click", toggle);
	}, []);

	const selectOption = (option) => {
		setQuery(() => "");
		handleChange(option[label]);
		setIsOpen((isOpen) => !isOpen);
	};

	function toggle(e) {
		setIsOpen(e && e.target === inputRef.current);
	}

	const getDisplayValue = () => {
		if (query) return query;
		if (selectedVal) return selectedVal;

		return "";
	};

	const filter = (options) => {
		return options.filter(
			(option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
		);
	};

	return (
		<div className="relative bg-lime-300 cursor-pointer">
			<div className="">
				<div className="selected-value">
					<input
						ref={inputRef}
						type="text"
						value={getDisplayValue()}
						name="searchTerm"
						onChange={(e) => {
							setQuery(e.target.value);
							handleChange(null);
						}}
						onClick={toggle}
					/>
				</div>
				<div
					className={`block absolute h-0 ${isOpen ? "open" : ""}`}>
				</div>
			</div>

			<div className={`hidden overflow-y-auto ${isOpen ? "open" : ""}`}>
				{filter(options).map((option, index) => {
					return (
						<div
							onClick={() => selectOption(option)}
							className={`option ${option[label] === selectedVal ? "selected" : ""
								}`}
							key={`${id}-${index}`}
						>
							{option[label]}
						</div>
					);
				})}
			</div>
		</div>
	);
};