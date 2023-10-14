import { baseAPI } from '../../userConfig/baseAPI';
import './CovePresetButtons.css';


const CovePresetButtons = ({ presets, channelState, setState, setMasterValue, setIsEditOpen }) => {

    const sendPresetData = (preset) => {
        // Copy channelState to array of objects.
        const allChannels = [];
        Object.values(channelState).forEach(channel => {
            allChannels.push(channel);
        });

        // Reset value key to 0 before inputing Preset data.
        // Otherwise previous values could be in channels not used by current preset.
        allChannels.forEach(channel => channel.value = 0);

        // Create object to hold channels and values used by preset.
        const presetChannels = presets[preset].channels;

        // For every color in Preset adjust the color value in allChannels.
        Object.keys(presetChannels).forEach(preset => {
            allChannels.forEach(channel => {
                if (channel.name === preset.toLowerCase())
                    channel.value = presetChannels[preset];
            });
        });

        // Update the sliders to match Preset selected.
        allChannels.forEach(channel => {
            setState(prevState => (
                { ...prevState, [channel.id]: { ...prevState[channel.id], value: parseFloat(channel.value) } }
            ));
        });

        // Set Master slider state.
        setMasterValue(parseFloat(presets[preset].master));

        let masterData = {
            "name": "master",
            "value": presets[preset].master,
            "duration": presets[preset].duration
        };

        allChannels.push(masterData);

        try {
            baseAPI.post('presetButton', allChannels)
                .then((res) => {
                    console.log(res.data);
                });
        } catch (error) {
            console.log('Preset button change failed.', error);
        }
    };

    return (

        <div className="preset-buttons">

            <label className="presets-label">Cove Level Presets</label>

            <div className="preset-button-grid">
                {presets.map(preset =>
                    <button
                        key={preset.preset}
                        className="preset-button"
                        onClick={() => { sendPresetData(preset.id) }}
                    >
                        {preset.label}
                    </button>
                )}
            </div>

            <button
                className="edit-button"
                onClick={() => { setIsEditOpen(true) }}
            >
                Edit Presets
            </button>

        </div>

    );

};


export default CovePresetButtons;
