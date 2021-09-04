import { attributes } from '../content/header.md';
import styles from './header.module.css';

export default function Header() {
  let { navigation, title, subtitle } = attributes;

  return (
    <header id={styles.root}>
      <p>
        <img width="160" src="/img/logo.png" />
      </p>

      <ul className={styles.navigation}>
        {navigation.map((link) => (
          <li><a href={link.link}>{link.label}</a></li>
        ))}
      </ul>

      <div>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </header>
  )
}