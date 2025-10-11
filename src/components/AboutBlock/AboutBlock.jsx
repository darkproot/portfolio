import styles from './AboutBlock.module.css'

export default function AboutBlock() {
    return(
        <div className={styles.container}>
            <div className={styles.image}>
                <div className={styles.img_container}>
                    <img src="/redjohn.jpg" alt="Redjohn" />
                </div>
            </div>
            <div className={styles.text}>
                <h2>ABOUT ME</h2>
                <p>Mon moteur ? Comprendre un défi et trouver la solution la plus élégante pour le relever. Que se soit à travers du <span className={styles.highlight}>Machine Learning</span>, <span className={styles.highlight}>Deep Learning</span>, j'aime construire des ponts entre vision et réalisation.</p>
            </div>
        </div>
    )
}