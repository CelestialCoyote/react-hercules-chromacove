//import { useEffect, useState } from 'react';
import { useState } from 'react';
import VCoveSlider from '../../components/VCoveSlider';
import CoveMasterSlider from '../../components/CoveMasterSlider';
//import { baseAPI } from '../../userConfig/baseAPI';


const rgbChannels = [
	{
		"id": 0,
		"name": "red",
		"color": "#bb0000",
		"value": 0.000,
		"slider": true
	},
	{
		"id": 1,
		"name": "grn",
		"color": "#00bb00",
		"value": 0.000,
		"slider": true
	},
	{
		"id": 2,
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
						<VCoveSlider
							key={channel.id}
							coveColor={channel.name}
							color={channel.color}
							channelState={state[channel.id]}
							setState={setState}
							masterValue={masterValue}
							duration={duration}
						/>
					)}
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
