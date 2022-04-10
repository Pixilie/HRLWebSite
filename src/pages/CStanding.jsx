import styles from './CStanding.module.css';

const constructor = [
	{
		team: 'Mercedes AMG Petronas F1 Team',
		points: '0',
	},
	{
		team: 'Redbull Racing Honda',
		points: '0',
	},
	{
		team: 'Alpine Renault F1 Team',
		points: '0',
	},
];

function Constructor(props) {
	return (
		<tr>
			<td align="center">{props.team}</td>

			<td align="center">{props.points}</td>
		</tr>
	);
}

function CStanding() {
	return (
		<div className={styles.presentation}>
			<table className={styles.standing} rules="groups">
				<thead>
					<tr>
						<th colSpan="2">Classement Constructeur</th>
					</tr>
				</thead>
				<tbody>
					<tr className={styles.Seclign}>
						<td align="center">Écurie</td>

						<td align="center">Nombre de points</td>
					</tr>

					{constructor.map((list) => (
						<Constructor {...list} key={list.team} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default CStanding;
