import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus, faChartPie, faFileContract, faHamburger, faMapPin, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import styles from './statusCard.module.css';

export default function StatusCard(props) {
  return (
    <div id={styles.root}>
      <div id={styles.header}>
        <h2>
          In Contract
          <span className={styles.top_corner}>
            Available {dayjs(props.availabilityDate).format('MMM YY')}
          </span>
        </h2>
        <h3>Latest Availability Update</h3>
      </div>

      <ul className={styles.gridList}>
        <li>
          <FontAwesomeIcon icon={faFileContract} className={"icon"} />&nbsp;
          In Contract 
        </li>                  
        <li>
          <FontAwesomeIcon icon={faMapPin} className={"icon"} />&nbsp;
          Working Remotely
        </li>                  
        <li>
          <FontAwesomeIcon icon={faCalendarPlus} className={"icon"} />&nbsp;
          {new Date(props.availabilityDate).toLocaleDateString()}
        </li>
        <li>
          <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
          Front End work
        </li>                  
      </ul>

      <img className={styles.img} src={`/img/laptop.jpg`} />

      <ul className={styles.skillList}>
        {
          props.skills.map((skill, k) => (
            <li>{skill}</li>
          ))
        }
      </ul>
    </div>
  )
}