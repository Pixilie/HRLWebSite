import styles from './Home.module.css';

function Home() {
	return (
		<div className={styles.presentation}>
				<h1 className={styles.title}>Bienvenue</h1>
				<p className={styles.description}>
					Arrive bientôt
				</p>
		</div>
	);
}

export default Home;
