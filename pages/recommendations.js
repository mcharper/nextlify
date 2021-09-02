import Head from "next/head"
import { Component } from 'react'
import { attributes, react as RecommendationsContent } from '../content/recommendations.md';

export default class Recommendations extends Component {
  render() {
    let { title, recommendations } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <RecommendationsContent />
        </article>
      </>
    )
  }
}