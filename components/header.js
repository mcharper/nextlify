import { attributes } from '../content/header.md';

export default function Header() {
  let { navigation, title, subtitle } = attributes;

  return (
    <>
      <h1>{title}</h1>

      <h2>{subtitle}</h2>

      <ul>
        {navigation.map((link) => (
          <a href={link.link}>{link.label} | </a>
        ))}
        </ul>
    </>
)
}