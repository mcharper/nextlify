import ProjectCard from "../../components/projectCard";
import TestimonialCard from "../../components/testimonialCard";

import { attributes as projectMetadata } from "../../content/projects.md";
import { attributes as testimonialsMetadata } from "../../content/testimonials.md";

export async function getStaticPaths() {
  let { projects } = projectMetadata;

  const paths = projects.map((project) => ({
    params: { codeName: project.codeName },
  }));

  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  let { projects } = projectMetadata;

  return {
    props: {
      project: projects.filter((p) => p.codeName === params.codeName)[0],
    },
  };
}

export default function project({ project }) {
  let { testimonials } = testimonialsMetadata;

  const showcasedTestimonial = testimonials.filter((t) =>
    t.relatedProjects.includes(project.codeName.toLowerCase())
  )[0];

  return (
    <div className={"page"}>
      <div className={"grid_focus_two"}>
        <div>
          <h2>{project.name}</h2>

          <h3>{project.organisation}</h3>

          <p>{project.synopsis}</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus debitis cum nemo explicabo iure facilis corporis quam!
            Distinctio nesciunt quas iste nostrum, minima et eos at! Labore
            velit quod amet.
          </p>
        </div>

        <div>
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
