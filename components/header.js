import { useState } from 'react';
import Link from 'next/link'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { attributes } from '../content/header.md';
import styles from './header.module.css';

export default function Header() {
  let { navigation, title, subtitle } = attributes;
  
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <header id={styles.root}>
      <div id={styles.topBar}>
        <FontAwesomeIcon id={styles.hamburger} icon={faBars} onClick={toggleMenu} />
        <Link href="/">
          <img id={styles.smallLogo} src="/img/logo.png" />
        </Link>
      </div>

      {
        <div>
          <h1 id={styles.title}>{title}</h1>
          <h2 id={styles.subtitle}>{subtitle}</h2>
        </div>
      }

      {
        <div className={menuExpanded ? styles.menuExpanded : styles.menuCollapsed}>
          <ul className={styles.navigation}>
            {navigation.map((link) => (
              <li>
                <a href={link.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      }

      <img id={styles.largeLogo} src="/img/logo.png" />

    </header>
  )
}