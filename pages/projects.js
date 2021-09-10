import Head from "next/head"
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendarPlus, faChartPie, faDoorOpen, faFileContract, faFileDownload, faHamburger, faHandHolding, faHome, faHouseUser, faLaptopHouse, faMapPin, faPizzaSlice, faPlusSquare, faTruck, faUserPlus } from "@fortawesome/free-solid-svg-icons";

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

        <div className={"container"}>

          {projects.map((project, k) => (
            <div className={"split"}>
              <div className="card__para">
                <h2>{project.name}</h2>
                <h3>{project.organisation}</h3>
                <ul className={"gridList"}>
                  <li>
                    <FontAwesomeIcon icon={faFileContract} className={"icon"} />&nbsp;
                    Contract
                  </li>                  
                  <li>
                    <FontAwesomeIcon icon={faMapPin} className={"icon"} />&nbsp;
                    Remote
                  </li>                  
                  <li>
                    <FontAwesomeIcon icon={faCalendarPlus} className={"icon"} />&nbsp;
                    12m
                    {/* {new Date(project.start).toLocaleDateString()}&nbsp;-&nbsp; 
                    {
                    project.end !== "present" && 
                      new Date(project.end).toLocaleDateString()
                    } */}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlusSquare} className={"icon"} />&nbsp;
                    2 renewals
                  </li>                  
                  <li>
                    <FontAwesomeIcon icon={faChartPie} className={"icon"} />&nbsp;
                    Automotive 
                  </li>                  
                  <li>
                    <FontAwesomeIcon icon={faHamburger} className={"icon"} />&nbsp;
                    Front end
                  </li>                  
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

        </div>

      </div>
    )
 
  }
}