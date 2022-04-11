import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from './testimonialCard.module.css';

export default function TestimonialCard(props) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>

        <h3 title='Testimonial icon'>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        </h3>
      </div>

      <blockquote className={styles.quote}>
        <sup><FontAwesomeIcon icon={faQuoteLeft} className={styles.quotationMarkLeft} /></sup>
          {props.quote}
        <sup><FontAwesomeIcon icon={faQuoteRight} className={styles.quotationMarkRight} /></sup>
      </blockquote>
{/* 
      {
        props.relatedProjects.length > 0 &&
        <ul className={styles.projectsList}>Related projects:
          {
            props.relatedProjects.map((project, k) => (
              <li>{project.name}</li>
            ))
          }
        </ul>
      } */}

      <div className={styles.footer}>
        {props.from}, {props.client}
      </div>

    </div>
  )
}