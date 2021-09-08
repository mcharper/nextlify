import Link from 'next/link'; 
import { attributes } from '../content/header.md';
import styles from './header.module.css';

export default function Header() {
  let { navigation, title, subtitle } = attributes;

  return (
    <header id={styles.root}>
      <Link href="/">
        <img id={styles.logo} src="/img/logo.png" />
      </Link>

      <div>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>

      <ul className={styles.navigation}>
        {navigation.map((link) => (
          <li>
            <a href={link.link}>{link.label}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}