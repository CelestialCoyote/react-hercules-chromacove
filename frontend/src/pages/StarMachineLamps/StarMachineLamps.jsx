import { useState } from "react";
import SearchableSelect from "../../components/SearchableSelect";
import { animals } from "../../userConfig/animals";
import { colors } from "../../userConfig/colors";
import "../../components/SearchableSelect.css";


export default function StarMachineLamps() {
	const [value, setValue] = useState("Select option...");

	return (
		<div className="flex flex-col bg-black-900 h-min-screen text-red-500">
			<h1 className="text-3xl text-center w-ful my-24">Star Machine Lamps</h1>

			<div className="ml-24 mb-24 w-1/2">
				<SearchableSelect
					options={animals}
					label="name"
					id="id"
					selectedVal={value}
					handleChange={(val) => setValue(val)}
				/>
			</div>

			<div className="ml-24 mb-96">
				<select value="">
					{colors.map(color => <option key={color} value={color}>{color}</option>)}
				</select>
			</div>
		</div>
	);
};
