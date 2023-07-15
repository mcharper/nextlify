import { useContext } from 'react'
import { LanguageContext } from "../../LanguageContext";
import ProjectCard from "../../components/projectCard";
import { attributes as clientMetadata } from "../../content/en-GB/clients.md";

export async function getStaticPaths() {
  const paths = clientMetadata.clients.map((client) => ({
    params: { codeName: client.codeName },
  }));

  return { paths, fallback: false };
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
  return {
    props: {
      client: clientMetadata.clients.filter((c) => c.codeName === params.codeName)[0],
    },
  };
}

export default function client({ client }) {
  const languageContext = useContext(LanguageContext);

  const showcasedProjects = languageContext.projects.metadata.projects.filter(p => p.codeName.startsWith(client.codeName));

  return (
    <div className={"page"}>
      <div className={"grid_focus_two"}>
        <div>
          <h2>{client.organisation}</h2>
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
