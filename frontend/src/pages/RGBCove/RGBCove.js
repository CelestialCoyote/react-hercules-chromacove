import { useEffect, useState } from 'react';
import VerticalCoveSlider from '../../Components/VerticalCoveSlider/VeriticalCoveSlider';
import MasterSlider from '../../Components/MasterSlider/MasterSlider';
import './RGBCove.css';


const RGBCove = () => {

    const [red, setRed] = useState(0);
    const [grn, setGrn] = useState(0);
    const [blu, setBlu] = useState(0);

    const [masterValue, setMasterValue] = useState(1.000);
    const [duration, setDuration] = useState(3);
    const [channelData, setChannelData] = useState([]);

    return (
        <div className="rgb-cove">

            <div className="all-channels">

                <div className="single-channel-container">

                    <VerticalCoveSlider coveColor="Red" color="#bb0000" setLevel={setRed} level={red} />

                    <VerticalCoveSlider coveColor="Grn" color="#00bb00" setLevel={setGrn} level={grn} />

                    <VerticalCoveSlider coveColor="Blu" color="#0077bb" setLevel={setBlu} level={blu} />

                </div>

                <div className="master-channel">

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
