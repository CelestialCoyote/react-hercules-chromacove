import { useState } from "react";


export default function SelectSearch({ options, searchTerm, bgInput }) {
    const [selected, setSelected] = useState("");
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const textColor = "text-red-500";
    const placeholder = "placeholder:text-gray-500";

    const filter = (options) => {
        return options.filter(
            (option) => option?.name?.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
    };

    return (
        <div className="w-full font-medium h-80">
            <div
                className="
                    flex
                    justify-between
                    items-center
                    bg-gray-300
                    divide-x
                    divide-black
                    gap-1
                    border
                    border-black
                    rounded-md
                    overflow-hidden
                "
            >
                <input
                    type="text"
                    value={search}
                    className={`${bgInput} ${textColor} ${placeholder} outline-none p-[8px] w-full`}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    onFocus={() => setOpen(true)}
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
            
            <div
                className={`${bgInput} mt-2 overflow-y-auto no-scrollbar ${open ? "max-h-60" : "max-h-0"} `}
            >
                {filter(options).map((option) => {
                    return (
                        <div
                            key={option?.id}
                            className={`text-gray-500 hover:bg-sky-300 hover:text-white p-2
                                ${option?.name?.toLowerCase() === selected?.toLowerCase() && "bg-sky-300 text-white"}`
                            }
                            onClick={() => {
                                if (option?.name?.toLowerCase() !== selected.toLowerCase()) {
                                    setSelected(option?.name);
                                    setOpen(false);
                                    setSearch("");
                                    setSearch(option?.name);
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
