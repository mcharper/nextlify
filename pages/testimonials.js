import Head from "next/head"
import { Component } from 'react'

import TestimonialCard from "../components/testimonialCard";
import { attributes as testimonialsMetadata } from '../content/testimonials.md';
import { attributes as projectMetadata } from '../content/projects.md';

export default class Testimonials extends Component {

  render() {
    let { testimonials } = testimonialsMetadata;
    let { projects } = projectMetadata;

    return (
      <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
        <div className={"container_grid"}>
      
          {testimonials.map((testimonial, k) => {
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
}
