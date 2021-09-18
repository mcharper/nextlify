import Head from "next/head"
import { Component } from 'react'

import { attributes as homeMetadata, react as HomeContent } from '../content/home.md';
import { attributes as projectMetadata } from '../content/projects.md';

import StatusCard from '../components/statusCard';
import ProjectCard from '../components/projectCard';

export default class Home extends Component {
  render() {
    let { mainText, subText, status } = homeMetadata;
    let { projects } = projectMetadata;

    return (
      <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className={"container_grid"}>

          <div className={"narrative"}>
            <p>{mainText}</p>
            <p>{subText}</p>
          </div>

          <StatusCard 
            description={status.description}
            status={status}
          />

          <ProjectCard 
            codeName={projects[0].codeName}
            organisation={projects[0].organisation}
            name={projects[0].name}
            start={projects[0].start}
            end={projects[0].end}
            duration={projects[0].duration}
            contractType={projects[0].contractType}
            based={projects[0].based}
            sector={projects[0].sector}
            stackType={projects[0].stackType}
            renewals={projects[0].renewals}
            skills={projects[0].skills}
            synopsis={projects[0].synopsis}
          />      
        </div>
      </div>
    )
  }
}