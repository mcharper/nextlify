import Head from "next/head"
import { useContext } from 'react'
import { LanguageContext } from "../LanguageContext";

import ProjectCard from '../components/projectCard';

export default function Projects() {
  const languageContext = useContext(LanguageContext);

  let { title, lead1, lead2, projects } = languageContext.projects.metadata;

  return (
    <div className={"page"}>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <div className={"grid_sym_six"}>

        <div className={"narrative"}>
          <h2>{title}</h2>

          <p id={"lead1"}>{lead1}</p>
          <p id={"lead2"}>{lead2}</p>
        </div>

        {projects.map((project) => (
          <ProjectCard
            codeName={project.codeName}
            organisation={project.organisation}
            name={project.name}
            start={project.start}
            end={project.end}
            duration={project.duration}
            contractType={project.contractType}
            based={project.based}
            sector={project.sector}
            stackType={project.stackType}
            renewals={project.renewals}
            skills={project.skills}
            synopsis={project.synopsis}
          />
        ))}

      </div>

    </div>
  )
}