import ProjectCard from "../../components/projectCard";
import TestimonialCard from "../../components/testimonialCard";

import { useContext } from 'react'
import { LanguageContext } from "../../LanguageContext";

import { attributes as projectMetadata } from "../../content/projects.md";

export async function getStaticPaths() {
  let { projects } = projectMetadata;

  const paths = projects.map((project) => ({
    params: { codeName: project.codeName },
  }));

  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  return {
    props: {
      codeName: params.codeName
    },
  };
}

export default function project({ codeName }) {
  const languageContext = useContext(LanguageContext);

  const projectDetails = languageContext.projects.metadata.projects.filter(p => p.codeName === codeName)[0];

  const { testimonials } = languageContext.testimonials.metadata;
  const showcasedTestimonial = testimonials.filter((t) =>
    t.relatedProjects.includes(codeName.toLowerCase())
  )[0];

  return (
    <div className={"page"}>
      <div className={"grid_focus_two"}>
        <div>
          <h2>{projectDetails.name}</h2>

          <h3>{projectDetails.organisation}</h3>

          <p>{projectDetails.synopsis}</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus debitis cum nemo explicabo iure facilis corporis quam!
            Distinctio nesciunt quas iste nostrum, minima et eos at! Labore
            velit quod amet.
          </p>
        </div>

        <div>
          <ProjectCard
            codeName={projectDetails.codeName}
            organisation={projectDetails.organisation}
            name={projectDetails.name}
            start={projectDetails.start}
            end={projectDetails.end}
            duration={projectDetails.duration}
            contractType={projectDetails.contractType}
            based={projectDetails.based}
            sector={projectDetails.sector}
            stackType={projectDetails.stackType}
            renewals={projectDetails.renewals}
            skills={projectDetails.skills}
            synopsis={projectDetails.synopsis}
          />

          {showcasedTestimonial && (
            <TestimonialCard
              title="title"
              quote={showcasedTestimonial.quote}
              from={showcasedTestimonial.from}
              client={showcasedTestimonial.client}
              relatedProjects={[]}
            />
          )}
        </div>
      </div>
    </div>
  );
}
