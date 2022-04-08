import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './images/hollowracing.png';

function Navbar() {
	return (
		<nav className={styles.header}>
			<img src={logo} alt="hrl logo" className={styles.Logo} />
			<h1 className={styles.pageName}>Hollow Racing League</h1>
			<div className={styles.nav}>
				<Link to="/" className={styles.navButton}>
					Accueil
				</Link>
				<Link to="/d-standing" className={styles.navButton}>
					Classement Pilote
				</Link>
				<Link to="/c-standing" className={styles.navButton}>
					Classement Constructeur
				</Link>
				<Link to="/calendar" className={styles.navButton}>
					Calendrier
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
