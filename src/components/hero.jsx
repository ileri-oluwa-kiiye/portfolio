import styles from "./hero.module.css"
import view from "../img/view.png"

const Hero = () => {
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">

                <div className={styles.hero}>
                    <div className={styles.text}  data-aos="fade-up" data-aos-delay="3000" data-aos-duration="3000">
                        <h1>Hi, I am <br/>Abolade Ilerioluwakiiye</h1>
                        <h4>Frontend Developer & Technical Writer</h4>
                        <div className={styles.button}>
                            <button className={styles.first}>View my work <img src={view} alt="" /></button>
                            <button>Contact Me</button>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Hero 