import styles from "./about.module.css"
import aboutme from "../img/aboutheading.png"


const Aboutme = () =>{
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">

                <div className={styles.wrap} data-aos="fade-up" data-aos-duration="1000">
                    <img src={aboutme} alt="" />
                    <div className={styles.about}>
                        <div className={styles.content} data-aos="slide-left" data-aos-delay="00" data-aos-duration="1100">
                        As a highly motivated frontend developer with an insatiable desire for knowledge, I am dedicated to expanding my skills and knowledge in this field. I possess a very strong foundation in HTML, CSS and JavaScript, and I’m well versed in popular frontend frameworks and libraries, like React and bootstrap. With an unwavering commitment to continuous learning and professional growth, I am eager to contribute my skills and enthusiasm to any project I am involved in.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme