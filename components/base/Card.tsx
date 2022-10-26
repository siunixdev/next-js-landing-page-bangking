import { FC } from 'react'
import styles from '../../styles/Card.module.css'

interface FeaturesCardProps {
  title: string,
  description: string,
  icon: any,
  color: string
}

const Card: FC<FeaturesCardProps> = (props): JSX.Element => {
  return (
    <>
      <div className={styles.card}>
        <div>
          <div className={styles.icon} style={{ backgroundColor:props.color }}>
            {props.icon}
          </div>
        </div>
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default Card