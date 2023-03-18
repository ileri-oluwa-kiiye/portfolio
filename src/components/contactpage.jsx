import styles from "./contact.module.css"
import message from "../img/message.png"
import Footer from "./footer"


const Contactpage = () =>{
    return(
        <div className={styles.wrapdiv}>
            <div className="controlwidth">
                <div className={styles.contact}>
                    <div className={styles.main}>
                        <div>
                            <h2>Get in touch</h2>
                            <p>
                                I am very approachable, I would 
                                love to hear from you. Feel free to 
                                email me or contact me on my social
                                media accounts.
                            </p>
                            <p>Thank you for your time.</p>
                            <div className={styles.message}>
                                <img src={message} alt="" />
                                <p>aboladeilerioluwakiiye@gmail.com</p>
                            </div>

                        </div>
                        <div>
                            <form action="https://getform.io/f/523511a3-4256-490b-9cbd-4c8002b0467a" method="POST">
                                <h2>Send me a message</h2>
                                <input type="text" placeholder="Name" name="name" />
                                <input type="email" placeholder="Email" name="email" />
                                <input type="text" placeholder="Subject" name="subject" />
                                <textarea placeholder="Message" name="Message"></textarea>
                                <div className={styles.button}>
                                    <button>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div><Footer /></div>
                </div>
            </div>
        </div>
    )
}

export default Contactpage