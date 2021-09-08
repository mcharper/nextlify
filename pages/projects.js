import Head from "next/head"
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendarPlus, faDoorOpen, faFileContract, faHandHolding, faHome, faHouseUser, faLaptopHouse, faPlusSquare, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { attributes, react as ProjectsContent } from '../content/projects.md';

export default class Projects extends Component {
  render() {
    let { preamble, projects } = attributes;

    return (
        <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className={"container"}>

          {/* <ProjectsContent /> */}

          <p>{preamble}</p>

          {projects.map((project, k) => (
            <div className={"split card"}>
              <div className="card__para">
                <h2>{project.name}</h2>
                <h3>{project.organisation}</h3>
                <ul className={"gridList"}>
                  <li>
                    <FontAwesomeIcon icon={faCalendarPlus} className={"icon"} />&nbsp;
                    {new Date(project.start).toLocaleDateString()}&nbsp;-&nbsp; 
                    {
                    project.end === "present" ? 
                      "Present"
                    : 
                      new Date(project.end).toLocaleDateString()

                    }
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFileContract} className={"icon"} />&nbsp;
                    Contract
                  </li>                  
                  <li>
                    <FontAwesomeIcon icon={faPlusSquare} className={"icon"} />&nbsp;
                    2 renewals
                  </li>                  
                  <li>
                    <FontAwesomeIcon icon={faHome} className={"icon"} />&nbsp;
                    Remote
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