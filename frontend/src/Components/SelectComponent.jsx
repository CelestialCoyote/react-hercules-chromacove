import { useEffect, useState } from "react";
import "./SelectComponent.css";


export default function SelectComponent({
	options,
	placeholder = "",
	onChange,
	selectedKey,
	open,
	setOpen
}) {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onItemSelected = (option) => {
		onChange !== undefined && onChange(option.id);
		onChange !== undefined && setInputValue(option.name);
		setOpen(false);
	};

	const onInputClick = () => {
		setOpen((prevValue) => !prevValue);
	}

	const clearDropdown = () => {
		setInputValue("");
		onChange("")
	};

	useEffect (() => {
		if (selectedKey) {
			setInputValue(options.find(option => option.id === selectedKey).name);
		}
	}, [selectedKey])

	return (
		<div className="dropdown-container">
			<div
				className="input-container"
				onClick={onInputClick}
			>
				<input
					type="text"
					value={inputValue}
					placeholder={placeholder}
					onChange={onInputChange}
				/>

				<div className="input-arrow-container">
					<i className="input-arrow" />
				</div>

				{selectedKey || inputValue ?
					<div
						className="input-clear-container"
						onClick={clearDropdown}
					>
						x
					</div> : null
				}

				<div className={`dropdown ${open ? "visible" : ""}`}>
					{options.map(option => {
						return (
							<div
								key={option.id}
								className="option"
								onClick={() => onItemSelected(option)}
							>
								{option.name}
							</div>
						);
					})}
				</div>

			</div>
		</div>
	);
};
