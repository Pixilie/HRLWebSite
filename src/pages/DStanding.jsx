import styles from './DStanding.module.css';

function DStanding() {
	return (

			<div className={styles.presentation}>

				<table className={styles.standing} rules="groups">
					<thead>
						<tr>
							<th colspan="4">
								Classement Pilote
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td align="center">
								Numéro
							</td>

							<td align="center">
								Nom du pilote
							</td>

							<td align="center">
								Écurie
							</td>

							<td align="center">
								Nombre de points
							</td>

						</tr>
						
						<tr>
							<td align="center">
								22
							</td>

							<td align="center">
								Gaëtan Desplanche
							</td>

							<td align="center">
								Mercedes AMG Petronas F1 Team
							</td>

							<td align="center">
								0
							</td>

						</tr>

						<tr>
							<td align="center">
								29
							</td>

							<td align="center">
								Noé Costa
							</td>

							<td align="center">
								Mercedes AMG Petronas F1 Team
							</td>

							<td align="center">
								0
							</td>

						</tr>

						<tr>
							<td align="center">
								76
							</td>

							<td align="center">
								Maxime Fratani
							</td>

							<td align="center">
								Redbull Racing Honda
							</td>

							<td align="center">
								0
							</td>

						</tr>

						<tr>
							<td align="center">
								21
							</td>

							<td align="center">
								Thomas Guillebon
							</td>

							<td align="center">
								Alpine Renault F1 Team
							</td>

							<td align="center">
								0
							</td>

						</tr>

						<tr>
							<td align="center">
								37
							</td>

							<td align="center">
								Thomas Bruno
							</td>

							<td align="center">
								Alpine Renault F1 Team
							</td>

							<td align="center">
								0
							</td>

						</tr>

						<tr>
							<td align="center">
								4
							</td>

							<td align="center">
								Louis Baudry
							</td>

							<td align="center">
								Redbull Racing Honda
							</td>

							<td align="center">
								0
							</td>

						</tr>
					</tbody>
				</table>
			</div>
	);
}

export default DStanding;
