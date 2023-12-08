import { useState } from "react";
import SearchableSelect from ".././../components/SearchableSelect";
import { animals } from "../../userConfig/animals";
import "../../components/SearchableSelect.css";


export default function StarMachineLamps() {
	const [value, setValue] = useState("Select option...");

	return (
		<div className="flex flex-col bg-black-900 text-red-500">
			<h1 className="text-3xl text-center w-full">Star Machine Lamps</h1>

			<SearchableSelect
				options={animals}
				label="name"
				id="id"
				selectedVal={value}
				handleChange={(val) => setValue(val)}
			/>
		</div>
	);
};
