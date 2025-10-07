import styles from './ContactIcon.module.css'

export default function ContactIcon(props) {

    const style = {'--color': `${props.color}` }
    const go_to_link = () => window.open(props.link, '_blank')

    return(
        <div style={style} className={styles.container} onClick={go_to_link}>
            <img src={props.icon} alt={props.name} />
        </div>
    )
} 