import styles from './Card.module.css'

export default function Card(props) {

    const go_to = (path) => window.open(path, '_blanc')

    return(
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img src={props.icon} alt={props.name} />
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button onClick={() => go_to(props.link)}>Voir plus</button>
        </div>
    )
}