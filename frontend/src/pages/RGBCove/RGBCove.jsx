//import { useEffect, useState } from 'react';
import { useState } from 'react';
import VCoveSlider from '../../components/VCoveSlider';
import CoveMasterSlider from '../../components/CoveMasterSlider';
import CovePresetButtons from '../../components/CovePresetButtons';
import FadeRateSelect from '../../components/FadeRateSelect/FadeRateSelect';
import rgbChannels from '../../userConfig/channels.json'
import Presets from '../../userConfig/presets.json';
//import { baseAPI } from '../../userConfig/baseAPI';


export default function RGBCove() {
	const [rgbState, setRGBState] = useState(rgbChannels);
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);
	const [presets, setPresets] = useState(Presets);


	return (
		<div className="flex h-screen p-4">

			<div className="flex flex-col w-1/2">

				<div className="flex h-full justify-between">
					{rgbChannels.map(channel =>
						<VCoveSlider
							key={channel.id}
							coveColor={channel.name}
							color={channel.color}
							channelState={rgbState[channel.id]}
							rgbChannels={rgbState}
							setRGBState={setRGBState}
							masterValue={masterValue}
							duration={duration}
						/>
					)}
				</div>

				<div className="flex flex-col mt-4">

					<CoveMasterSlider
						color="#886622"
						rgbChannels={rgbState}
						setMasterValue={setMasterValue}
						masterValue={masterValue}
						duration={duration}
					/>

				</div>

			</div>

			<div className="w-1/2">
				<CovePresetButtons
					presets={presets}
					rgbState={rgbState}
					setRGBState={setRGBState}
					setMasterValue={setMasterValue}
				/>

				<FadeRateSelect
					duration={duration}
					setDuration={setDuration}
				/>
			</div>

		</div>
	);
};
