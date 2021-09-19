import { useState } from 'react';
import Link from 'next/link'; 
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { attributes } from '../content/header.md';
import styles from './header.module.css';

export default function Header() {
  const router = useRouter();

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
        <Link href="/">
          <a>
            <h1 id={styles.title}>{title}</h1>
            <h2 id={styles.subtitle}>{subtitle}</h2>
          </a>
        </Link>
      }

      {
        <div className={menuExpanded ? styles.menuExpanded : styles.menuCollapsed}>
          <ul className={styles.navigation}>
            {navigation.map((link) => (
              <li>
                <Link href={link.link}>
                  <a className={router.pathname == link.link ? styles.active : styles.inactive}>
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }

      <Link href="/">
        <img id={styles.largeLogo} src="/img/logo.png" />
      </Link>
    </header>
  )
}