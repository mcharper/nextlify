import Head from "next/head"
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBuilding, faCalendarPlus, faChartPie, faDoorOpen, faFileContract, faFileDownload, faHamburger, faHandHolding, faHome, faHouseUser, faLaptopHouse, faMapPin, faPizzaSlice, faPlusSquare, faTruck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'; 
import dayjs from 'dayjs'

import { attributes, react as ProjectsContent } from '../content/projects.md';
import { faLinkedinIn, faServicestack } from "@fortawesome/free-brands-svg-icons";

export default class ProjectsAlt extends Component {
  render() {
    let { preamble, projects } = attributes;

    return (
        <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className={"container_grid"}>

          {projects.map((project, k) => (
            <div className="card card__para">
              <div>
                <h3>
                {`${project.organisation}`}
                  <span style={{fontWeight: "400", float: "right", marginRight: "1rem"}}>
                    {dayjs(project.start).format('MMM YY')} - {dayjs(project.end).format('MMM YY')}
                  </span>
                </h3>
                <h3 style={{fontSize: "1.25rem", marginBottom: "0.25rem", fontWeight: "400", backgroundColor: "silver", borderRadius: "0.25rem", color: "var(--clr-dark)", textAlign: "center"}}>
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

              <img className={"card__img"} src={`/img/projects/${project.image}.jpg`} />
{/* 
              <p style={{fontSize: "0.9rem", fontStyle: "italic"}}>
                <img className={"card__img"} style={{width: "50%", float: "left", border: "0.1rem solid var(--clr-subdued)", margin: "0.25rem"}} src={`/img/projects/${project.image}.jpg`} />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aamet consectetur adipisicing elit sdf sdf.
              </p> */}

              <p style={{fontSize: "1rem", clear: "both"}}>
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