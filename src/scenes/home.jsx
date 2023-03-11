import Preloader from "../components/preloader";
import Mainnav from "../components/mainnav"
import Hero from "../components/hero"

const Home = () =>{
    return(
        <div>
            <Preloader />
            <Mainnav />
            <Hero/>
        </div>
    )
}

export default Home