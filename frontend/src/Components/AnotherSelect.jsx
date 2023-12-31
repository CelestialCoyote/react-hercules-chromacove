import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { baseColors } from "../userConfig/baseColors";


export default function AnotherSelect({
    options,
    label,
    id,
    selectedVal,
    handleChange,
    searchTerm
}) {
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    const [query, setQuery] = useState("");
    const inputRef = useRef(null);

    function toggle(e) {
		// setIsOpen(e && e.target === inputRef.current);
        setOpen(e && e.target === inputRef.current);
	}

    const selectOption = (option) => {
        setQuery(() => "");
        handleChange(option[label]);
        // setIsOpen((isOpen) => !isOpen);
        setOpen((open) => !setOpen);
    };

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

    useEffect(() => {
		document.addEventListener("click", toggle);
		return () => document.removeEventListener("click", toggle);
	}, []);

    return (
        <div className="w-72 font-medium h-80">
            <div
                onClick={() => setOpen(!open)}
                className={`bg-white w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"}`}
            >
                {selected
                    ? selected?.length > 25
                        ? selected?.substring(0, 25) + "..."
                        : selected
                    : "Select"}
                <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
            </div>
            <div
                className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
            >
                <div className="flex items-center px-2 sticky top-0 bg-white">
                    <AiOutlineSearch
                        className="text-gray-700"
                        size={18}
                    />
                    {/* <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                        placeholder={searchTerm}
                        className="placeholder:text-gray-700 p-2 outline-none"
                    /> */}
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
                        placeholder={searchTerm}
                        className="placeholder:text-gray-700 p-2 outline-none"
					/>
                </div>

                {/* <div className={`options ${isOpen ? "open" : ""}`}> */}
                {filter(options).map((option, index) => {
                    return (
                        <div
                            key={option?.name}
                            onClick={() => selectOption(option)}
                            className={`option ${option[label] === selectedVal ? "selected" : ""}`}

                        >
                            {option[label]}
                        </div>
                    );
                })}
                {/* </div> */}
                {/* {options?.map((option) => (
                    <li
                        key={option?.name}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                            ${option?.name?.toLowerCase() === selected?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
                        ${option?.name?.toLowerCase().startsWith(inputValue)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            if (option?.name?.toLowerCase() !== selected.toLowerCase()) {
                                setSelected(option?.name);
                                setOpen(false);
                                setInputValue("");
                            }
                        }}
                    >
                        {option?.name}
                    </li>
                ))} */}
            </div>
        </div>
    );
};
