import Head from "next/head"
import { Component } from 'react'
import { attributes, react as SkillsetContent } from '../content/skillset.md';

export default class Skillset extends Component {
  render() {
    let { preamble, frontEnd, backEnd, devops } = attributes;
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aliquid amet iure? Earum reiciendis aspernatur nostrum excepturi.</p>
              <ul className={"card__list"}>
                {frontEnd.map((skill, k) => (
                  <li key={k}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={"card__para"}>
              <img className={"card__img"} style={{backgroundColor: "var(--bg-dark)"}} src="/img/react-icon.svg" />
            </div>
          </div>

          <div className={"split card"}>
            <div className="card__para">
              <h1>Back end</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aliquid amet iure? Earum reiciendis aspernatur nostrum excepturi.</p>
              <ul className={"card__list"}>
                {backEnd.map((skill, k) => (
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aliquid amet iure? Earum reiciendis aspernatur nostrum excepturi.</p>
              <ul className={"card__list"}>
                {devops.map((skill, k) => (
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

        </div>

      </div>
    )
  }
}