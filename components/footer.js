export default function Footer() {
  return (
    <ul>
      <li>
        &copy;M A Harper {new Date().getFullYear}
      </li>
      <li>
        Built using Next.js, content managed by NetlifyCMS, continuous deployment to Netlify CDN
      </li>
    </ul>
  )
}