import logo from "../img/initial.svg"
import { Link } from 'react-router-dom'
import styles from "./mainnav.module.css"

const Mainnav =() =>{
    return(
        <div className={styles.nav}>
            <nav>
                <ul>
                    <li className={styles.first}><img src={logo} alt="" height={30} /></li>
                    <Link to="/" style={{color:'inherit', textDecoration: 'none'}}><li>Home</li></Link>
                    <Link to="/about" style={{color:'inherit', textDecoration: 'none'}}><li>About</li></Link>
                    <Link to="/projects" style={{color:'inherit', textDecoration: 'none'}}><li>Projects</li></Link>
                    <Link to="/contact" style={{color:'inherit', textDecoration: 'none'}}><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Mainnav