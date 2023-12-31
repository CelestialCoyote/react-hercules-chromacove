import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { baseAPI } from '../userConfig/baseAPI';


export default function SliderMaster({ color, rgbChannels, masterValue, setMasterValue, duration }) {

	const [isOff, setIsOff] = useState(false);
	const [temp, setTemp] = useState(1.000);

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
			"red": (rgbChannels[0].value * currentValue).toFixed(3),
			"grn": (rgbChannels[1].value * currentValue).toFixed(3),
			"blu": (rgbChannels[2].value * currentValue).toFixed(3),
			"duration": channelDuration
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

	const handleColorChange = (event) => {
		setMasterValue(event.target.value);

		if (event.target.value > 0.000) setIsOff(false);
		if (event.target.value === 0.000) {
			setTemp(0);
			setIsOff(true);
		}

		sendColorData(event.target.value, true);
	};

	const handleToggleButton = () => {
		let newLevel;
		if (masterValue > 0.000) {
			setTemp(masterValue);
			setMasterValue(0.000);
			newLevel = 0.000;
		} else {
			if (temp === 0.000) {
				setTemp(1.000);
				setMasterValue(1.000);
				newLevel = 1.000;
			} else {
				setMasterValue(temp);
				newLevel = temp;
			}
		}

		sendColorData(newLevel);
	};

	const toggleButton = "bg-black border-red-500 border-2 text-red-500 text-xl rounded-xl p-1 w-32 hover:border-red-300 hover:text-red-300";
	const toggleButtonOn = "bg-red-500 border-red-500 border-2 text-black text-xl rounded-xl p-1 w-32 hover:bg-red-300 hover:border-red-300";

	return (
		<div className="flex flex-col items-center">
			<h3 className="text-red-500 text-xl text-center mt-4">
				Master / Intensity
			</h3>

			<div className="flex items-center w-full mt-4 mb-6">
				<Slider
					sx={{
						color: { color },
						width: "100%",
						'& .MuiSlider-thumb': {
							borderRadius: '0.25rem',
							height: "3.0rem",
							width: "1.5rem"
						},
						'& .MuiSlider-rail': {
							borderRadius: '0.25rem',
							height: "1.0rem"
						},
						'& .MuiSlider-track': {
							height: "0.5rem"
						}
					}}
					defaultValue={0.000}
					min={0.000}
					max={1.000}
					step={0.001}
					value={masterValue}
					onChange={debounce(handleColorChange)}
				/>

				<h3 className="text-red-500 text-lg text-center pl-6">
					{masterValue.toFixed(3)}
				</h3>
			</div>

			<button
				className={isOff ? toggleButton : toggleButtonOn}
				onClick={handleToggleButton}
			>
				Master {isOff ? "Off" : "On"}
			</button>
		</div>
	);
};
