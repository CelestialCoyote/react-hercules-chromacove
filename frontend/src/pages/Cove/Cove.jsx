import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
//import VCoveSlider from '../../components/VCoveSlider/VCoveSlider';
import CoveMasterSlider from '../../components/CoveMasterSlider/CoveMasterSlider';
import { baseAPI } from '../../userConfig/baseAPI';


const channels = [
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
];

export default function Cove() {
	const [temp, setTemp] = useState(0.000);
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);

	const [state, setState] = useState({}); // Could probably merge with channelData
	const [channelData, setChannelData] = useState(channels);

	const updateChannelState = (channelId, value) => {
		setState(prevState => (
			{ ...prevState, [channelId]: { ...prevState[channelId], value: value } }
		));
	};

	const debounce = (func, wait, immediate) => {
		let timeout;

		return function () {
			let context = this;
			let args = arguments;

			let later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};

			let callNow = immediate && !timeout;

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	const sendColorData = (currentValue, isSlider) => {
		const data = [];
		let channelDuration = 0.01;

		if (isSlider)
			channelDuration = 0.01;
		else
			channelDuration = duration;

		data.push({
			"id": channelData.id,
			"name": channelData.name,
			"value": currentValue,
			"slider": channelData.slider
		});
		data.push({ "name": "master", "value": masterValue, "duration": channelDuration });

		try {
			baseAPI.post('colorChange', data)
				.then((res) => {
					console.log(JSON.stringify(res.data));
				});
		} catch (error) {
			console.log('Update color channel failed.', error);
		};
	};

	const handleColorChange = (event) => {
		updateChannelState(channelData.id, event.target.value);

		if (event.target.value === 0.000) setTemp(0);

		sendColorData(event.target.value, true);
	};

	// const handleToggleButton = () => {
	// 	let newLevel;
	// 	if (channelData[0].value > 0.000) {
	// 		setTemp(channelData[0].value);
	// 		updateChannelState(channelData[0].id, 0.000);
	// 		newLevel = 0.000;
	// 	} else {
	// 		if (temp === 0.000) {
	// 			setTemp(1.000);
	// 			updateChannelState(channelData[0].id, 1.000);
	// 			newLevel = 1.000;
	// 		} else {
	// 			updateChannelState(channelData[0].id, temp);
	// 			newLevel = temp;
	// 		}
	// 	}

	// 	sendColorData(newLevel);
	// };

	//const toggleButton = "bg-black border-red-500 border-2 text-red-500 text-xl rounded-xl p-1 w-24 hover:border-red-300 hover:text-red-300";
	//const toggleButtonOn = "bg-red-500 border-red-500 border-2 text-black text-xl rounded-xl p-1 w-24 hover:bg-red-300 hover:border-red-300";

	return (
		<div className="flex flex-1">

			<div className="flex flex-1 flex-col w-1/2 m-6">

				<div className="flex flex-1 justify-between">
					{/* {console.log(state)} */}

					<div className="flex flex-col items-center w-32">

						{/* <button
							className={channelData[0].value > 0 ? `${toggleButtonOn}` : `${toggleButton}`}
							onClick={handleToggleButton}
						>
							{channelData[0].name.toUpperCase()}<br />{channelData[0].value > 0 ? "On" : "Off"}
						</button> */}

						<label className="text-center text-red-500 text-xl py-2 px-2 m-4">{
							channelData[0].name.toUpperCase()}
							<br />
							{channelData[0].value.toFixed(3)}
						</label>

						<Slider
							sx={{
								color: "red",
								height: "100%",
								'& .MuiSlider-thumb': {
									borderRadius: '0.25rem',
									height: "1.5rem",
									width: "3.0rem"
								},
								'& .MuiSlider-rail': {
									borderRadius: '0.25rem',
									width: "1.0rem"
								},
								'& .MuiSlider-track': {
									width: "0.5rem"
								}
							}}
							orientation="vertical"
							min={0.000}
							max={1.000}
							step={0.001}
							value={channelData[0].value}
							onChange={debounce(handleColorChange)}
						/>

					</div>
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

				{/* <CovePresetButtons
					presets={presets}
					channelState={state}
					setState={setState}
					setMasterValue={setMasterValue}
				//setIsEditOpen={setIsEditOpen}
				/>

				<FadeRateSelect
					duration={duration}
					setDuration={setDuration}
				/> */}

			</div>

		</div>
	);
};
