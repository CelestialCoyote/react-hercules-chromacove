import { baseAPI } from '../../userConfig/baseAPI';
// import './CovePresetButtons.css';


const CovePresetButtons = ({
	presets, channelState, setState, setMasterValue, setIsEditOpen
}) => {
	const sendPresetData = (preset) => {
		// Copy channelState to array of objects.
		const allChannels = [];
		Object.values(channelState).forEach(channel => {
			//console.log(channel)
			allChannels.push(channel);
		});

		// Reset value key to 0 before inputing Preset data.
		// Otherwise previous values could be in channels not used by current preset.
		allChannels.forEach(channel => channel.value = 0);

		// Create object to hold channels and values used by preset.
		//const presetChannels = presets[preset].channels;
		const presetChannels = preset.channels;
		//console.log(presetChannels);

		// For every color in Preset adjust the color value in allChannels.
		Object.keys(presetChannels).forEach(preset => {
			allChannels.forEach(channel => {
				if (channel.name === preset.toLowerCase())
					channel.value = presetChannels[preset];
			});
		});

		// Update the sliders to match Preset selected.
		allChannels.forEach(channel => {
			setState(prevState => (
				{ ...prevState, [channel.id]: { ...prevState[channel.id], value: parseFloat(channel.value) } }
			));
		});

		// Set Master slider state.
		setMasterValue(parseFloat(presets[preset].master));

		let masterData = {
			"name": "master",
			"value": presets[preset].master,
			"duration": presets[preset].duration
		};

		allChannels.push(masterData);

		try {
			baseAPI.post('presetButton', allChannels)
				.then((res) => {
					console.log(res.data);
				});
		} catch (error) {
			console.log('Preset button change failed.', error);
		}
	};

	return (

		<div className="flex flex-col text-red-500">

			<label className="text-center m-6">Cove Level Presets</label>

			<div className="grid grid-cols-4 place-items-center gap-6 mb-6">
				{presets.map(preset =>
					<button
						key={preset.preset}
						className="border-red-500 border-2 rounded-xl w-24 p-1"
						onClick={() => {
							//console.log(`preset selected: ${JSON.stringify(preset)}`)
							sendPresetData(preset)
						}}
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
