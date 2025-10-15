import styles from './NavBar.module.css'

export default function NavBar() {

    const go_to_github = () => window.open('https://github.com/darkproot', '_black')

    return(
        <div className={styles.navbar}>
            <h1 htmlFor="Logo" onClick={go_to_github}>X-vErSe</h1>
        </div>
    )
}