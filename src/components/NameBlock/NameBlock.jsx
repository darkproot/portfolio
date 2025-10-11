import styles from './NameBlock.module.css'

export default function NameBlock() {
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <p className={styles.p_one}>Hi, I'm <span>Elie</span></p>
                <p className={styles.p_two}>Élève Ingénieur</p>
                <button className={styles.action}>Telecharger CV</button>
            </div>
            <div className={styles.image}>
                <div className={styles.img_container}>
                    <img src="/public/redjohn1.jpg" alt="Redjohn" />
                </div>
            </div>
        </div>
    )
}