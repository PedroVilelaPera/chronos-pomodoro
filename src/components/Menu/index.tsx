import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuButton} href='#'>
        <HouseIcon />
      </a>
      <a className={styles.menuButton} href='#'>
        <HistoryIcon />
      </a>
      <a className={styles.menuButton} href='#'>
        <SettingsIcon />
      </a>
      <a className={styles.menuButton} href='#'>
        <SunIcon />
      </a>
    </nav>
  );
}
