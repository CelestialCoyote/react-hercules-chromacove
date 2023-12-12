import { useState } from "react";
import SearchableSelect from "../../components/SearchableSelect";
import SearchSelect from "../../components/SearchSelect";
//import { animals } from "../../userConfig/animals";
import { colors } from "../../userConfig/colors";
import { baseColors } from "../../userConfig/baseColors";
import SelectComponent from "../../components/SelectComponent";
import AnotherSelect from "../../components/AnotherSelect";
import { Select } from "../../components/Select";


export default function StarMachineLamps() {
	const [value, setValue] = useState("Select option...");
	const [selectedOption, setSelectedOption] = useState("");
	const [open, setOpen] = useState(false);

	return (
		<div className="flex flex-col bg-yellow-300 h-screen text-red-500">
			<h1 className="text-3xl text-center w-ful my-24">Star Machine Lamps</h1>

			<div className="flex justify-around bg-green-100">
				{/* <div className="flex justify-center bg-gray-300">
				<SearchableSelect
					options={baseColors}
					label="name"
					id="id"
					selectedVal={value}
					handleChange={(val) => setValue(val)}
				/>
			</div> */}

				{/* <div className="ml-24 mb-24 w-1/2">
				<SearchSelect
					options={baseColors}
					label="name"
					id="id"
					selectedVal={value}
					handleChange={(val) => setValue(val)}
				/>
			</div> */}

				{/* <div className="flex justify-center h-96 bg-green-100 mb-16">
				<div className="flex flex-col">
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
			</div> */}

				<div className="bg-green-300 p-4">
					<AnotherSelect
						options={baseColors}
						searchTerm={"search colors"}
					/>
				</div>

				<div className="bg-green-300 p-4">
					<Select
						options={baseColors}
						searchTerm={"search colors"}
					/>
				</div>

				{/* <div className="ml-24 mb-96">
				<select value="">
					{colors.map(color => <option key={color} value={color}>{color}</option>)}
				</select>
			</div> */}
			</div>

		</div>
	);
};
