import styles from './Footer.module.css';
import DiscordLogo from './images/discord_logo.png';
import InstagramLogo from './images/logo-instagram.png';

function Footer() {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Social}>
				<img
					src={DiscordLogo}
					alt="DiscordLogo"
					className={styles.SocialLogo}
				/>
				<a
					href="https://discord.gg/HEB6MdXqmM"
					target="_blank"
					rel="noreferrer"
				>
					Rejoignez-nous sur Discord
				</a>
			</div>
			<div className={styles.Social}>
				<img
					src={InstagramLogo}
					alt="InstagramLogo"
					className={styles.SocialLogo}
				/>
				<a
					href="https://www.instagram.com/hollowracingleague/"
					target="_blank"
					rel="noreferrer"
				>
					Rejoignez-nous sur Instagram
				</a>
			</div>
		</footer>
	);
}

export default Footer;
