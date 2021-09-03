import { Component } from 'react'
import { attributes, react as CvContent } from '../content/cv.md';

export default class Cv extends Component {
  render() {
    let { assignments } = attributes;
    return (
      <article>
        <CvContent />

        <p>Assignments</p>
        <ul>
          {assignments.map((a, k) => (
            <li key={k}>
              {a.organisation}<br /> 
              {a.name}<br />
              From {new Date(a.start).toLocaleDateString()}
              to {new Date(a.end).toLocaleDateString()} <br />
              <ul>Other projects for JLR:
                <li>adfds</li>
                <li>adfds</li>
              </ul>
            </li>
          ))}
        </ul>
      </article>
    )
  }
}