import styles from "./hero.module.css"
import view from "../img/view.png"
import { Link } from 'react-router-dom'

const Hero = () => {
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">

                <div className={styles.hero}>
                    <div className={styles.text}  data-aos="fade-up" data-aos-delay="3000" data-aos-duration="3000">
                        <h1>Hi, I am <br/>Abolade Ilerioluwakiiye</h1>
                        <h4>Frontend Developer</h4>
                        <div className={styles.button}>
                            <Link to="/projects" style={{color:'inherit', textDecoration: 'none'}}><button className={styles.first}>View my work <img src={view} alt="" /></button></Link>
                            <Link to="/contact" style={{color:'inherit', textDecoration: 'none'}}><button>Contact Me</button></Link>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Hero 