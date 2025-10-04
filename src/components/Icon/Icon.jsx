import styles from './Icon.module.css'

export default function Icon(props) {
    return(
        <div className={styles.container}>
            <div className={styles.info}><span>{props.name}</span></div>
            <div className={styles.img_container}>
                <img src={props.link} alt={props.name} />
            </div>
        </div>
    )
}