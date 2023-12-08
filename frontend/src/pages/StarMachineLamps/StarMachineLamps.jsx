import { useState } from "react";
import SearchableSelect from "../../components/SearchableSelect";
import SearchSelect from "../../components/SearchSelect";
import { animals } from "../../userConfig/animals";
import { colors } from "../../userConfig/colors";
import { baseColors } from "../../userConfig/baseColors";
import "../../components/SearchableSelect.css";
import SelectComponent from "../../components/SelectComponent";


export default function StarMachineLamps() {
	const [value, setValue] = useState("Select option...");
	const [selectedOption, setSelectedOption] = useState("");
	const [open, setOpen] = useState(false);

	return (
		<div className="flex flex-col bg-yellow-100 h-min-screen text-red-500">
			<h1 className="text-3xl text-center w-ful my-24">Star Machine Lamps</h1>

			<div className="ml-24 mb-24 w-1/2">
				<SearchableSelect
					options={baseColors}
					label="name"
					id="id"
					selectedVal={value}
					handleChange={(val) => setValue(val)}
				/>
			</div>

			<div className="ml-24 mb-24 w-1/2">
				<SearchSelect
					options={baseColors}
					label="name"
					id="id"
					selectedVal={value}
					handleChange={(val) => setValue(val)}
				/>
			</div>

			<div className="ml-24 mb-24 w-1/2">
				<SelectComponent
					options={baseColors}
					onChange={(item) => setSelectedOption(item)}
					selectedKey={selectedOption}
					placeholder={"type to search"}
					open={open}
					setOpen={setOpen}
				/>

				<p className="mt-4">selectedOption: {selectedOption}</p>
			</div>

			{/* <div className="ml-24 mb-96">
				<select value="">
					{colors.map(color => <option key={color} value={color}>{color}</option>)}
				</select>
			</div> */}
		</div>
	);
};
