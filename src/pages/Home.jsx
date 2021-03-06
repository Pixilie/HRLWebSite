import styles from './Home.module.css';
import ArticleOneImg from './images/ArticleOneImg.jpg';
import ArticleTwoImg from './images/ArticleTwoImg.jpg';

function Home() {
	return (
		<div className={styles.presentation}>
				<h1 className={styles.title}>Informations</h1>

				<div className={styles.ArticleOne}>
				<img src={ArticleOneImg} alt="ArticleOneImg" className={styles.ArticleOneImg}/>
					<div className={styles.AOText}>
							<p className={styles.AOTitle}>Grand Prix de Bahrain  </p>
							<p>
								Le premier grand prix de la saison aura lieu le 16 Avril 2022 sur le circuit de Sakhir.
								Les pilotes devront couvrir une distante de 150 km soit 27 tours dans des conditions pas très favorables en raison des tempêtes de sable ayant eût lieu ces derniers jours.
							</p>
					</div>
				</div>

				<div className={styles.ArticleTwo}>
				<img src={ArticleTwoImg} alt="ArticleTwoImg" className={styles.ArticleTwoImg}/>
					<div className={styles.ATText}>
							<p className={styles.ATTitle}>Desplanche Champion du monde  </p>
							<p>
								Gaëtan Desplanche et la Mercedes Driver Academy remporte les deux titres en Formule 2 2020 après une domination impressionnante tout au long de la saison! Une chose est sûr Mercedes part en favoris pour les titres mondiaux de F1.
							</p>
					</div>
				</div>
		</div>
	);
}

export default Home;
