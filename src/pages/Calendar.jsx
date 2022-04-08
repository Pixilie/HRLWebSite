import styles from './Calendar.module.css';
import BahrainImg from './images/bahrain.jpg';
import ImolaImg from './images/imola.jpg';
import SpielbergImg from './images/spielberg.jpg';
import PortimaoImg from './images/portimao.jpg';
import SilverstoneImg from './images/silverstone.jpg';
import MonzaImg from './images/monza.jpg';
import SpaImg from './images/spa.jpg';
import SepangImg from './images/sepang.jpg';
import InterlagosImg from './images/interlagos.jpg';
import AustinImg from './images/austin.jpg';

const events = [
	{
		imgSrc: BahrainImg,
		imgAlt: 'bahrain',
		title: 'Bahrain - Sakhir',
		date: '16 Avril 2022',
		link: 'https://docs.google.com/document/d/1VabdzPGP7vJBqDtNIUk3rRX1Olg3aIhRD2sgtcTkdZg/edit?usp=sharing',
	},
	{
		imgSrc: ImolaImg,
		imgAlt: 'imola',
		title: 'Italie - Imola',
		date: '7 Mai 2022',
		link: '#',
	},
	{
		imgSrc: SpielbergImg,
		imgAlt: 'spielberg',
		title: 'Autriche - Spielberg',
		date: 'Non-définie',
		link: '#',
	},
	{
		imgSrc: PortimaoImg,
		imgAlt: 'portimao',
		title: 'Portugal - Portimao',
		date: 'Non-définie',
		link: '#',
	},
	{
		imgSrc: SilverstoneImg,
		imgAlt: 'silverstone',
		title: 'Angleterre - Silverstone',
		date: 'Non-définie',
		link: '#',
	},
	{
		imgSrc: MonzaImg,
		imgAlt: 'monza',
		title: 'Italie - Monza',
		date: 'Non-définie',
		link: '#',
	},
	{
		imgSrc: SpaImg,
		imgAlt: 'spa',
		title: 'Belgique - Spa-Francorchamps',
		date: 'Non-définie',
		link: '#',
	},
	{
		imgSrc: SepangImg,
		imgAlt: 'sepang',
		title: 'Malaisie - Sepang',
		date: 'Non-définie',
		link: '#',
	},
	{
		imgSrc: InterlagosImg,
		imgAlt: 'interlagos',
		title: 'Brésil - Interlagos',
		date: 'Non-définie',
		link: '#',
	},
	{
		imgSrc: AustinImg,
		imgAlt: 'austin',
		title: 'États-Unis - Austin',
		date: 'Non-définie',
		link: '#',
	},
];

function Event(props) {
	function handleClick() {
		window.location.href = props.link;
	}
	return (
		<div className={styles.Race} onClick={handleClick}>
			<img src={props.imgSrc} alt={props.imgAlt} />
			<h3>{props.title}</h3> <span>{props.date}</span>
		</div>
	);
}

function Calendar() {
	return (
		<div className={styles.presentation}>
			<h1 className={styles.title}>Calendrier</h1>

			<div className={styles.Calendar}>
				{events.map((event) => (
					<Event {...event} key={event.imgAlt} />
				))}
			</div>
		</div>
	);
}

export default Calendar;
