import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<a href="https://discord.gg/HEB6MdXqmM" target='_blank' rel="noreferrer">
				Rejoignez-nous sur Discord
			</a>
            <a href="https://www.instagram.com/hollowracingleague/" target="_blank" rel="noreferrer">
				Rejoignez-nous sur Instagram
			</a>
		</footer>
	);
}

export default Footer;
