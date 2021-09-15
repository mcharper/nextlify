import Head from "next/head"
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendarPlus, faChartPie, faDoorOpen, faFileContract, faFileDownload, faHamburger, faHandHolding, faHome, faHouseUser, faLaptopHouse, faMapPin, faPizzaSlice, faPlusSquare, faTruck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'; 
import dayjs from 'dayjs'

import { attributes, react as ProjectsContent } from '../content/projects.md';
import { faLinkedinIn, faServicestack } from "@fortawesome/free-brands-svg-icons";

export default class Projects extends Component {
  render() {
    let { preamble, projects } = attributes;

    return (
        <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className={"container_light"}>

          {projects.map((project, k) => (
            <div className={"split"}>
              <div className="card__para">
                <h2>{project.name}</h2>
                <h3>
                  {`${project.organisation}`}
                  <span style={{fontWeight: "400"}}>
                    &nbsp;({project.city}&nbsp;   
                      {dayjs(project.start).format('MMM YY')} - {dayjs(project.end).format('MMM YY')}
                    )
                  </span>
                </h3>
                
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

                <p>{project.synopsis}</p>
                <ul className={"skillList"}>
                  {
                    project.skills.map((skill, k) => (
                      <li>{skill.name}</li>
                    ))
                  }
                </ul>
              </div>
              <div className={"card__para"}>
                <img className={"card__img"} style={{backgroundColor: "var(--bg-dark)"}} src={`/img/projects/${project.image}.jpg`} />
              </div>
            </div>
          ))}

          <div className={"split"}>
              <div className={"card__para"}>
                <p>This is just a selection of recent projects. My
                  &nbsp;
                  <Link passHref={true} href="http://linkedin.com/in/mcharper">
                    <a target="_blank" >
                      <span>LinkedIn profile</span>
                    </a>
                  </Link>
                  &nbsp;
                  lists all my experience.
                </p>
              </div>
              <div className={"card__para"}>
              </div>
          </div>

        </div>

      </div>
    )
 
  }
}