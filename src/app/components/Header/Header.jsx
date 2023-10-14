import Logo from "../../../assets/logo.svg"
import styles from "./Header.module.css"
import UserMenu from "./UserMenu/UserMenu"
import { Link } from "react-router-dom"


export default function Header() {

    return (
        <header className={styles.container}>
            <nav className={styles.navegation}>
                <img className={styles.logo} src={Logo} alt="" />
                <ul className={styles.navegationList} >
                    <li><Link to="/home" className={styles.navegationLinks}>Home</Link></li>
                    <li><Link to="/cakes" className={styles.navegationLinks}>Bolos</Link></li>
                    <li><Link to="/events" className={styles.navegationLinks}>Eventos</Link></li>
                    <li><Link to="/contacts" className={styles.navegationLinks}>Contatos</Link></li>
                </ul>
                <UserMenu />
            </nav>
        </header>
    )
}