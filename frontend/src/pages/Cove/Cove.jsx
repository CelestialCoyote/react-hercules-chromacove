import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Slider } from '@mui/material';
import channels from '../../userConfig/channels.json';
import covePresets from '../../userConfig/presets.json';


export default function Cove() {

	const [presets, setPresets] = useState([]);
	const [editPresets, setEditPresets] = useState(false);
	const [redValue, setRedValue] = useState(0.000);
	const [grnValue, setGrnValue] = useState(0.000);
	const [bluValue, setBluValue] = useState(0.000);
	const [whtValue, setWhtValue] = useState(0.000);
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);

	return (
		<div className="h-screen">
			<div className="flex flex-col">
				<div className="flex p-6">
					<div className="flex flex-col h-96 items-center gap-6">
						<div className="flex flex-col gap-2">
							<button
								className="text-red-500 h-12 border-2 border-red-500 rounded-xl px-2"
								onClick={() => {
									setRedValue(1.000);
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
								Red On
							</button>

							<button
								className="text-red-500 h-12 border-2 border-red-500 rounded-xl px-2"
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
								Red Off
							</button>

						</div>

						<label
							className="text-red-500"
						>
							Red<br />{redValue.toFixed(3)}
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
								//handleSliderChange();
							}}
						/>

					</div>

					<div className="rgbw-slider-container">

						<div className="fade-buttons">

							<button
								className="cove-button grn-button"
								onClick={() => {
									setGrnValue(1.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": -1 },
									// 		{ "grn": 1.000 },
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
								className="cove-button grn-button"
								onClick={() => {
									setGrnValue(0.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": -1 },
									// 		{ "grn": 0.000 },
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

						<label
							className="slider-label slider-grn"
						>
							Grn<br />{grnValue.toFixed(3)}
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

					</div>

					<div className="rgbw-slider-container">

						<div className="fade-buttons">

							<button
								className="cove-button blu-button"
								onClick={() => {
									setBluValue(1.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": -1 },
									// 		{ "grn": -1 },
									// 		{ "blu": 1.000 },
									// 		{ "wht": -1 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Blu On
							</button>

							<button
								className="cove-button blu-button"
								onClick={() => {
									setBluValue(0.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": -1 },
									// 		{ "grn": -1 },
									// 		{ "blu": 0.000 },
									// 		{ "wht": -1 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Blu Off
							</button>

						</div>

						<label
							className="slider-label slider-blu"
						>
							Blu<br />{bluValue.toFixed(3)}
						</label>

						<Slider
							sx={{
								color: "#0077bb",
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

					</div>

					<div className="rgbw-slider-container">

						<div className="fade-buttons">

							<button
								className="cove-button wht-button"
								onClick={() => {
									setWhtValue(1.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": -1 },
									// 		{ "grn": -1 },
									// 		{ "blu": -1 },
									// 		{ "wht": 1.000 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Wht On
							</button>

							<button
								className="cove-button wht-button"
								onClick={() => {
									setWhtValue(0.000);
									// handleButtonChange(
									// 	[
									// 		{ "red": -1 },
									// 		{ "grn": -1 },
									// 		{ "blu": -1 },
									// 		{ "wht": 0.000 },
									// 		{ "master": masterValue },
									// 		{ "duration": duration }
									// 	])
								}}
							>
								Wht Off
							</button>

						</div>

						<label
							className="slider-label slider-wht"
						>
							Wht<br />{whtValue.toFixed(3)}
						</label>

						<Slider
							sx={{
								color: "#888888",
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

					</div>

				</div>

				<div className="master-control">

					<label
						className="cove-label"
					>
						Master / Intensity
					</label>

					<div className="master-container">

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
								className="slider-label"
							>
								{masterValue.toFixed(3)}
							</label>

						</div>

					</div>

					<div className="master-buttons">

						<button
							className="cove-button"
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
							className="cove-button"
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
