import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cove from './pages/Cove/Cove';
import RGBCove from './pages/RGBCove/RGBCove';
import CoveControl from './pages/CoveControl/CoveControl';
import StarMachineLamps from './pages/StarMachineLamps/StarMachineLamps';
import StarMachineMotions from './pages/StarMachineMotions/StarMachineMotions';


const App = () => {

	return (
		<div className="flex flex-col h-screen w-full">
			<Nav />
			<Routes>
				<Route path="/cove" element={<Cove />} />
				<Route path="/rgbcove" element={<RGBCove />} />
				<Route path="/covecontrol" element={<CoveControl />} />
				<Route path="/starmachinelamps" element={<StarMachineLamps />} />
				<Route path="/starmachinemotions" element={<StarMachineMotions />} />
			</Routes>
			<Footer />
		</div>
	);
};


export default App;
