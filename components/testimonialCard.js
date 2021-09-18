import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from './testimonialCard.module.css';

export default function TestimonialCard(props) {
  return (
    <div id={styles.root}>
      <div id={styles.header}>

        <h3>
          <FontAwesomeIcon icon={faUser} style={{fontSize: "3rem"}} className={"icon"} />
        </h3>
      </div>

      <blockquote id={styles.quote}>
        <sup><FontAwesomeIcon icon={faQuoteLeft} className={styles.quotationMarkLeft} /></sup>
          {props.quote}
        <sup><FontAwesomeIcon icon={faQuoteRight} className={styles.quotationMarkRight} /></sup>
      </blockquote>

      <p>
        {props.from} at {props.client}
      </p>

      {
        props.relatedProjects.length > 0 &&
        <ul className={styles.projectsList}>Related projects:
          {
            props.relatedProjects.map((project, k) => (
              <li>{project.name}</li>
            ))
          }
        </ul>
      }
    </div>
  )
}