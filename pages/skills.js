import Head from "next/head"
import { Component } from 'react'
import { attributes, react as SkillsContent } from '../content/skills.md';

export default class Skills extends Component {
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

          <p>Core Skills</p>
          <ul>
            {coreSkills.map((skill, k) => (
              <li key={k}>
                {skill.name}
              </li>
            ))}
          </ul>

          <p>Related Skills</p>
          <ul>
            {relatedSkills.map((skill, k) => (
              <li key={k}>
                {skill.name}
              </li>
            ))}
          </ul>


        </article>
      </>
    )
  }
}