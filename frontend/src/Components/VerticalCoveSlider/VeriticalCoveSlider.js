import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { baseAPI } from '../../userConfig/baseAPI';


const VerticalCoveSlider = ({ coveColor, color, setLevel, level }) => {

	const [isOff, setIsOff] = useState(true);
	const [temp, setTemp] = useState(0);

	// Moved code to external function because it has more code than previously.
	const handleSliderChange = (event) => {
		setLevel(event.target.value);
		if (event.target.value > 0) setIsOff(false);
		if (event.target.value === 0) {
			setTemp(0);
			setIsOff(true);
		}

		let data = {
			"channel": coveColor,
			"level": event.target.value
		};

		try {
		   baseAPI.post('colorChangeSlider', data)
		       .then((res) => {
		           console.log(res.data);
		       });
		} catch (error) {
		   console.log('Update color channel failed.', error);
		};
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

	const handleToggleButton = () => {
		let newLevel;
		if (level > 0.000) {
			setTemp(level);
			newLevel = 0.000;
			setIsOff(true);
		} else {
			if (temp === 0.000) {
				setTemp(1.000);
				newLevel = 1.000;
			} else {
				setLevel(temp);
				newLevel = temp;
			}
			setIsOff(false);
		}
	};

	return (

		<div className="flex flex-col items-center">

			<button
				className={
					level > 0 ?
						"toggle-button-on mb-8" :
						"toggle-button mb-8"
				}

				onClick={handleToggleButton}
			>
				{coveColor.toUpperCase()}<br />{level > 0 ? "On" : "Off"}
			</button>

			<label className="text-xl text-red-500 mb-6">{
				coveColor.toUpperCase()}
			</label>

			<Slider
				sx={{
					color: { color },
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
				value={level}
				onChange={debounce(handleSliderChange)}
			/>

			<label className="text-xl text-red-500 mt-8">
				{level.toFixed(3)}
			</label>

		</div>

	);
};


export default VerticalCoveSlider;
