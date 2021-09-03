import { Component } from 'react'
import { attributes, react as RecommendationsContent } from '../content/recommendations.md';

export default class Recommendations extends Component {
  render() {
    let { recommendations } = attributes;
    return (
      <article>
        <RecommendationsContent />

        <ul>
          {recommendations.filter(a => a.client !== "unknown").map((r) => (
            <blockquote cite="/example">
              {r.quote}
              <i>[{r.from}]</i>
              <a href={`/${r.client}`}>link</a>
            </blockquote>
          ))
        }
        </ul>
      </article>
    )
  }
}