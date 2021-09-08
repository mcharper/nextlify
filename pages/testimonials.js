import Head from "next/head"
import { Component } from 'react'
import { attributes, react as TestimonialsContent } from '../content/testimonials.md';

export default class Testimonials extends Component {
  render() {
    let { testimonials } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <TestimonialsContent />

          <ul>
            {testimonials.filter(a => a.client !== "unknown").map((r) => (
              <blockquote cite="/example">
                {r.quote}
                <i>[{r.from}]</i>
                <a href={`/${r.client}`}>link</a>
              </blockquote>
            ))
          }
          </ul>
        </article>
      </>
    )
  }
}