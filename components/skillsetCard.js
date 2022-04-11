
import styles from './skillsetCard.module.css';

export default function SkillsetCard(props) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3>{props.title}</h3>
      </div>

      <img className={styles.img} src={`/img/${props.category}.png`} alt={`image relating ${props.category} skills`} />

      <p className={styles.synopsis}>
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