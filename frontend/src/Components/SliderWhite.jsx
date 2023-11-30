import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { baseAPI } from '../userConfig/baseAPI';


export default function SliderWhite({ color, state, setState, master, duration }) {
	const [temp, setTemp] = useState(0.000);

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
			"wht": currentValue,
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
		setState(event.target.value);

		if (event.target.value === 0.000) setTemp(0);

		sendColorData(event.target.value, true);
	};

	const handleToggleButton = () => {
		let newLevel;
		if (state > 0.000) {
			setTemp(state);
			setState(0.000);
			newLevel = 0.000;
		} else {
			if (temp === 0.000) {
				setTemp(1.000);
				setState(1.000);
				newLevel = 1.000;
			} else {
				setState(temp);
				newLevel = temp;
			};
		};

		sendColorData(newLevel, false);
	};

	const toggleButton = "bg-black border-red-500 border-2 text-red-500 text-md rounded-xl p-1 w-24 hover:border-red-300 hover:text-red-300";
	const toggleButtonOn = "bg-red-500 border-red-500 border-2 text-black rounded-xl p-1 w-24 hover:bg-red-300 hover:border-red-300";

	return (
		<div className="flex flex-col items-center w-32">

			<button
				className={state > 0 ? `${toggleButtonOn}` : `${toggleButton}`}
				onClick={handleToggleButton}
			>
				WHT {state > 0 ? "On" : "Off"}
			</button>

			<h3 className="text-center text-red-500 text-xl py-2 px-2 m-4">
				WHT<br />{state.toFixed(3)}
			</h3>

			<Slider
				sx={{
					color: {color},
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
					},
					'& input[type="range"]': {
						WebkitAppearance: 'slider-vertical',
					},
				}}
				orientation="vertical"
				defaultValue={0.000}
				min={0.000}
				max={1.000}
				step={0.001}
				value={state}
				onChange={debounce(handleColorChange)}
			/>

		</div >
	);
};
