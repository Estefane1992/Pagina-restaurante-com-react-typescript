import styles from './Footer.module.scss';
import logo from 'assets/logo2.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt='logo' />
    </footer>

  );
}