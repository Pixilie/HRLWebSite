import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import CStanding from './pages/CStanding';
import DStanding from './pages/DStanding';
import Home from './pages/Home';
import Calendar from './pages/Calendar';

import styles from './App.module.css';

function App() {
	return (
		<>
			<Navbar />

			<Page className={styles.Pages}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/c-standing" element={<CStanding />} />
					<Route path="/d-standing" element={<DStanding />} />
					<Route path="/calendar" element={<Calendar />} />
				</Routes>
			</Page>

			<Footer />
		</>
	);
}

function Page(props) {
	return <div className={styles.warpPage}>{props.children}</div>;
}

export default App;
