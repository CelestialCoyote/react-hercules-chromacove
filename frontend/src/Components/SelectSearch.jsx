import { useState } from "react";


export default function SelectSearch({ options, searchTerm }) {
    const [selected, setSelected] = useState("");
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

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
                    // value={selected === "" ? search : selected}
                    value={search}
                    className="outline-none m-[5px] p-[5px] w-full"
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
                className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
            >
                {filter(options).map((option) => {
                    return (
                        <div
                            key={option?.id}
                            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                ${option?.name?.toLowerCase() === selected?.toLowerCase() && "bg-sky-600 text-white"}`
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
