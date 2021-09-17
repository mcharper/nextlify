import Head from "next/head"
import { Component } from 'react'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus, faChartPie, faFileContract, faHamburger, faMapPin, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import { attributes } from '../content/projects.md';

export default class Projects extends Component {
  render() {
    let { projects } = attributes;

    return (
      <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className={"container_grid"}>

          {projects.map((project) => (
            <div className="card">
              <div className="card__header">
                <h2>
                {`${project.organisation}`}
                  <span className={"card-top-corner"}>
                    {dayjs(project.start).format('MMM YY')} - {dayjs(project.end).format('MMM YY')}
                  </span>
                </h2>
                <h3>
                {project.name}
                </h3>
              </div>
              
              <ul className={"gridList"}>
                <li>
                  <FontAwesomeIcon icon={faFileContract} className={"icon"} />&nbsp;
                  {project.contractType === "C" ? "Contract" : project.contractType === "F" ? "Fixed Term" : "Unknown" }
                </li>                  
                <li>
                  <FontAwesomeIcon icon={faMapPin} className={"icon"} />&nbsp;
                  {project.based === "R" ? "Remote" : "On Site"}
                </li>                  
                <li>
                  <FontAwesomeIcon icon={faCalendarPlus} className={"icon"} />&nbsp;
                  {project.duration > 12 ? (`${Math.floor(project.duration / 12)}y ${project.duration % 12}m`) : `${project.duration}m` }
                </li>
                <li>
                  <FontAwesomeIcon icon={faChartPie} className={"icon"} />&nbsp;
                  {project.sector}
                </li>                  
                <li>
                  <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
                  {project.stackType}
                </li>                  
                {project.renewals > 0 &&
                  <li>
                    <FontAwesomeIcon icon={faPlusSquare} className={"icon"} />&nbsp;
                    {project.renewals} renewal{project.renewals > 1 && "s"}
                  </li>                  
                }
              </ul>

              <img className={"card__img"} src={`/img/projects/${project.codeName}.jpg`} />

              <p>
                {project.synopsis}
              </p>

              <ul className={"skillList"}>
                {
                  project.skills.map((skill, k) => (
                    <li>{skill.name}</li>
                  ))
                }
              </ul>

            </div>
          ))}

        </div>

      </div>
    )
 
  }
}