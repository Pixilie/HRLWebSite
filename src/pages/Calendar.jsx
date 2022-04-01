import styles from './Calendar.module.css';

function Calendar() {
	return (
		<div className={styles.presentation}>
				<h1 className={styles.title}>Calendrier</h1>
				<p className={styles.description}>Arrive bientôt</p>
		</div>
	);
}

export default Calendar;
