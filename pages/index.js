import Head from "next/head"
import { useContext } from 'react'
import { LanguageContext } from "../LanguageContext";

import ProjectCard from '../components/projectCard';
import StatusCard from '../components/statusCard';
import TestimonialCard from "../components/testimonialCard";

export default function Home() {
  const languageContext = useContext(LanguageContext);

  let { leadParagraphs, status, showcasedProjectCodeName, showcasedTestimonialClientName } = languageContext.home.metadata;
  let Content = languageContext.home.content;

  let { projects } = languageContext.projects.metadata;
  let { testimonials } = languageContext.testimonials.metadata;

  const showCasedProject = projects.filter(p => p.codeName === showcasedProjectCodeName)[0];
  const showcasedTestimonial = testimonials.filter(t => t.client.toLowerCase() === showcasedTestimonialClientName)[0];
  const relatedProjects = projects.filter(p => showcasedTestimonial.relatedProjects.includes(p.codeName));

  return (
    <div className={"page"}>
      <Head>
      </Head>

      <div className={"grid_focus_five"}>

        <div className={"narrative"}>

          {leadParagraphs.map((lead) => (
            <>
              <h2>{lead.header}</h2>
              <p>{lead.body}</p>
            </>
          ))}
        </div>

        <StatusCard
          description={status.description}
          status={status}
        />

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

        <div className={"narrative"}>
          <Content />
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