import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";


export default function SelectSearch({ options, searchTerm }) {
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const filter = (options) => {
        return options.filter(
            (option) => option?.name?.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        );
    };

    return (
        <div className="w-72 font-medium h-80">
            <div className="flex items-center justify-between divide-x divide-neutral-200 gap-1 border border-neutral-400 rounded-md overflow-hidden">
                <input
                    type="text"
                    // value={search}
                    value={selected === "" ? inputValue : selected}
                    className="outline-none px-2"
                    // className="placeholder:text-gray-700 p-2 outline-none"
                    // onChange={(e) => setSearch(e.target.value)}
                    onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                    onFocus={() => setOpen(true)}
                    // placeholder="Search..."
                    placeholder={searchTerm}
                />
                <span
                    className="relative p-4 cursor-pointer"
                    onClick={() => setOpen((p) => !p)}
                    id={`Toggle`}
                >
                    <span
                        className={
                            `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[6px] border-l-transparent border-r-transparent border-b-0 border-t-neutral-900 transition-[transform]
                            ${open ? "rotate-180" : "rotate-0"}`
                        }
                    ></span>
                </span>
            </div>
            {/* <div
                onClick={() => setOpen(!open)}
                className={`bg-white w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"}`}
            >
                {selected
                    ? selected?.length > 25
                        ? selected?.substring(0, 25) + "..."
                        : selected
                    : "Select"}
                <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
            </div> */}
            <div
                className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
            >
                {/* <div className="flex items-center px-2 sticky top-0 bg-white">
                    <AiOutlineSearch size={18} className="text-gray-700" />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                        placeholder={searchTerm}
                        className="placeholder:text-gray-700 p-2 outline-none"
                    />
                </div> */}

                {filter(options).map((option, index) => {
                    return (
                        <div
                            key={option?.name}
                            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                ${option?.name?.toLowerCase() === selected?.toLowerCase() && "bg-sky-600 text-white"}`
                            }
                            onClick={() => {
                                if (option?.name?.toLowerCase() !== selected.toLowerCase()) {
                                    setSelected(option?.name);
                                    setOpen(false);
                                    setInputValue("");
                                }
                            }}
                        >
                            {option?.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
