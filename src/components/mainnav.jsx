import logo from "../img/initial.svg"
import styles from "./mainnav.module.css"

const Mainnav =() =>{
    return(
        <div className={styles.nav}>
            <nav>
                <ul>
                    <li className={styles.first}><img src={logo} alt="" height={30} /></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Mainnav