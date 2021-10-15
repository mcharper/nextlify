import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head"
import { Component } from 'react'
import SkillsetCard from '../components/skillsetCard'

import { attributes, react as SkillsetContent } from '../content/skillset.md';

export default class Skillset extends Component {
  render() {
    let { lead1, lead2, frontEnd, backEnd, tools, process, soft } = attributes;
    return (
      <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>

        <div className={"grid_sym_six"}>

          <div className={"narrative"}>
            <h2>My Skill Set</h2>
  
            <p id={"lead1"}>{lead1}</p>
            <p id={"lead2"}>{lead2}</p>
          </div>

          <SkillsetCard 
            category={"frontEnd"}
            title={"Front End"}
            description={frontEnd.description}
            skills={frontEnd.skills}
          />

          <SkillsetCard 
            category={"backEnd"}
            title={"Back End"}
            description={backEnd.description}
            skills={backEnd.skills}
          /> 

          <SkillsetCard 
            category={"tools"}
            title={"Tooling and DevOps Related"}
            description={tools.description}
            skills={tools.skills}
          /> 

           <SkillsetCard 
            category={"process"}
            title={"Project and Process Related"}
            description={process.description}
            skills={process.skills}
          /> 

         <SkillsetCard 
            category={"soft"}
            title={"Soft Skills"}
            description={soft.description}
            skills={soft.skills}
          /> 

        </div>

      </div>
    )
  }
}