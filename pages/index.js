import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, techFocus, availabilityDate } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <ul>Current focus:
            {techFocus.map((tech, k) => (
              <li key={k}>
                <a href={`/${tech.name}`}>{tech.description}</a>
              </li>
            ))}
          </ul>

          <p>Available: {new Date(availabilityDate).toLocaleDateString()}</p>

          <HomeContent />
        </article>
      </>
    )
  }
}