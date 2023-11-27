import { useState } from 'react';
import SliderVertical from '../../components/SliderVertical';
import SliderMaster from '../../components/SliderMaster';
import SliderWhite from '../../components/SliderWhite';
import CovePresetButtons from '../../components/CovePresetButtons';
import FadeRateSelect from '../../components/FadeRateSelect';
import rgbChannels from '../../userConfig/channels.json'
import Presets from '../../userConfig/presets.json';


export default function RGBCove() {
	const [rgbState, setRGBState] = useState(rgbChannels);
	const [whtValue, setWhtValue] = useState(0.000);
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);
	const [presets, setPresets] = useState(Presets);


	return (
		<div className="flex h-screen p-6 gap-10 mt-12">

			<div className="flex flex-col w-1/2">

				<div className="flex h-full justify-between">
					{rgbChannels.map(channel =>
						<SliderVertical
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
					
					<SliderWhite
						color="#999999"
						whtValue={whtValue}
						setWhtValue={setWhtValue}
						setMasterValue={setMasterValue}
						masterValue={masterValue}
						duration={duration}
					/>
				</div>

				<div className="flex flex-col mt-4">
					<SliderMaster
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
