import logo from '../hollowracing.png';
import styles from './Logo.module.css';

function Logo() {
  // Import result is the URL of your image
  return <img src={logo} alt="hrl-logo" className={styles.img}/>;
}

export default Logo;