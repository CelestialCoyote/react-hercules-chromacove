import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { baseAPI } from '../../userConfig/baseAPI';
import './VerticalSlider.css';


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

        // try {
        //     baseAPI.post('colorChangeSlider', data)
        //         .then((res) => {
        //             console.log(res.data);
        //         });
        // } catch (error) {
        //     console.log('Update color channel failed.', error);
        // };
    };

    return (

        <div className="cove-slider-group">

            <button
                className={isOff ? "cove-button" : "cove-button-on"}
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

            <label className="cove-text">{coveColor}</label>

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
//                onChange={(e) => {
//                    setLevel(e.target.value);
//                    if (e.target.value > 0) setIsOff(false);
//                    if (e.target.value === 0) {
//                        setTemp(0);
//                        setIsOff(true);
//                    }
//
//                    let data = {
//                        "channel": coveColor,
//                        "level": level
//                    };
//            
//                    try {
//                        baseAPI.post('colorChangeSlider', data)
//                            .then((res) => {
//                                console.log(res.data);
//                            });
//                    } catch (error) {
//                        console.log('Update color channel failed.', error);
//                    };
//                }}
                onChange={handleSliderChange}
            />

            <label className="cove-text">{level}</label>

        </div>

    );
}


export default VerticalCoveSlider2;