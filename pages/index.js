import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus, faCrosshairs, faHourglassHalf, faLock } from "@fortawesome/free-solid-svg-icons";

export default class Home extends Component {
  render() {
    let { techFocus, availabilityDate } = attributes;
    return (
      <div className={"page"}>
        <Head>
          {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
        </Head>

        <div className={"container"}>

          <div className={"split card"}>
            <div className="card__para">
              <h1>Quick Update</h1>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aliquid amet iure? Earum reiciendis aspernatur nostrum excepturi.</p>

              <p>
                <FontAwesomeIcon icon={faLock} className={"icon"} /> In contract
              </p>

              <FontAwesomeIcon icon={faCrosshairs} className={"icon"} /> Current focus
              
              <ul className={"card__list"}>
                {techFocus.map((tech, k) => (
                  <li key={k}>
                    {tech.description}
                  </li>
                ))}
              </ul>
              
              <p>
                <FontAwesomeIcon icon={faHourglassHalf} className={"icon"} />&nbsp;
                Available {new Date(availabilityDate).toLocaleDateString()}&nbsp;
              </p>

            </div>

            <div className={"card__para"}>
              <img className={"card__img"} src="/img/react-fragment.jpg" />
            </div>
          </div>

          <div className={"split card"}>
            <div className="card__para">
              <h1>More Details</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

              Current focus:

              <ul className={"card__list"}>
                {techFocus.map((tech, k) => (
                  <li key={k}>
                    {tech.description}
                  </li>
                ))}
              </ul>
              <p>Available: {new Date(availabilityDate).toLocaleDateString()}</p>
            </div>

            <div className={"card__para"}>
              <img className={"card__img"} src="/img/office.jpg" />
            </div>
          </div>

          <div className={"split card"}>
            <div className="card__para">
              <h1>Projects</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

              Current focus:

              <ul className={"card__list"}>
                {techFocus.map((tech, k) => (
                  <li key={k}>
                    {tech.description}
                  </li>
                ))}
              </ul>
              <p>Available: {new Date(availabilityDate).toLocaleDateString()}</p>
            </div>

            <div className={"card__para"}>
              <img className={"card__img"} src="/img/laptop.jpg" />
            </div>
          </div>

          <div className={"split card"}>
            <div className="card__para">
              <h1>About me</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

              Current focus:

              <ul className={"card__list"}>
                {techFocus.map((tech, k) => (
                  <li key={k}>
                    {tech.description}
                  </li>
                ))}
              </ul>
              <p>Available: {new Date(availabilityDate).toLocaleDateString()}</p>
            </div>

            <div className={"card__para"}>
              <img className={"card__img"} src="/img/react-fragment.jpg" />
            </div>
          </div>

          <section>
              <h2>About Me</h2>

              <HomeContent />
          </section>

        </div>
      </div>
    )
  }
}