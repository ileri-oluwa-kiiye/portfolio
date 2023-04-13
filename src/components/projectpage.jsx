import  "./project.css"
import crappo from "../img/projects/crappo.png"
import cruvbet from "../img/projects/cruvbet.png"
import fintraka from "../img/projects/fintraka.png"
import ecommerce from "../img/projects/ecommerce.png"
import questio from "../img/projects/questio.png"
import todo from "../img/projects/todo.png"
import writeit from "../img/projects/write-itt.png"

const Projectpage = () =>{
    return(
        <div>
            <section className="portfolio">
                <div className="controlwidth">
                    <h2 data-aos="zoom-in" data-aos-duration="2000">
                        PROJECTS
                    </h2>
                    <div>
                        <div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Write-it</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    Hashnode inspired: This site is for Christians to share their experiences of how they dealt with sin one way or the other. <br/>
                                    Technologies utilized: HTML, CSS, Git $ GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://write-itt.netlify.app/" target={"_blank"} rel="noreferrer">LIVE SITE</a>
                                    <a href="https://github.com/ileri-oluwa-kiiye/write-it">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={writeit} alt="Invest Smart" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Crappo App</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    An imaginary cryptocurrency website.<br/>
                                    Technologies utilized: HTML, CSS, BootStrap, AOS library, JavaScript, Git $ GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://cryptochallengeileri.netlify.app" target={"_blank"} rel="noreferrer">LIVE SITE</a>
                                    <a href="https://github.com/ileri-oluwa-kiiye/cryptochallenge">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={crappo} alt="Invest Smart" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Fin-traka Web App</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    A book-keeping web app.<br/>
                                    Technologies utilized: React, Nivo Library, Recharts, Git $ GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://fintraka.netlify.app" target={"_blank"} rel="noreferrer">LIVE SITE</a>
                                    <a href="https://github.com/ileri-oluwa-kiiye/fin-trakaa">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={fintraka} alt="Detailed Statistics" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Cruvbet</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    An imaginary website for CRUVBET.<br/>
                                    Technologies utilized: HTML, CSS, JavaScript, Git$GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://cruvbet.netlify.app/" target={"_blank"} rel="noreferrer">LIVE SITE</a>
                                    <a href="https://github.com/ileri-oluwa-kiiye/cruvbet">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={cruvbet} alt="Detailed Statistics" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Ecommerce</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    An ecommerce website for an imaginary company.<br/>
                                    Technologies utilized: HTML, CSS JavaScript, Git $ GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://ecommerce-ileri.netlify.app/" target={"_blank"} rel="noreferrer">LIVE SITE</a>
                                    <a href="https://github.com/ileri-oluwa-kiiye/ecommerce">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={ecommerce} alt="Invest Smart" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">Questio Web App</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    An app for accessing past questions online.<br/>
                                    Technologies utilized: HTML, CSS JavaScript, Git $ GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://questio-ileri.netlify.app/" target={"_blank"} rel="noreferrer">LIVE SITE</a>
                                    <a href="https://github.com/ileri-oluwa-kiiye/questio">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={questio} alt="Detailed Statistics" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                        <div className="flexdesktop rowreverse">
                            <div>
                                <h3 data-aos="zoom-in"  data-aos-duration="1000">To-do List</h3>
                                <p data-aos="zoom-in"  data-aos-duration="1000">
                                    A to do list<br/>
                                    Technologies utilized: HTML, CSS, JavaScript, Git$GitHub, Terminal.
                                </p>
                                <p>
                                    <a href="https://todolist-ileri.netlify.app" target={"_blank"} rel="noreferrer">LIVE SITE</a>
                                    <a href="https://github.com/ileri-oluwa-kiiye/to-do-list">SOURCE CODE</a>
                                </p>
                            </div>
                            <div>
                                <img src={todo} alt="Detailed Statistics" data-aos="zoom-in" data-aos-duration="2000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projectpage