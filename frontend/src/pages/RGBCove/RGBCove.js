import { useEffect, useState } from 'react';
import CoveSliderVertical from '../../components/CoveSliderVerical';
import MasterSlider from '../../components/MasterSlider';
import { baseAPI } from '../../userConfig/baseAPI';


const RGBCove = () => {

    const [red, setRed] = useState(0);
    const [grn, setGrn] = useState(0);
    const [blu, setBlu] = useState(0);

	const [state, setState] = useState({});
    const [masterValue, setMasterValue] = useState(1.000);
    const [duration, setDuration] = useState(3);
    const [channelData, setChannelData] = useState([]);

	const DEFAULT_VAL = 0.000;


    const sendColorData = (currentValue, isSlider) => {
        const data = [];
        let channelDuration = 0.01;

        if (isSlider)
            channelDuration = 0.01;
        else
            channelDuration = duration;

        // data.push({
        //     "id": channelState.id,
        //     "name": channelState.name,
        //     "value": currentValue,
        //     "slider": channelState.slider
        // });
        data.push({ "name": "master", "value": masterValue, "duration": channelDuration });

        try {
            baseAPI.post('colorChange', data)
                .then((res) => {
                    console.log(JSON.stringify(res.data));
                });
        } catch (error) {
            console.log('Update color channel failed.', error);
        };
    };

    return (
        <div className="flex flex-1 flex-col w-1/2 m-6">

            <div className="flex flex-1 flex-col">

                <div className="flex h-full justify-between">
					<CoveSliderVertical
						coveColor="Red"
						color="#bb0000"
						setLevel={setRed}
						level={red}
					/>
					<CoveSliderVertical
						coveColor="Grn"
						color="#00bb00"
						setLevel={setGrn}
						level={grn}
					/>
					<CoveSliderVertical
						coveColor="Blu"
						color="#0077bb"
						setLevel={setBlu}
						level={blu}
					/>
                </div>

                <div className="flex flex-col mt-4">

                    <MasterSlider
                        channelData={channelData}
                        channelState={state}
                        setMasterValue={setMasterValue}
                        masterValue={masterValue}
                        duration={duration}
                    />

                </div>

            </div>

        </div>
    );
};


export default RGBCove;
