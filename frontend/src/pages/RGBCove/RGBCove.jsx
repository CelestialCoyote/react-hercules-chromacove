import { useState } from 'react';
import SliderVertical from '../../components/SliderVertical';
import SliderMaster from '../../components/SliderMaster';
import SliderWhite from '../../components/SliderWhite';
import CovePresetButtons from '../../components/CovePresetButtons';
import FadeRateSelect from '../../components/FadeRateSelect';
import rgbChannels from '../../userConfig/channels.json'
import Presets from '../../userConfig/presets.json';
import CovePresetsModal from "../../components/CovePresetsModal/CovePresetsModal";


export default function RGBCove() {
	const [rgbState, setRGBState] = useState(rgbChannels);
	const [whtValue, setWhtValue] = useState(0.000);
	const [masterValue, setMasterValue] = useState(1.000);
	const [duration, setDuration] = useState(3);
	const [presets, setPresets] = useState(Presets);
	const [editOpen, setEditOpen] = useState(false);

	return (
		<>
			{!editOpen &&
				<div className="flex h-screen p-6 gap-10 mt-12">
					<div className="flex flex-col w-1/2">
						<div className="flex h-full justify-between">
							{rgbChannels.map(channel =>
								<SliderVertical
									key={channel.id}
									coveColor={channel.name}
									color={channel.color}
									channelState={rgbState[channel.id]}
									rgbChannels={rgbState}
									setRGBState={setRGBState}
									masterValue={masterValue}
									duration={duration}
								/>
							)}
						</div>

						<div className="flex flex-col mt-4 h-48">
							<SliderMaster
								color="#886622"
								rgbChannels={rgbState}
								setMasterValue={setMasterValue}
								masterValue={masterValue}
								duration={duration}
							/>
						</div>
					</div>

					<div className="w-1/2">
						<CovePresetButtons
							presets={presets}
							rgbState={rgbState}
							setRGBState={setRGBState}
							setMasterValue={setMasterValue}
							setEditOpen={setEditOpen}
						/>

						<FadeRateSelect
							duration={duration}
							setDuration={setDuration}
						/>
					</div>

					<div className="flex flex-col">
						<div className="flex h-full">
							<SliderWhite
								color="#888888"
								state={whtValue}
								setState={setWhtValue}
								setMaster={setMasterValue}
								master={masterValue}
								duration={duration}
							/>
						</div>

						<div className="mt-4 h-52"></div>
					</div>
				</div>
			}

			{editOpen &&
				<CovePresetsModal
					presets={presets}
					rgbState={rgbState}
					setRGBState={setRGBState}
					setMasterValue={setMasterValue}
					setEditOpen={setEditOpen}
				/>
			}
		</>
	);
};
