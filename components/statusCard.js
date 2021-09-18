import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faCalendarPlus, faChartPie, faFileContract, faHamburger, faMapPin, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import ICalendarLink from "react-icalendar-link";

import styles from './statusCard.module.css';

export default function StatusCard(props) {
  const event = {
    title: "Mike Harper Available",
    description: "Mike Harper (IT contract developer) may be available from today",
    startTime: props.status.availabilityDate,
    endTime: props.status.availabilityDate,
    location: "For remote work or on-site work in Yorkshire and North West. React and TypeScript preferred"
  };

  return (
    <div id={styles.root}>
      <div id={styles.header}>
        <h2>
          In Contract
          <span className={styles.top_corner}>
            Available {dayjs(props.status.availabilityDate).format('D MMM YYYY')}
          </span>
        </h2>
        <h3>Latest Availability Update</h3>
      </div>

      <ul className={styles.gridList}>
        <li>
          <FontAwesomeIcon icon={faCalendarCheck} className={"icon"} />&nbsp;
          <ICalendarLink event={event}>
            <span className={styles.calLink}>
              {dayjs(props.status.availabilityDate).format('DD MMM YYYY')}
            </span>
          </ICalendarLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faMapPin} className={"icon"} />&nbsp;
          Prefer remote
        </li>                  
        <li>
          <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
          Prefer&nbsp;
          {
            props.status.preferredStackType === "frontEnd" ? "front end" : "back end" 
          } 
        </li>                  
        <li>
          <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
          Prefer&nbsp;
          {
            props.status.preferredSkills[0] 
          } 
        </li>                  
      </ul>

      <img className={styles.img} src={`/img/laptop.jpg`} />

      <div className={styles.narrative}>
        <p>{props.status.description}</p>
      </div>
{/* 
      <ul className={styles.skillList}>
        {
          props.status.skills.map((skill, k) => (
            <li>{skill}</li>
          ))
        }
      </ul> */}
    </div>
  )
}