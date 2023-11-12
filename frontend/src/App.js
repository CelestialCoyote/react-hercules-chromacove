import { Route, Routes } from 'react-router-dom';
// import Nav from './components/Nav';
import NavFlowbite from './components/NavFlowbite';
import Footer from './components/Footer';
import Home from './pages/Home/home';
import RGBCove from './pages/RGBCove/RGBCove';
import StarMachineLamps from './pages/StarMachineLamps/StarMachineLamps';
import StarMachineMotions from './pages/StarMachineMotions/StarMachineMotions';


const App = () => {

	return (
		<div className="flex flex-col h-screen w-full">
			{/* <Nav /> */}
			<NavFlowbite />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/rgbcove" element={<RGBCove />} />
				<Route path="/starmachinelamps" element={<StarMachineLamps />} />
				<Route path="/starmachinemotions" element={<StarMachineMotions />} />
			</Routes>
			<Footer />
		</div>
	);
};


export default App;
