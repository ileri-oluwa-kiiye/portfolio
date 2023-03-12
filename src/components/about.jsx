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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione vitae tenetur reprehenderit asperiores dignissimos architecto, beatae error distinctio mollitia, deserunt non quod unde incidunt, laudantium veritatis tempora labore ab aspernatur. Maiores, numquam. Excepturi sed deleniti possimus quas quaerat eligendi accusamus officiis autem at itaque mollitia doloribus nostrum architecto doloremque dolore error, molestias atque numquam nemo explicabo fugit tempore! Illo qui mollitia tenetur nisi iste necessitatibus ipsa minus laudantium beatae doloremque deserunt eveniet obcaecati culpa, atque cupiditate saepe illum suscipit?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme