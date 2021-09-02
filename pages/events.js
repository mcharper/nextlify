import Head from "next/head"
import { Component } from 'react'
import { attributes, react as EventsContent } from '../content/events.md';

export default class Home extends Component {
  render() {
    let { title, events } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <EventsContent />
          <ul>
            {events.map((event, k) => (
              <li key={k}>
                <h2>{event.description}</h2>
                <p>Where: {event.location}</p>
                <p>Cost: {event.cost}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}