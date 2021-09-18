import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head"
import { Component } from 'react'
import SkillsetCard from '../components/skillsetCard'

import { attributes, react as SkillsetContent } from '../content/skillset.md';

export default class Skillset extends Component {
  render() {
    let { mainText, subText, frontEnd, backEnd } = attributes;
    return (
      <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className={"container_grid"}>

          <div>
            <p style={{color: "var(--clr-lightest)", paddingRight: "2rem", margin: "0.5rem"}}>
              {mainText}
            </p>

            <p style={{color: "black", paddingRight: "2rem", margin: "0.5rem"}}>
              {subText}
            </p>
          </div>

          <SkillsetCard 
            category={"frontEnd"}
            title={"Front End Skills"}
            description={frontEnd.description}
            skills={frontEnd.skills}
          />

          <SkillsetCard 
            category={"backEnd"}
            title={"Back End Skills"}
            description={backEnd.description}
            skills={backEnd.skills}
          /> 
                   
        </div>

      </div>
    )
  }
}