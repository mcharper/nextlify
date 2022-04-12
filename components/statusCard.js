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
          In contract until
          <span className={styles.top_corner}>
            {dayjs(props.status.contractEndDate).format('D MMM YY')}
          </span>
        </h2>
        <h3>Availability</h3>
      </div>

      <ul className={styles.gridList}>
        <li>
          <FontAwesomeIcon icon={faCalendarCheck} className={"icon"} />&nbsp;
          {dayjs(props.status.availabilityDate).format('D MMM YY')}
        </li>
        <li>
          <FontAwesomeIcon icon={faMapPin} className={"icon"} />&nbsp;
          {
            <span>Yorks / remote</span>
          }
        </li>                  
        {/* <li>
          <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
          Prefer&nbsp;
          {
            props.status.preferredStackType === "frontEnd" ? "front end" : "back end" 
          } 
        </li>                   */}
        <li>
          <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
          {
            props.status.skills[0] 
          } 
        </li>                  
        <li>
          <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
          {
            props.status.skills[1] 
          } 
        </li>                  
        <li>
          <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
          {
            props.status.skills[2] 
          } 
        </li>                  
        <li>
          <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
          {
            props.status.skills[3] 
          } 
        </li>                  
      </ul>

      <img className={styles.img} src={`/img/currentStatus.jpg`} alt="image relating to current status" />

      <div className={styles.narrative}>
        <p id={styles.synopsis}>{props.status.description}</p>
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