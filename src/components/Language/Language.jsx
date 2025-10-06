import styles from './Language.module.css'

export default function Language(props) {

    const progess = { '--language-progess-width': `${props.value}%`, '--progress': `"${props.value}"` }

    return(
        <div className={styles.container}>
            <div className={styles.img_container}>
                <img src={props.link} alt={props.name} />
            </div>
            <div className={styles.value_container}>
                <label style={progess}>{props.name}</label>
                <div style={progess} className={styles.progress}></div>
            </div>
        </div>
    )
}