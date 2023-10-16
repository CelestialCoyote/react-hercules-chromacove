import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { baseAPI } from '../userConfig/baseAPI';


const CoveSliderVertical = ({ coveColor, color, setLevel, level }) => {

	const [isOff, setIsOff] = useState(true);
	const [temp, setTemp] = useState(0);

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

	const handleToggleButton = () => {
		if (level > 0.000) {
			setTemp(level);
			setLevel(0.000);
			setIsOff(true);
		} else {
			if (temp === 0.000) {
				setTemp(1.000);
				setLevel(1.000)
			} else {
				setLevel(temp);
			}
			setIsOff(false);
		};
	};

	const coveButtonBase = "border-red-500 border-2 text-xl rounded-xl w-24";
	const coveButton = "bg-black text-red-500 hover:border-red-300 hover:text-red-300";
	const coveButtonOn = "bg-red-500 text-black hover:bg-red-300 hover:border-red-300";

	return (

		<div className="flex flex-col items-center">

			<button
                className={isOff ? 
					`${coveButtonBase} ${coveButton}`
					:
					`${coveButtonBase} ${coveButtonOn}`
				}
				onClick={handleToggleButton}
            >
                {coveColor} {isOff ? "On" : "Off"}
            </button>

			<label className="text-xl text-red-500 m-6">{
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


export default CoveSliderVertical;
