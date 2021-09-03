import { Component } from 'react'
import { attributes, react as SkillsContent } from '../content/skills.md';

export default class Skills extends Component {
  render() {
    let { coreSkills, relatedSkills } = attributes;
    return (
      <article>
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
    )
  }
}