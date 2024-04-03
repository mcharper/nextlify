import Head from "next/head"
import { useContext } from 'react'

import { LanguageContext } from '../LanguageContext'
import TestimonialCard from "../components/testimonialCard";

export default function Testimonials() {
  const languageContext = useContext(LanguageContext);

  let { title, lead1, lead2, testimonials } = languageContext.testimonials.metadata;
  let { projects } = languageContext.projects.metadata;

  return (
    <div className={"page"}>
      <Head>
      </Head>

      <div className={"grid_sym_six"}>

        <div className={"narrative"}>
          <h2>{title}</h2>

          <p id={"lead1"}>{lead1}</p>
          <p id={"lead2"}>{lead2}</p>
        </div>

        {testimonials.map((testimonial, index) => {
          if (index > 4) return;

          const relatedProjects = projects.filter(p => testimonial.relatedProjects.includes(p.codeName));

          return <TestimonialCard
            title="title"
            quote={testimonial.quote}
            from={testimonial.from}
            client={testimonial.client}
            relatedProjects={relatedProjects}
          />
        })}

      </div>
    </div>
  )
}
