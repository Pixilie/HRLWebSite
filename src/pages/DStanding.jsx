import styles from './DStanding.module.css';

const driver = [
	{
		number: '22',
		name: 'Gaëtan Desplanche',
		team: 'Mercedes AMG Petronas F1 Team',
		points: '0',
	},
	{
		number: '29',
		name: 'Noé Costa',
		team: 'Mercedes AMG Petronas F1 Team',
		points: '0',
	},
	{
		number: '76',
		name: 'Maxime Fratani',
		team: 'Redbull Racing Honda',
		points: '0',
	},
	{
		number: '21',
		name: 'Thomas Guillebon',
		team: 'Alpine Renault F1 Team',
		points: '0',
	},
	{
		number: '37',
		name: 'Thomas Bruno',
		team: 'Alpine Renault F1 Team',
		points: '0',
	},
	{
		number: '4',
		name: 'Louis Baudry',
		team: 'Redbull Racing Honda',
		points: '0',
	},
];

function Driver(props) {
	return (
		<tr>
			<td align="center">{props.number}</td>

			<td align="center">{props.name}</td>

			<td align="center">{props.team}</td>

			<td align="center">{props.points}</td>
		</tr>
	);
}

function DStanding() {
	return (
		<div className={styles.presentation}>
			<table className={styles.standing} rules="groups">
				<thead>
					<tr>
						<th colSpan="4">Classement Pilote</th>
					</tr>
				</thead>
				<tbody>
					<tr className={styles.Seclign}>
						<td align="center">Numéro</td>

						<td align="center">Nom du pilote</td>

						<td align="center">Écurie</td>

						<td align="center">Nombre de points</td>
					</tr>

					{driver.map((list) => (
						<Driver {...list} key={list.number} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default DStanding;
