import Head from "next/head"
import { Component } from 'react'
import { attributes, react as SkillsContent } from '../content/skills.md';

export default class Home extends Component {
  render() {
    let { title, coreSkills, relatedSkills, softSkills  } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <SkillsContent />

          <ul>
            {coreSkills.map((skill, k) => (
              <li key={k}>
                <h2>{skill.name}</h2>
                <p>{skill.description}</p>
              </li>
            ))}
          </ul>

          <ul>
            {relatedSkills.map((skill, k) => (
              <li key={k}>
                <h2>{skill.name}</h2>
                <p>{skill.description}</p>
              </li>
            ))}
          </ul>

          <ul>
            {softSkills.map((skill, k) => (
              <li key={k}>
                <h2>{skill.name}</h2>
                <p>{skill.description}</p>
              </li>
            ))}
          </ul>

        </article>
      </>
    )
  }
}