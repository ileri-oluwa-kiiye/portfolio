import  "./project.css"
import crappo from "../img/projects/crappo.png"
import cruvbet from "../img/projects/cruvbet.png"
import fintraka from "../img/projects/fintraka.png"
// import ecommerce from "../img/projects/ecommerce.png"
// import questio from "../img/projects/questio.png"
// import todo from "../img/projects/todo.png"

const Projectpage = () =>{
    return(
        <div>
            <section className="portfolio">
                    <h2 data-aos="zoom-in" data-aos-duration="2000">
                        SOME OF THE PROJECTS I'VE WORKED ON
                    </h2>
                    <div>
                        <div className="flexdesktop">
                            <div>
                                <h3 data-aos="zoom-in">Crappo App</h3>
                                <p data-aos="zoom-in">
                                    An imaginary cryptocurrency website
                                </p>
                            </div>
                            <div>
                                <img src={crappo} alt="Invest Smart" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in">Fin-traka Web App</h3>
                                <p data-aos="zoom-in">
                                    Loren ipsum dolor sit amet consectetur adipisicing elit.
                                    Libero deserunt<br/> commodi quos adipisci! Corporis, vero?
                                </p>
                            </div>
                            <div>
                                <img src={fintraka} alt="Detailed Statistics" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop">
                            <div>
                                <h3 data-aos="zoom-in">Cruvbet</h3>
                                <p data-aos="zoom-in">
                                    Loren ipsum<br/> dolor sit amet consectetur adipisicing elit.
                                    Sit enim odit distinctio dolore id incidunt?
                                </p>
                            </div>
                            <div >
                                <img src={cruvbet} alt="Detailed Statistics" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Projectpage