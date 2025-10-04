import Card from '../Card/Card'
import styles from './ProjetBlock.module.css'
import PROJET from './projets.info'

export default function ProjetBlock() {
    return(
        <div className={styles.container}>
            <h2>PORTFOLIO</h2>
            <div className={styles.card_container}>
                {PROJET.map((element, index) => 
                <Card 
                    key={index} 
                    name={element.name}
                    link={element.link}
                    icon={element.icon} 
                    description={element.description}
                />)}
            </div>
        </div>
    )
}