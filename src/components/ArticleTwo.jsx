import logo from '../articletwo.jpg';
import styles from './ArticleTwo.module.css';

function ArticleTwo() {
  // Import result is the URL of your image
  return <img src={logo} alt="bahrain-gp" className={styles.ArticleTwo}/>;
}

export default ArticleTwo;