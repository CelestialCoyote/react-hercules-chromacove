import { useEffect, useState } from 'react';
import { baseAPI } from '../../userConfig/baseAPI';
//import PresetInput from '../PresetInput/PresetInput';
import './CovePresetsModal.css';


const CovePresetsModal = ({ setEditOpen, rgbState, setRGBState, presets, setPresets, setMasterValue }) => {

    // Create a copy of all channels state, so sliders do not change prematurely.
    // Represents all available channels.
    //const [tempState, setTempState] = useState(JSON.parse(JSON.stringify(rgbState)));
    // When component loads, set selected preset to first in array.
    // Update selectedPreset as preset button is selected. 
    //const [selectedPreset, setSelectedPreset] = useState(presets[0]);
    // Create object to hold channels defined in presetSelected.
    //const [presetChannels, setPresetChannels] = useState([]);
    // Create a temp object to preset info as it is edited.
    // const [tempPreset, setTempPreset] = useState({
    //     "preset": selectedPreset.preset,
    //     "label": "",
    //     "channels": {},
    //     "master": "",
    //     "duration": ""
    // });

    // const selectPresetToEdit = (selected) => {
    //     // Set className to toggle preset button selected.
    //     setSelectedPreset(presets[selected]);

    //     presetData(selected);
    // };

    // const getAllChannels = (preset) => {
    //     // Copy channelState to array of objects.
    //     const allChannels = [];
    //     Object.values(tempState).forEach(channel => {
    //         allChannels.push(channel);
    //     });

    //     // Reset value key to 0 before inputing Preset data.
    //     // Otherwise previous values could be in channels not used by current preset.
    //     allChannels.forEach(channel => channel.value = 0);

    //     // Preset < 0, means all channel values should be 0.
    //     if (preset < 0) {
    //         return allChannels;
    //     } else {
    //         // Create object to hold channels and values used by preset.
    //         const presetChannelsUsed = preset.channels;

    //         // For every color in Preset adjust the color value in allChannels.
    //         Object.keys(presetChannelsUsed).forEach(preset => {
    //             allChannels.forEach(channel => {
    //                 if (channel.name === preset.toLowerCase())
    //                     channel.value = presetChannelsUsed[preset];
    //             });
    //         });

    //         return allChannels;
    //     };
    // };

    // const presetData = (selected) => {
    //     // Get all channels in use.
    //     const allChannels = getAllChannels(presets[selected]);

    //     // Update tempState channels to hold values contained in presetSelected.
    //     // Any channels not listed in preset will be set to 0.
    //     allChannels.forEach(channel => {
    //         setTempState(prevState => (
    //             { ...prevState, [channel.id]: { ...prevState[channel.id], value: channel.value } }
    //         ));
    //     });

    //     setPresetChannels(allChannels);

    //     // Set tempPreset with selected preset values.
    //     setTempPreset(previousInput => ({
    //         ...previousInput,
    //         preset: presets[selected].preset,
    //         label: presets[selected].label,
    //         master: presets[selected].master,
    //         duration: presets[selected].duration,
    //         channels: presets[selected].channels
    //     }));
    // };

    // const handleLabelChange = (event) => {
    //     setTempPreset(previousInput => ({ ...previousInput, label: event.target.value }));
    //     console.log(tempPreset);
    // };

    // const handleMasterValueChange = (event) => {
    //     let value = event.target.value;

    //     if (isNaN(value)) {
    //         value = 0.000;
    //     } else if (value > 1.000) {
    //         value = 1.000;
    //     }

    //     event.target.value = Number(value).toFixed(3);

    //     setTempPreset(previousInput => ({ ...previousInput, master: value }));
    // };

    // const handleDurationChange = (event) => {
    //     let value = event.target.value;

    //     if (isNaN(value) || value < 0) {
    //         value = 0.0;
    //     } else if (value > 999.9) {
    //         value = 999.9;
    //     }

    //     setTempPreset(previousInput => ({ ...previousInput, duration: value }));
    // };

    // const handleChannelValueChange = (event) => {
    //     let value = event.target.value;
    //     let name = event.target.name;

    //     if (isNaN(value)) {
    //         value = 0.000;
    //     } else if (value > 1.000) {
    //         value = 1.000;
    //     }

    //     setTempPreset(previousInput => ({ ...previousInput, channels: { ...previousInput.channels, [name]: value } }));
    //     console.log(`channelName: ${name}, value: ${value}`);
    // };

    // const testChanges = (preset) => {
    //     // Get all channels in use.
    //     const allChannels = getAllChannels(preset);

    //     // Update the sliders to match Preset selected.
    //     allChannels.forEach(channel => {
    //         setTempState(prevState => (
    //             { ...prevState, [channel.id]: { ...prevState[channel.id], value: channel.value } }
    //         ));
    //     });

    //     // Set Master slider state.
    //     setMasterValue(parseFloat(preset.master));

    //     let masterData = {
    //         "name": "master",
    //         "value": preset.master,
    //         "duration": preset.duration
    //     };

    //     allChannels.push(masterData);
    //     sendData(allChannels);
    // };

    // const discardChanges = () => {
    //     // Get all channels in use.
    //     const allChannels = getAllChannels(-1);

    //     // Update the sliders to match Preset selected.
    //     allChannels.forEach(channel => {
    //         setTempState(prevState => (
    //             { ...prevState, [channel.id]: { ...prevState[channel.id], value: channel.value } }
    //         ));
    //     });

    //     // Set Master slider state to default.
    //     setMasterValue(1.000);

    //     let masterData = {
    //         "name": "master",
    //         "value": 1.000,
    //         "duration": 3.0
    //     };

    //     allChannels.push(masterData);
    //     sendData(allChannels);
    //     presetData(selectedPreset.id);
    // };

    // const saveChanges = (preset) => {
    //     // Get all channels in use.
    //     const allChannels = getAllChannels(preset);

    //     // Update the sliders to match Preset selected.
    //     allChannels.forEach(channel => {
    //         setRGBState(prevState => (
    //             { ...prevState, [channel.id]: { ...prevState[channel.id], value: parseFloat(channel.value) } }
    //         ));
    //     });

    //     // Set Master slider state.
    //     setMasterValue(parseFloat(preset.master));

    //     let masterData = {
    //         "name": "master",
    //         "value": preset.master,
    //         "duration": preset.duration
    //     };

    //     allChannels.push(masterData);
    //     sendData(allChannels);

    //     try {
    //         baseAPI.post('presets', preset)
    //             .then((res) => {
    //                 setPresets(res.data);
    //             });
    //     } catch (error) {
    //         console.log('Update color channel failed.', error);
    //     };
    // };

    // const sendData = (allChannels) => {
    //     try {
    //         baseAPI.post('presetButton', allChannels)
    //             .then((res) => {
    //                 console.log(res.data);
    //             });
    //     } catch (error) {
    //         console.log('Preset button change failed.', error);
    //     }
    // };

    // useEffect(() => {
    //     presetData(selectedPreset.id);
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

	 const editPreset = "bg-black border-red-500 border-2 rounded-xl";
	//  {
	// 	background-color: black;
	// 	border: 2px solid red;
	// 	border-radius: 0.75rem;
	// 	color: red;
	// 	font-size: 1.25rem;
	// 	height: 2.5rem;
	// 	width: 6.5rem;
	// }
	
	const editPresetOn = "bg-red-300";
	// .edit-preset-button-on {
	// 	background-color: red;
	// 	border: 2px solid red;
	// 	border-radius: 0.75rem;
	// 	color: black;
	// 	font-size: 1.25rem;
	// 	height: 2.5rem;
	// 	width: 6.5rem;
	// }

    return (
        <div className="edit-presets-modal">

            <label className="edit-presets-modal-label">Edit Cove Presets</label>

            <div className="edit-selection">

                <div className="edit-preset-button-grid">

                    {presets.map(preset =>
                        <button
                            key={preset.id}
                            className={preset.id === preset.id ? "edit-preset-button-on" : "edit-preset-button"}
                            //onClick={() => { selectPresetToEdit(preset.id) }}
                        >
                            {preset.label}
                        </button>
                    )}

                </div>

                {/* <div className="edit-settings">

                    <label className="edit-settings-label">Edit Preset Values</label>

                    <div className="edit-selected-label">
                        <label className="edit-settings-label-medium">Currently Selected:</label>
                        <label className="edit-selected-number">{selectedPreset.preset}</label>
                    </div>

                    <div className="preset-value">

                        <div className="preset-input">

                            <label className="input-label">
                                Label:
                            </label>

                            <input
                                className="preset-input-value"
                                type="text"
                                name="label"
                                maxLength={10}
                                placeholder={selectedPreset.label}
                                value={tempPreset.label}
                                onChange={handleLabelChange}
                            />

                        </div>

                        <div className="preset-input">

                            <label className="input-label">
                                Master:
                            </label>

                            <input
                                className="preset-input-value"
                                type="text"
                                name="masterValue"
                                min="0.000"
                                max="1.000"
                                step="0.001"
                                maxLength={5}
                                placeholder={selectedPreset.master}
                                value={tempPreset.master}
                                onChange={handleMasterValueChange}
                            />

                        </div>

                        <div className="preset-input">

                            <label className="input-label">
                                Duration:
                            </label>

                            <input
                                className="preset-input-value"
                                type="text"
                                name="durationValue"
                                min="0.0"
                                max="999.0"
                                step="0.1"
                                maxLength={5}
                                placeholder={selectedPreset.duration}
                                value={tempPreset.duration}
                                onChange={handleDurationChange}
                            />

                        </div>

                    </div>

                    <label className="edit-settings-label-medium">Channels Available:</label> */}

                    {/*<div>

                        {presetChannels.map(channel =>
                            <PresetInput
                                key={channel.id}
                                label={channel.name}
                                value={channel.value}
                                onChange={handleColorValueChange}
                            />
                        )}

                    </div>

                    <div>*/}

                        {/* {presetChannels.map(channel =>
                            <div className="preset-input" key={channel.id}>

                                <label className="input-label">
                                    {channel.name}
                                </label>

                                <input
                                    className="preset-input-value"
                                    type="text"
                                    name={channel.name}
                                    min="0.000"
                                    max="1.000"
                                    step="0.001"
                                    maxLength={5}
                                    placeholder={channel.value}
                                    value={tempPreset.channels[channel.name] || "0.000"}
                                    onChange={handleChannelValueChange}
                                />

                            </div>
                        )}

                    </div>
                </div> */}
            </div>


            <div className="edit-presets-buttons">

                {/* <button
                    className="edit-button"
                    onClick={() => { testChanges(tempPreset) }}
                >
                    Test
                </button> */}

                {/* <button
                    className="edit-button"
                    onClick={() => { discardChanges() }}
                >
                    Discard
                </button> */}

                {/* <button
                    className="edit-button"
                    onClick={() => { saveChanges(tempPreset) }}
                >
                    Save
                </button> */}

                {/* <button
                    className="edit-button"
                    onClick={() => setEditOpen(false)}
                >
                    Done
                </button> */}
            </div>
        </div>
    );
};


export default CovePresetsModal;


/*
Modal tutorial:

https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc
*/