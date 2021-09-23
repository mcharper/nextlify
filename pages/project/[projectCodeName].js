import Head from "next/head"
import { useRouter } from 'next/router';

import { attributes as projectsMetadata } from '../../content/projects.md';
import { attributes as testimonialsMetadata } from '../../content/testimonials.md';
import ProjectCard from '../../components/projectCard';
import TestimonialCard from '../../components/testimonialCard';

export default function ProjectDetails() {
  let { projects } = projectsMetadata;
  let { testimonials } = testimonialsMetadata;

  const router = useRouter()
  const { projectCodeName } = router.query
  const project = projects.filter(p => p.codeName == projectCodeName)[0];
  const relatedTestimonials = testimonials.filter(t => t.relatedProjects.includes(projectCodeName));

  return (
    <div className={"page"}>
      <div className={"grid_sym_six"}>
          <div>
            {projects.filter(p => p.codeName == projectCodeName)[0].duration}
          </div>

          <ProjectCard 
            codeName={projectCodeName}
            organisation={projects.filter(p => p.codeName == projectCodeName)[0].organisation}
            name={projects.filter(p => p.codeName == projectCodeName)[0].name}
            start={projects.filter(p => p.codeName == projectCodeName)[0].start}
            end={projects.filter(p => p.codeName == projectCodeName)[0].end}
            duration={projects.filter(p => p.codeName == projectCodeName)[0].duration}
            contractType={projects.filter(p => p.codeName == projectCodeName)[0].contractType}
            based={projects.filter(p => p.codeName == projectCodeName)[0].based}
            sector={projects.filter(p => p.codeName == projectCodeName)[0].sector}
            stackType={projects.filter(p => p.codeName == projectCodeName)[0].stackType}
            renewals={projects.filter(p => p.codeName == projectCodeName)[0].renewals}
            skills={projects.filter(p => p.codeName == projectCodeName)[0].skills}
            synopsis={projects.filter(p => p.codeName == projectCodeName)[0].synopsis}
          />

          {/* {
            relatedTestimonials.length > 0 &&
            <TestimonialCard 
              title="title"
              quote={relatedTestimonials[0].quote}
              from={relatedTestimonials[0].from}
              client={relatedTestimonials[0].client}
              relatedProjects={relatedTestimonials[0].relatedProjects}
            />
          } */} 

      </div>

    </div>
  )
}
