import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logo from './components/Logo';

import CStanding from './pages/CStanding';
import DStanding from './pages/DStanding';
import Home from './pages/Home';
import Calendar from './pages/Calendar';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/c-standing" element={<CStanding />} />
				<Route path="/d-standing" element={<DStanding />} />
				<Route path="/calendar" element={<Calendar />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
