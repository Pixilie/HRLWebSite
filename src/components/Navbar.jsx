import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './Logo';

function Navbar() {
	return (
		<header className={styles.header}>
			<Logo />
			<h1 className={styles.pageName}>Hollow Racing League</h1>
			<nav className={styles.nav}>
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
			</nav>
		</header>
	);
}

export default Navbar;
