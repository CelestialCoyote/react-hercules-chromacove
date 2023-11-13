import { useState } from 'react';
import CoveSliderVertical from '../../components/CoveSliderVerical';
import CoveMasterSlider from '../../components/CoveMasterSlider';
//import { baseAPI } from '../../userConfig/baseAPI';


export default function RGBCove() {
	const [red, setRed] = useState(0.000);
	const [grn, setGrn] = useState(0.000);
	const [blu, setBlu] = useState(0.000);
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);


	const [state, setState] = useState({});
	const [channelData, setChannelData] = useState([]);
	const [channelState, setChannelState] = useState({});
	const [rgbChannels, setRGBChannels] = useState(
		[
			{
				"id": 1,
				"name": "red",
				"value": 0.000,
				"slider": true
			},
			{
				"id": 2,
				"name": "grn",
				"value": 0.000,
				"slider": true
			},
			{
				"id": 3,
				"name": "blu",
				"value": 0.000,
				"slider": true
			},
		]);

	return (
		<div className="flex flex-1 flex-col w-1/2 m-6">

			<div className="flex flex-1 flex-col">

				<div className="flex h-full justify-between">
					<CoveSliderVertical
						coveColor="Red"
						color="#bb0000"
						setLevel={setRed}
						level={red}
					/>
					<CoveSliderVertical
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
					/>
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
