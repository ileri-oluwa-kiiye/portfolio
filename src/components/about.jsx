import styles from "./about.module.css"
import aboutme from "../img/aboutheading.png"


const Aboutme = () =>{
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">
                <img src={aboutme} alt="" />
            </div>
        </div>
    )
}

export default Aboutme