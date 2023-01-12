import logo from 'assets/logo2.png';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export default function Menu() {
  const rotas = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }];
  return (
    <nav className={styles.menu}>
      <img className={styles.logo} src={logo} alt="logo do restaurante"/>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>

          </li>
        ))}
      </ul>
    </nav>
  );
}