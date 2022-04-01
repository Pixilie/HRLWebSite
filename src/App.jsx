import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import CStanding from './pages/CStanding';
import DStanding from './pages/DStanding';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/c-standing" element={<CStanding />} />
				<Route path="/d-standing" element={<DStanding />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
