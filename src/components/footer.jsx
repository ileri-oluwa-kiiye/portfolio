import "./footer.css"
import instagram from "../img/instagram.png"
import linkedin from "../img/linkedin.png"
import github from "../img/github.png"
import twitter from "../img/twitter.png"


const Footer =() =>{
    return(
        <div className="footer">
            <a href="https://twitter.com/llerioluwakiiye"><img src={twitter} alt="" width={30}/></a>
            <a href="https://instagram.com/ileri_oluwa_kiiye"><img src={instagram} alt="" width={30}/></a>
            <a href="https://www.linkedin.com/in/ilerioluwakiiye"><img src={linkedin} alt="" width={30}/></a>
            <a href="https://github.com/ileri-oluwa-kiiye"><img src={github} alt="" width={30}/></a>
        </div>
    )
}


export default Footer