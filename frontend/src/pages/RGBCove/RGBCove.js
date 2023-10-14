import { useEffect, useState } from 'react';
import VerticalCoveSlider from '../../components/VerticalCoveSlider/VeriticalCoveSlider';
import VerticalSlider from '../../components/VerticalSlider/VerticalSlider'
import MasterSlider from '../../components/MasterSlider/MasterSlider';
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

            <div className="flex flex-col">

                <div className="flex h-full">

                    {/* <VerticalCoveSlider coveColor="Red" color="#bb0000" setLevel={setRed} level={red} /> */}
					<VerticalSlider coveColor="Red" color="#bb0000" setLevel={setRed} level={red} />

                    {/* <VerticalCoveSlider coveColor="Grn" color="#00bb00" setLevel={setGrn} level={grn} /> */}
					<VerticalSlider coveColor="Grn" color="#00bb00" setLevel={setGrn} level={grn} />

                    {/* <VerticalCoveSlider coveColor="Blu" color="#0077bb" setLevel={setBlu} level={blu} /> */}
					<VerticalSlider coveColor="Blu" color="#0077bb" setLevel={setBlu} level={blu} />

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
