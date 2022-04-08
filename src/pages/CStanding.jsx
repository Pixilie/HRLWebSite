import styles from './CStanding.module.css';

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

					<tr>
						<td align="center">Mercedes AMG Petronas F1 Team</td>

						<td align="center">0</td>
					</tr>

					<tr>
						<td align="center">Redbull Racing Honda</td>

						<td align="center">0</td>
					</tr>

					<tr>
						<td align="center">Alpine Renault F1 Team</td>

						<td align="center">0</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default CStanding;
