import styles from './AboutBlock.module.css'

export default function AboutBlock() {
    return(
        <div className={styles.container}>
            <div className={styles.image}>
                <div className={styles.img_container}>
                    <img src="/src/assets/Redjohn-figurine-pop.jpg" alt="Redjohn" />
                </div>
            </div>
            <div className={styles.text}>
                <h2>ABOUT ME</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nulla error, veniam, voluptas cupiditate expedita eaque officiis assumenda facilis quasi quo ad sequi veritatis ullam reiciendis fugit ipsam accusamus ipsa!</p>
            </div>
        </div>
    )
}