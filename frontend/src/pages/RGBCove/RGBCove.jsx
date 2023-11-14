//import { useEffect, useState } from 'react';
import { useState } from 'react';
import CoveSliderVertical from '../../components/CoveSliderVerical';
import CoveMasterSlider from '../../components/CoveMasterSlider';
//import { baseAPI } from '../../userConfig/baseAPI';


const rgbChannels = [
	{
		"id": 1,
		"name": "red",
		"color": "#bb0000",
		"value": 0.000,
		"slider": true
	},
	{
		"id": 2,
		"name": "grn",
		"color": "#00bb00",
		"value": 0.000,
		"slider": true
	},
	{
		"id": 3,
		"name": "blu",
		"color": "#0077bb",
		"value": 0.000,
		"slider": true
	},
];

export default function RGBCove() {
	const [state, setState] = useState(rgbChannels);
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);


	return (
		<div className="flex flex-1 flex-col w-1/2 m-6">

			<div className="flex flex-1 flex-col">

				<div className="flex h-full justify-between">
					{rgbChannels.map(channel =>
						<CoveSliderVertical
							key={channel.id}
							coveColor={channel.name}
							color={channel.color}
							channelState={state[channel.id]}
							setState={setState}
							masterValue={masterValue}
							duration={duration}
						/>
					)}
					{/* <CoveSliderVertical
						coveColor="Grn"
						color="#00bb00"
						setLevel={setGrn}
						level={grn}
					/>
					<CoveSliderVertical
						coveColor="Blu"
						color="#0077bb"
						setLevel={setBlu}
						level={blu}
					/> */}
				</div>

				<div className="flex flex-col mt-4">

					<CoveMasterSlider
						color="#886622"
						channelState={state}
						setMasterValue={setMasterValue}
						masterValue={masterValue}
						duration={duration}
					/>

				</div>

			</div>

		</div>
	);
};
