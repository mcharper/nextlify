import Link from 'next/link'; 
import { faGithub, faLinkedinIn, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './footer.module.css';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer id={styles.root}>
      <ul className={styles.navigation}>
        <li>
          <FontAwesomeIcon icon={faCopyright} />&nbsp;
          <span>
            {new Date().getFullYear()} Mike Harper
          </span>
        </li>
        <li>
          <Link passHref={true} href="https://linkedin.com/in/mcharper">
            <a target="_blank" >
              <FontAwesomeIcon icon={faLinkedinIn} />
              <span className={styles.linkText}>LinkedIn</span>
            </a>
          </Link>
        </li>
        <li>
          <Link passHref={true} href="https://twitter.com/mcharper">
            <a target="_blank" >
              <FontAwesomeIcon icon={faTwitterSquare} />
              <span className={styles.linkText}>Twitter</span>
            </a>
          </Link>
        </li>
        <li>
          <Link passHref={true} href="https://github.com/mcharper">
            <a target="_blank" >
              <FontAwesomeIcon icon={faGithub} />
              <span className={styles.linkText}>Github</span>
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}