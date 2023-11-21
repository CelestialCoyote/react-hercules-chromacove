import { baseAPI } from '../userConfig/baseAPI';


const CovePresetButtons = ({ presets, rgbState, setRGBState, setMasterValue, setIsEditOpen }) => {

	const sendPresetData = (preset) => {
		const allChannels = [];
		const presetChannels = preset.channels;
		const data = [];

		// Copy rgbState to array of objects.
		Object.values(rgbState).forEach(channel => {
			allChannels.push(channel);
		});

		Object.keys(presetChannels).forEach(preset => {
			allChannels.forEach(channel => {
				if (channel.name === preset.toLowerCase())
					channel.value = presetChannels[preset];
			});
		});

		allChannels.forEach(channel => {
			setRGBState(prevState => (
				{ ...prevState, [channel.id]: { ...prevState[channel.id], value: parseFloat(channel.value) } }
			));
			setMasterValue(preset.master);
		});

		data.push({
			"red": ((preset.channels.red) * preset.master).toFixed(3),
			"grn": ((preset.channels.grn) * preset.master).toFixed(3),
			"blu": ((preset.channels.blu) * preset.master).toFixed(3),
			"duration": preset.duration
		});

		try {
			baseAPI.post('colorChange', data)
				.then((res) => {
					console.log(JSON.stringify(res.data));
				});
		} catch (error) {
			console.log('Update color channel failed.', error);
		};
	};

	return (

		<div className="flex flex-col text-red-500">

			<h1 className="text-center m-6">Cove Level Presets</h1>

			<div className="grid grid-cols-4 place-items-center gap-6 mb-6">
				{presets.map(preset =>
					<button
						key={preset.preset}
						className="border-red-500 border-2 rounded-xl w-24 p-1"
						onClick={() => { sendPresetData(preset) }}
					>
						{preset.label}
					</button>
				)}
			</div>

			<button
				className="edit-button"
				onClick={() => { setIsEditOpen(true) }}
			>
				Edit Presets
			</button>

		</div>

	);

};


export default CovePresetButtons;
