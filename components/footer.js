import { faGithub, faLinkedinIn, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <div className={"bg-dark"}>
      <ul>
        <li>
          &copy;  {new Date().getFullYear()} McHarper Technical Services Ltd
        </li>
        
        <li>
          <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitterSquare} /> Twitter
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </li>

        <li>
          Built using Next.js, content managed by NetlifyCMS, continuous deployment to Netlify CDN
        </li>
      </ul>
    </div>
  )
}