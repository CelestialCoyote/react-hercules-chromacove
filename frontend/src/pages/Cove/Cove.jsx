import React, { useEffect, useState } from 'react';
import VCoveSlider from '../../components/VCoveSlider/VCoveSlider';
import CoveMasterSlider from '../../components/CoveMasterSlider/CoveMasterSlider';
import CovePresetButtons from '../../components/CovePresetButtons/CovePresetButtons';
import FadeRateSelect from '../../components/FadeRateSelect/FadeRateSelect';
import covePresets from '../../userConfig/presets.json';
import channels from '../../userConfig/channels.json';


export default function Cove() {
	const [red, setRed] = useState(0.000);
    const [grn, setGrn] = useState(0.000);
    const [blu, setBlu] = useState(0.000);

	const [channelData, setChannelData] = useState([]);
	const [state, setState] = useState({});
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);
	const [presets, setPresets] = useState(covePresets);

	const addChannels = (channelData) => {
		// Mapped channelId to its useState.
		channelData.forEach(channel => {
			setState(prevState => ({ ...prevState, [channel.id]: { ...channel, value: 0.000 } }));
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

	return (
		<div className="flex flex-1">

			<div className="flex flex-1 flex-col w-1/2 m-6">

				<div className="flex flex-1 justify-between">

					<VCoveSlider
						key={1}
						channelState={red}
						setState={setRed}
						masterValue={masterValue}
						duration={duration}
					/>
					<VCoveSlider
						key={2}
						channelState={grn}
						setState={setGrn}
						masterValue={masterValue}
						duration={duration}
					/>
					<VCoveSlider
						key={3}
						channelState={blu}
						setState={setBlu}
						masterValue={masterValue}
						duration={duration}
					/>

				</div>

				<div className="flex flex-col mt-4">

					<CoveMasterSlider
						color={"#ccaa77"}
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
				//setIsEditOpen={setIsEditOpen}
				/>

				<FadeRateSelect
					duration={duration}
					setDuration={setDuration}
				/>

			</div>

		</div>
	);
};
