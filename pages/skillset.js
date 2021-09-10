import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as SkillsetContent } from '../content/skillset.md';

export default class Skillset extends Component {
  render() {
    let { preamble, frontEnd, backEnd, devops, process } = attributes;
    return (
      <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className={"container"}>

          {/* <SkillsetContent /> */}

          <p>
            {preamble}
          </p>

          <div className={"split card"}>
            <div className="card__para">
              <h1>Front end</h1>
              <p>{frontEnd.description}</p>
              <ul className={"skillList"}>
                {frontEnd.skills.map((skill, k) => (
                  <li key={k}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={"card__para"}>
              <img className={"card__img"} style={{backgroundColor: "var(--bg-dark)"}} src="/img/FrontEndTech.png" />
            </div>
          </div>

          <div className={"split card"}>
            <div className="card__para">
              <h1>Back end</h1>
              <p>{backEnd.description}</p>
              <ul className={"skillList"}>
                {backEnd.skills.map((skill, k) => (
                  <li key={k}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={"card__para"}>
              <img className={"card__img"} style={{backgroundColor: "var(--bg-dark)"}} src="/img/csharp-icon.svg" />
            </div>
          </div>

          <div className={"split card"}>
            <div className="card__para">
              <h1>Dev-Ops</h1>
              <p>{devops.description}</p>
              <ul className={"skillList"}>
                {devops.skills.map((skill, k) => (
                  <li key={k}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={"card__para"}>
              <img className={"card__img"} style={{backgroundColor: "var(--bg-dark)"}} src="/img/devops-icon.png" />
            </div>
          </div>

          <div className={"split card"}>
            <div className="card__para">
              <h1>Process</h1>
              <p>{process.description}</p>
              <ul className={"skillList"}>
                {process.skills.map((skill, k) => (
                  <li key={k}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={"card__para"}>
              <img className={"card__img"} style={{backgroundColor: "var(--bg-dark)"}} src="/img/kanban-icon.svg" />
            </div>
          </div>

        </div>

      </div>
    )
  }
}