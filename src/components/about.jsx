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
                        Hi, I am Sakshi, a barista, chef, a salesgirl, an IT support Specialist and now, finally turning to my dream role UX designer. 
                        My motto is IDEAS, illustrate designs to empower aspiring solutions. I want to use my skills, designs and creativity to shape 
                        and enhance the ideas or solutions that aspire to change the society and benefit every person irrespective of their background. 
                        Graduated from Douglas College in March 2022, I have studied various course works and successfully completed variety of projects 
                        and worked diverse set of jobs, all of this polishing me towards the bigger goal. Since, my childhood I have this fascination 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme