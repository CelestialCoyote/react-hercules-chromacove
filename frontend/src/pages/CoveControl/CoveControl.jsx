import { useEffect, useState } from 'react';
import CovePresetButtons from '../../components/CovePresetButtons/CovePresetButtons';
import CovePresetsModal from '../../components/CovePresetsModal/CovePresetsModal';
import FadeRateSelect from '../../components/FadeRateSelect/FadeRateSelect';
import VCoveSlider from '../../components/VCoveSlider/VCoveSlider';
import CoveMasterSlider from '../../components/CoveMasterSlider/CoveMasterSlider';
import { baseAPI } from '../../userConfig/baseAPI';
import channels from '../../userConfig/channels.json';
import covePresets from '../../userConfig/presets.json';


const CoveControl = () => {

	const [channelData, setChannelData] = useState([]);
	const [presets, setPresets] = useState(covePresets);
	const [isEditOpen, setIsEditOpen] = useState(false);
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);

	// State varible for all channels.
	const [state, setState] = useState({}); // Could probably merge with channelData
	const DEFAULT_VAL = 0.000;

	const addChannels = (channelData) => {
		// Mapped channelId to its useState.
		channelData.forEach(channel => {
			setState(prevState => ({ ...prevState, [channel.id]: { ...channel, value: DEFAULT_VAL } }));
		});
	};

	//Get ChannelData and Preset information from backend.
	useEffect(() => {
		try {
			setChannelData(channels);
			addChannels(channels);
		} catch (error) {
			console.log('Get DMX channel data information failed.', error);
		}

	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	//Try to find a better solution for the above comment line to remove warning
	//about missing dependency in useEffect.

	useEffect(() => {
		try {
			baseAPI.get('presets')
				.then((res) => {
					setPresets(res.data);
				});
		} catch (error) {
			console.log('Get Preset button information failed.', error);
		}
	}, []);

	if (presets.length === 0) {
		return <h1>Loading.....</h1>;
	}

	return (

		<>

			{!isEditOpen &&

				<div className="flex flex-1">

					<div className="flex flex-1 flex-col w-1/2 m-6">

						<div className="flex flex-1 justify-between">

							{channelData.map(channel =>
								<VCoveSlider
									key={channel.id}
									channelState={state[channel.id]}
									setState={setState}
									masterValue={masterValue}
									duration={duration}
								/>
							)}

						</div>

						<div className="flex flex-col mt-4">

							<CoveMasterSlider
								channelData={channelData}
								channelState={state}
								setMasterValue={setMasterValue}
								masterValue={masterValue}
								duration={duration}
							/>

						</div>

					</div>

					<div className="flex flex-col w-1/2">

						<CovePresetButtons
							presets={presets}
							channelState={state}
							setState={setState}
							setMasterValue={setMasterValue}
							setIsEditOpen={setIsEditOpen}
						/>

						<FadeRateSelect
							duration={duration}
							setDuration={setDuration}
						/>

					</div>

				</div>
			}

			{isEditOpen &&
				<CovePresetsModal
					setIsEditOpen={setIsEditOpen}
					channelState={state}
					setState={setState}
					presets={presets}
					setPresets={setPresets}
					setMasterValue={setMasterValue}
				/>
			}
		</>

	);
};


export default CoveControl;
