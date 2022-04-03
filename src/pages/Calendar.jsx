import styles from './Calendar.module.css';
import bahrain from './images/bahrain.jpg'
import imola from './images/imola.jpg'
import spielberg from './images/spielberg.jpg'
import portimao from './images/portimao.jpg'
import silverstone from './images/silverstone.jpg'
import monza from './images/monza.jpg'
import spa from './images/spa.jpg'
import sepang from './images/sepang.jpg'
import interlagos from './images/interlagos.jpg'
import austin from './images/austin.jpg'

function Calendar() {
	return (
		<div className={styles.presentation}>

				<h1 className={styles.title}>Calendrier</h1>

				<div className={styles.Calendar}>

					<div className={styles.Race}>
						<img src={bahrain} alt="bahrain"/>
						<p>
							<span>Bahrain - Sakhir</span> <br/> 16 Avril 2022
						</p>
					</div>

					<div className={styles.Race}>
						<img src={imola} alt="imola"/>
						<p>
							<span>Italie - Imola</span> <br/> Date non-définie
						</p>
					</div>

					<div className={styles.Race}>
						<img src={spielberg} alt="spielberg"/>
						<p>
							<span>Autriche - Spielberg</span> <br/> Date non-définie
						</p>
					</div>

					<div className={styles.Race}>
						<img src={portimao} alt="portimao"/>
						<p>
							<span>Portugal - Portimao</span> <br/> Date non-définie
						</p>
					</div>

					<div className={styles.Race}>
						<img src={silverstone} alt="silverstone"/>
						<p>
							<span>Angleterre - Silverstone</span> <br/> Date non-définie
						</p>
					</div>

					<div className={styles.Race}>
						<img src={monza} alt="monza"/>
						<p>
							<span>Italie - Monza</span> <br/> Date non-définie
						</p>
					</div>

					<div className={styles.Race}>
						<img src={spa} alt="spa"/>
						<p>
							<span>Belgique - Spa Francorchamps</span> <br/> Date non-définie
						</p>
					</div>

					<div className={styles.Race}>
						<img src={sepang} alt="sepang"/>
						<p>
							<span>Malaisie - Sepang</span> <br/> Date non-définie
						</p>
					</div>

					<div className={styles.Race}>
						<img src={interlagos} alt="interlagos"/>
						<p>
							<span>Brésil - Interlagos</span> <br/> Date non-définie
						</p>
					</div>

					<div className={styles.Race}>
						<img src={austin} alt="austin"/>
						<p>
							<span>Etats-Unis - Austin</span> <br/> Date non-définie
						</p>
					</div>
				</div>
		</div>
	);
}

export default Calendar;
