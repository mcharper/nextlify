import Head from "next/head"
import { Component } from 'react'
import { attributes, react as CvContent } from '../content/cv.md';

export default class Cv extends Component {
  render() {
    let { title, assignments } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <CvContent />

          <p>Assignments</p>
          <ul>
            {assignments.map((a, k) => (
              <li key={k}>
                {a.organisation}<br /> 
                {a.name}<br />
                From {new Date(a.start).toLocaleDateString()}
                to {new Date(a.end).toLocaleDateString()} <br />
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}