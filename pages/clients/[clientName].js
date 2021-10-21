import ProjectCard from "../../components/projectCard";

import { attributes as projectMetadata } from "../../content/projects.md";

export async function getStaticPaths() {
  let clientNames = ["jlr", "fmg", "ck"];

  const paths = clientNames.map((clientName) => ({
    params: { clientName: clientName },
  }));

  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  let clients = [
    { clientName: "jlr", description: "Jaguar Land Rover" },
    { clientName: "ck", description: "Credit Karma" },
    { clientName: "fmg", description: "FMG" },
  ];

  return {
    props: {
      client: clients.filter((c) => c.clientName === params.clientName)[0],
    },
  };
}

export default function client({ client }) {
  let { projects } = projectMetadata;

  const showcasedProjects = projects.filter((p) =>
    p.codeName.startsWith("fmg")
  );

  return (
    <div className={"page"}>
      <div className={"grid_focus_two"}>
        <div>
          <h2>{client.clientName}</h2>
          <p>{client.description}</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            magnam omnis cumque repudiandae minima ipsa maiores quia facere est
            assumenda ex deleniti, fugit sint quae quasi commodi, perspiciatis
            ad eveniet.
          </p>
        </div>

        <div>
          {showcasedProjects.map((p) => {
            return (
              <ProjectCard
                codeName={p.codeName}
                organisation={p.organisation}
                name={p.name}
                start={p.start}
                end={p.end}
                duration={p.duration}
                contractType={p.contractType}
                based={p.based}
                sector={p.sector}
                stackType={p.stackType}
                renewals={p.renewals}
                skills={p.skills}
                synopsis={p.synopsis}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
