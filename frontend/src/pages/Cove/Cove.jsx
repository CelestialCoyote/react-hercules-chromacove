import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Slider } from '@mui/material';
import channels from '../../userConfig/channels.json';
import covePresets from '../../userConfig/presets.json';
import { baseAPI } from '../../userConfig/baseAPI';


export default function Cove() {

	const [presets, setPresets] = useState([]);
	const [editPresets, setEditPresets] = useState(false);
	const [redValue, setRedValue] = useState(0.000);
	const [grnValue, setGrnValue] = useState(0.000);
	const [bluValue, setBluValue] = useState(0.000);
	const [whtValue, setWhtValue] = useState(0.000);
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);

	const handleSliderChange = async () => {
		let data = {
			"redLevel": redValue,
			"grnLevel": grnValue,
			"bluLevel": bluValue,
			"whtLevel": whtValue,
			"masterLevel": masterValue
		};

		console.log(data);

		try {
            baseAPI.post('colorChange', data)
                .then((res) => {
                    console.log(res.data);
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        };
	};

	const handleButtonChange = async (colorChange) => {
		console.log(colorChange);

		try {
            baseAPI.post('colorChange', colorChange)
                .then((res) => {
                    console.log(res.colorChange);
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        };
	};


	return (
		<div className="h-screen">
			<div className="flex flex-col">
				<div className="flex justify-between border-2">
					<div className="flex flex-col h-96 items-center gap-6">
						<div className="flex flex-col gap-2">
							<button
								className="text-red-500 h-12 border-2 border-red-500 rounded-xl px-2"
								onClick={() => {
									setRedValue(1.000);
									handleButtonChange(
										[
											{ "red": 1.000 },
											{ "grn": -1 },
											{ "blu": -1 },
											{ "wht": -1 },
											{ "master": masterValue },
											{ "duration": duration }
										])
								}}
							>
								Red On
							</button>

							<button
								className="text-red-500 h-12 border-2 border-red-500 rounded-xl px-2"
								onClick={() => {
									setRedValue(0.000);
									handleButtonChange(
										[
											{ "red": 0.000 },
											{ "grn": -1 },
											{ "blu": -1 },
											{ "wht": -1 },
											{ "master": masterValue },
											{ "duration": duration }
										])
								}}
							>
								Red Off
							</button>

						</div>

						<label className="text-red-500">
							Red
						</label>

						<Slider
							sx={{
								color: "#bb0000",
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
							value={redValue}
							onChange={(e) => {
								setRedValue(e.target.value);
								handleSliderChange();
							}}
						/>

						<label className="text-red-500">
							{redValue.toFixed(3)}
						</label>
					</div>

					<div className="flex flex-col h-96 items-center gap-6">
						<div className="flex flex-col gap-2">
							<button
								className="text-green-500 h-12 border-2 border-green-500 rounded-xl px-2"
								onClick={() => {
									setGrnValue(1.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": 1.000 },
									// 		{ "grn": -1 },
									// 		{ "blu": -1 },
									// 		{ "wht": -1 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Grn On
							</button>

							<button
								className="text-green-500 h-12 border-2 border-green-500 rounded-xl px-2"
								onClick={() => {
									setGrnValue(0.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": 0.000 },
									// 		{ "grn": -1 },
									// 		{ "blu": -1 },
									// 		{ "wht": -1 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Grn Off
							</button>
						</div>

						<label className="text-green-500">
							Grn
						</label>

						<Slider
							sx={{
								color: "#00bb00",
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
							value={grnValue}
							onChange={(e) => {
								setGrnValue(e.target.value);
								//handleSliderChange();
							}}
						/>

						<label className="text-green-500">
							{grnValue.toFixed(3)}
						</label>
					</div>

					<div className="flex flex-col h-96 items-center gap-6">
						<div className="flex flex-col gap-2">
							<button
								className="text-blue-500 h-12 border-2 border-blue-500 rounded-xl px-2"
								onClick={() => {
									setBluValue(1.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": 1.000 },
									// 		{ "grn": -1 },
									// 		{ "blu": -1 },
									// 		{ "wht": -1 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Blu On
							</button>

							<button
								className="text-blue-500 h-12 border-2 border-blue-500 rounded-xl px-2"
								onClick={() => {
									setBluValue(0.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": 0.000 },
									// 		{ "grn": -1 },
									// 		{ "blu": -1 },
									// 		{ "wht": -1 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Blu Off
							</button>

						</div>

						<label className="text-blue-500">
							Blu
						</label>

						<Slider
							sx={{
								color: "#0000bb",
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
							value={bluValue}
							onChange={(e) => {
								setBluValue(e.target.value);
								//handleSliderChange();
							}}
						/>

						<label className="text-blue-500">
							{bluValue.toFixed(3)}
						</label>

					</div>

					<div className="flex flex-col h-96 items-center gap-6">
						<div className="flex flex-col gap-2">
							<button
								className="text-slate-300 h-12 border-2 border-slate-300 rounded-xl px-2"
								onClick={() => {
									setWhtValue(1.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": 1.000 },
									// 		{ "grn": -1 },
									// 		{ "blu": -1 },
									// 		{ "wht": -1 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Wht On
							</button>

							<button
								className="text-slate-300 h-12 border-2 border-slate-300 rounded-xl px-2"
								onClick={() => {
									setRedValue(0.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": 0.000 },
									// 		{ "grn": -1 },
									// 		{ "blu": -1 },
									// 		{ "wht": -1 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Wht Off
							</button>

						</div>

						<label className="text-slate-300">
							Wht
						</label>

						<Slider
							sx={{
								color: "#bbbbbb",
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
							value={whtValue}
							onChange={(e) => {
								setWhtValue(e.target.value);
								//handleSliderChange();
							}}
						/>

						<label className="text-slate-300">
							{whtValue.toFixed(3)}
						</label>

					</div>
				</div>

				<div className="flex flex-col items-center w-full gap-6 mt-8">

					<label
						className="text-orange-500"
					>
						Master / Intensity
					</label>

					<div className="flex w-3/4">

						<Slider
							sx={{
								color: "#aa5500",
								marginLeft: "1.5rem",
								marginRight: "1.5rem",
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
								},
								'& input[type="range"]': {
									WebkitAppearance: 'slider-vertical',
								},
							}}
							defaultValue={0.000}
							min={0.000}
							max={1.000}
							step={0.001}
							value={masterValue}
							onChange={(e) => {
								setMasterValue(e.target.value);
								//handleSliderChange();
							}}
						/>

						<div>

							<label
								className="text-orange-500"
							>
								{masterValue.toFixed(3)}
							</label>

						</div>

					</div>

					<div className="flex">

						<button
							className="border-orange-500 border-2 text-orange-500"
							onClick={() => {
								setMasterValue(1.000);
								// handleButtonChange(
								// 	[
								// 		{ "red": redValue },
								// 		{ "grn": grnValue },
								// 		{ "blu": bluValue },
								// 		{ "wht": whtValue },
								// 		{ "master": 1.000 },
								// 		{ "duration": duration }
								// 	])
							}}
						>
							Master On
						</button>

						<button
							className="border-orange-500 border-2 text-orange-500"
							onClick={() => {
								setMasterValue(0.000);
								// handleButtonChange(
								// 	[
								// 		{ "red": redValue },
								// 		{ "grn": grnValue },
								// 		{ "blu": bluValue },
								// 		{ "wht": whtValue },
								// 		{ "master": 0.000 },
								// 		{ "duration": duration }
								// 	])
							}}
						>
							Master Off
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
