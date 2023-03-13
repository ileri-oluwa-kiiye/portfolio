import logo from "../img/initial.svg"
import { Link } from 'react-router-dom'
import styles from "./mainnav.module.css"
import opennav from "../img/opennav.png"

const Mainnav =() =>{


    return(
        <div className={styles.nav}>
            <nav>
                <ul data-aos="slide-right" data-aos-delay="700" data-aos-duration="1100">
                    <div className={styles.logo}>
                        <Link to="/" style={{color:'inherit', textDecoration: 'none'}}><li className={styles.first}><img src={logo} alt="" height={60} /></li></Link>
                    </div>
                    <div className={styles.hidemobile}>
                        <Link to="/" style={{color:'inherit', textDecoration: 'none'}}><li>Home</li></Link>
                        <Link to="/about" style={{color:'inherit', textDecoration: 'none'}}><li>About</li></Link>
                        <Link to="/projects" style={{color:'inherit', textDecoration: 'none'}}><li>Projects</li></Link>
                        <Link to="/contact" style={{color:'inherit', textDecoration: 'none'}}><li>Contact</li></Link>
                    </div>
                </ul>

                    <ul className={styles.hidedesktop}>
                        <li><img src={opennav} alt="" height={23} width={30} /></li>
                    </ul>
            </nav>
        </div>
    )
}

export default Mainnav