import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { techFocus, availabilityDate } = attributes;
    return (
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
    )
  }
}