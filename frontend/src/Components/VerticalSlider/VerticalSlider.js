import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { baseAPI } from '../../userConfig/baseAPI';


const VerticalCoveSlider2 = ({ coveColor, color, setLevel, level }) => {

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

	const coveButton = "bg-black border-red-500 border-2 text-red-500 text-xl rounded-xl w-24 hover:border-red-300 hover:text-red-300";
	const coveButtonOn = "bg-red-500 border-red-500 border-2 text-black text-xl rounded-xl w-24 hover:bg-red-300 hover:border-red-300";

    return (

        <div className="flex flex-col items-center w-32">

            <button
                className={isOff ? `${coveButton}` : `${coveButtonOn}`}
                onClick={() => {
                    if (level > 0) {
                        setTemp(level);
                        setLevel(0);
                        setIsOff(true);
                    } else {
                        if (temp === 0) {
                            setTemp(255);
                            setLevel(255);
                        } else {
                            setLevel(temp);
                        }
                        setIsOff(false);
                    }
                }}
            >
                {coveColor} {isOff ? "On" : "Off"}
            </button>

            <label
				className="text-red-500 text-2xl m-4">
					{coveColor}
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
                    },
                    '& input[type="range"]': {
                        WebkitAppearance: 'slider-vertical',
                    },
                }}
                orientation="vertical"
                min={0}
                max={1.000}
                step={0.001}
                value={level}
                onChange={handleSliderChange}
            />

            <label className="cove-text">{level}</label>

        </div>

    );
}


export default VerticalCoveSlider2;