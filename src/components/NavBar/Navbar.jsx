import styles from './NavBar.module.css'

export default function NavBar() {

    const go_to_github = () => window.open('https://github.com/darkproot', '_black')

    return(
        <div className={styles.navbar}>
            <label htmlFor="Logo" onClick={go_to_github}>x-verse</label>
        </div>
    )
}