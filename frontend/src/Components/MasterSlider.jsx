import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { baseAPI } from '../userConfig/baseAPI';


const MasterSlider = ({ color, channelData, channelState, masterValue, setMasterValue, duration }) => {

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

    const sendColorData = (data) => {
        const allColorData =[]
        Object.values(channelState).forEach(channel => {
            allColorData.push(channel);
        });
        allColorData.push(data);
        console.log(`master allData: ${JSON.stringify(allColorData)}`);

        try {
           baseAPI.post('masterChange', allColorData)
               .then((res) => {
                   console.log(res.data);
               });
        } catch (error) {
           console.log('Update color channel failed.', error);
        };
    };

    const handleToggleButton = (event) => {
        let newLevel;
        if (masterValue > 0.000) {
            setTemp(masterValue);
            setMasterValue(0.000);
            setIsOff(true);
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
            setIsOff(false);
        }

        let data = {
            "name": "master",
            "value": newLevel,
            "duration": duration
        };

        sendColorData(data);
    };

    const handleColorChange = (event) => {
        setMasterValue(event.target.value);
        if (event.target.value > 0.000) setIsOff(false);
        if (event.target.value === 0.000) {
            setTemp(0);
            setIsOff(true);
        }

        let data = {
            "name": "master",
            "value": event.target.value,
            "duration": 0
        };

        sendColorData(data);
    };

	const masterButtonBase = "border-red-500 border-2 text-xl rounded-xl w-32";
	const masterButton = "bg-black text-red-500 hover:border-red-300 hover:text-red-300";
	const masterButtonOn = "bg-red-500 text-black hover:bg-red-300 hover:border-red-300";

    return (
        <div className="flex flex-col items-center w-full">

            <label
				className="text-red-500 text-center text-2xl mt-2 mb-2"
			>
				Master / Intensity
			</label>

            <div className="flex items-center p-2 w-full">
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

                <label
					className="text-red-500 text-center text-2xl ml-6"
				>
					{masterValue.toFixed(3)}
				</label>

            </div>

            <button
				className={isOff ? 
					`${masterButtonBase} ${masterButton}`
					:
					`${masterButtonBase} ${masterButtonOn}`
				}
                onClick={handleToggleButton}
            >
                Master {isOff ? "Off" : "On"}
            </button>

        </div>

    );
}


export default MasterSlider;
