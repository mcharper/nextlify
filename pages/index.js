import Head from "next/head"
import { Component } from 'react'

import { attributes as homeMetadata, react as HomeContent } from '../content/home.md';
import { attributes as projectMetadata } from '../content/projects.md';
import { attributes as testimonialsMetadata } from '../content/testimonials.md';

import StatusCard from '../components/statusCard';
import ProjectCard from '../components/projectCard';
import TestimonialCard from "../components/testimonialCard";

export default class Home extends Component {
  render() {
    let { lead1, lead2, status, showcasedProjectCodeName, showcasedTestimonialClientName } = homeMetadata;
    let { projects } = projectMetadata;
    let { testimonials } = testimonialsMetadata;

    const showCasedProject = projects.filter(p => p.codeName === showcasedProjectCodeName)[0];
    const showcasedTestimonial = testimonials.filter(t => t.client.toLowerCase() === showcasedTestimonialClientName)[0];
    const relatedProjects = projects.filter(p => showcasedTestimonial.relatedProjects.includes(p.codeName));

    return (
      <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className={"grid_focus_five"}>

          <div className={"narrative"}>
            <h2>What I do</h2>
            <p id={"lead1"}>{lead1}</p>
            <p id={"lead2"}>{lead2}</p>
          </div>

          <ProjectCard 
            codeName={showCasedProject.codeName}
            organisation={showCasedProject.organisation}
            name={showCasedProject.name}
            start={showCasedProject.start}
            end={showCasedProject.end}
            duration={showCasedProject.duration}
            contractType={showCasedProject.contractType}
            based={showCasedProject.based}
            sector={showCasedProject.sector}
            stackType={showCasedProject.stackType}
            renewals={showCasedProject.renewals}
            skills={showCasedProject.skills}
            synopsis={showCasedProject.synopsis}
          />      

          <StatusCard 
            description={status.description}
            status={status}
          />

          <div className={"narrative"}>
            <HomeContent />
          </div>

          <TestimonialCard 
              title="title"
              quote={showcasedTestimonial.quote}
              from={showcasedTestimonial.from}
              client={showcasedTestimonial.client}
              relatedProjects={relatedProjects}
            />

        </div>

      </div>
    )
  }
}