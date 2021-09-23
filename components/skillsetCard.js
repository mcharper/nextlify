
import styles from './skillsetCard.module.css';

export default function SkillsetCard(props) {
  return (
    <div id={styles.root}>
      <div id={styles.header}>
        <h3>{props.title}</h3>
      </div>

      <img className={styles.img} src={`/img/${props.category}.png`} />

      <p id={styles.synopsis}>
        {props.description}
      </p>

      <ul className={styles.skillList}>
        {props.skills.map((skill, k) => (
          <li key={k}>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  )
}