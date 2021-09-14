import Head from "next/head"
import { Component } from 'react'
import Link from 'next/link'; 
import { attributes } from '../content/testimonials.md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";

export default class Testimonials extends Component {

  render() {
    let { testimonials } = attributes;

    return (
      <div className={"page"}>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
        <div className={"container"}>
      
          {testimonials.map((testimonial, k) => (
            <div className={"split"} style={{marginBottom: "2rem"}}>
              <div className="card__para" style={{color: "var(--bg-light)", backgroundColor: "var(--bg-dark)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", padding: "0 5rem 0 5rem"}} >
                <FontAwesomeIcon icon={faUser} style={{fontSize: "5rem", color: "var(--bg-light)"}} className={"icon"} />
                <div style={{textAlign: "center"}}>{testimonial.from} at {testimonial.client}
                </div>
              </div>
              <div className={"card__para"} style={{fontSize: "1.1rem", alignSelf: "center", fontFamily: "cursive", fontStyle: "oblique", minWidth: "70%", backgroundColor: "var(--bg-light)"}}>
                <span>{testimonial.quote}
                </span>
              </div>
            </div>
          ))}

          <div className={"split"}>
              <div className={"card__para"}>
                <p>This is a selection of testimonials. My
                  &nbsp;
                  <Link passHref={true} href="http://linkedin.com/in/mcharper">
                    <a target="_blank" >
                      <span>LinkedIn profile</span>
                    </a>
                  </Link>
                  &nbsp;
                  has more.
                </p>
              </div>
              <div className={"card__para"}>
              </div>
          </div>

      
        </div>
      </div>
    )
  }
}

