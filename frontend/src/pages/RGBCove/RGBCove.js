import { useState } from 'react';
import CoveSliderVertical from '../../components/CoveSliderVertical/CoveSliderVerical';
import MasterSlider from '../../components/MasterSlider/MasterSlider';


const RGBCove = () => {

    const [red, setRed] = useState(0);
    const [grn, setGrn] = useState(0);
    const [blu, setBlu] = useState(0);

    const [masterValue, setMasterValue] = useState(1.000);
    const [duration, setDuration] = useState(3);
    const [channelData, setChannelData] = useState([]);

    return (
        <div className="flex flex-1 flex-col w-1/2 m-6">

            <div className="flex flex-1 flex-col">

                <div className="flex h-full justify-between">
					<CoveSliderVertical coveColor="Red" color="#bb0000" setLevel={setRed} level={red} />
					<CoveSliderVertical coveColor="Grn" color="#00bb00" setLevel={setGrn} level={grn} />
					<CoveSliderVertical coveColor="Blu" color="#0077bb" setLevel={setBlu} level={blu} />
                </div>

                <div className="flex flex-col mt-4">

                    <MasterSlider
                        channelData={channelData}
                        //channelState={state}
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
