import styles from "./hero.module.css"
import view from "../img/view.png"
import { Link } from 'react-router-dom'

const Hero = () => {
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">

                <div className={styles.hero}>
                    <div className={styles.text}>
                        <h1>Hi, I am <br/>Abolade Ilerioluwakiiye</h1>
                        <h4>Frontend Developer</h4>
                        <div className={styles.button}>
                            <Link to="/projects" style={{color:'inherit', textDecoration: 'none'}}><button className={styles.first}>My Projects <img src={view} alt="" /></button></Link>
                            <a href="https://drive.google.com/file/d/1nX47Sgwc6NYSMxWxUAWMM1U1F3EOr6JC/view?usp=drive_link" style={{color:'inherit', textDecoration: 'none'}}><button>View Resume</button></a>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Hero 