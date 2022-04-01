import logo from '../bahrain.jpg';
import styles from './TrackPreview.module.css';

function TrackPreview() {
  // Import result is the URL of your image
  return <img src={logo} alt="bahrain-gp" className={styles.TrackPreview}/>;
}

export default TrackPreview;