import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, navigation, availabilityDate } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>

          <ul>
            {navigation.map((link) => (
              <a href={link.link}>{link.label} | </a>
            ))}
          </ul>

          <p>Available: {new Date(availabilityDate).toLocaleDateString()}</p>

          <HomeContent />
        </article>
      </>
    )
  }
}