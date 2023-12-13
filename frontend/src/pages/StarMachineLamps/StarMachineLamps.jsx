import SelectSearch from "../../components/SelectSearch";
import Select from "../../components/Select";
//import { animals } from "../../userConfig/animals";
import { baseColors } from "../../userConfig/baseColors";


export default function StarMachineLamps() {

	return (
		<div className="flex flex-col bg-yellow-300 h-screen text-red-500">
			<h1 className="text-3xl text-center w-ful my-24">Star Machine Lamps</h1>

			<div className="flex justify-around bg-green-100">

				<div className="bg-green-300 p-4">
					<SelectSearch
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
			</div>
		</div>
	);
};
