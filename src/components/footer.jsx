import "./footer.css"
import instagram from "../img/instagram.png"
import linkedin from "../img/linkedin.png"
import github from "../img/github.png"
import twitter from "../img/twitter.png"


const Footer =() =>{
    return(
        <div className="footer">
            <img src={twitter} alt="" width={30}/>
            <img src={instagram} alt="" width={30}/>
            <img src={linkedin} alt="" width={30}/>
            <img src={github} alt="" width={30}/>
        </div>
    )
}


export default Footer