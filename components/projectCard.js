import dayjs from "dayjs";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglass,
  faChartPie,
  faFileContract,
  faHamburger,
  faMapPin,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

import project from "../pages/projects/[codeName]";

import styles from "./projectCard.module.css";

export default function ProjectCard(props) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2>
          {`${props.organisation}`}
          <span className={styles.top_corner}>
            {dayjs(props.start).format("MMM YY")} -{" "}
            {dayjs(props.end).format("MMM YY")}
          </span>
        </h2>
        <h3>
          {props.name}
          {/* <Link href={`/projects/${props.codeName}`}>&gt;</Link> */}
        </h3>
      </div>

      <ul className={styles.gridList}>
        <li>
          <FontAwesomeIcon icon={faFileContract} className={"icon"} />
          &nbsp;
          {props.contractType === "C"
            ? "Contract"
            : props.contractType === "F"
            ? "Fixed Term"
            : "Unknown"}
        </li>
        <li>
          <FontAwesomeIcon icon={faMapPin} className={"icon"} />
          &nbsp;
          {props.based === "R" ? "Remote" : "On Site"}
        </li>
        <li>
          <FontAwesomeIcon icon={faHourglass} className={"icon"} />
          &nbsp;
          {props.duration > 12
            ? `${Math.floor(props.duration / 12)}y ${props.duration % 12}m`
            : `${props.duration}m`}
        </li>
        <li>
          <FontAwesomeIcon icon={faChartPie} className={"icon"} />
          &nbsp;
          {props.sector}
        </li>
        <li>
          <FontAwesomeIcon icon={faHamburger} className={"icon"} />
          &nbsp;
          {props.stackType}
        </li>
        {props.renewals > 0 && (
          <li>
            <FontAwesomeIcon icon={faPlusSquare} className={"icon"} />
            &nbsp;
            {props.renewals} renewal{props.renewals > 1 && "s"}
          </li>
        )}
      </ul>

      <img className={styles.img} src={`/img/projects/${props.codeName}.jpg` } alt={`image relating ${props.name} project`} />

      <p className={styles.synopsis}>{props.synopsis}</p>

      <ul className={styles.skillList}>
        {props.skills.map((skill, k) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
