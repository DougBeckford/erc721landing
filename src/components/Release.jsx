import { BsArrowRight } from "react-icons/bs";
import release1 from '../assets/release1.png'
import release2 from '../assets/release2.png'
import Card from './Card';


const Release = () => {
        return (<div className="releases">
                <div className="release orange">
                        <div className="content">
                                <h2 className="title">
                                        Initial release: Never
                                </h2>
                                <p className="description">we have released 4 farts to the universe  </p>
                                <p className="description">we have released 4 farts to the universe  </p>
                                <p className="description">we have released 4 farts to the universe  </p>
                                <a href="/#" className="link">check them out <BsArrowRight/> </a>
                        </div>
                        <div className="image">
                                <img src={release1} alt="release" />
                                <div className="ellipse pink"></div>
                        </div>
                </div>


                <div className="release green">
                        <div className="card-container">
                                <Card image={release2} series="Flop" title="purpleman" price={2.99} tag={12983} time={1} />
                                <div className="ellipse orange"></div>
                        </div>
                        <div className="content">
                                <h2 className="title">
                                        Initial release: Never
                                </h2>
                                <p className="description">we have released 4 farts to the universe  </p>
                                <p className="description">we have released 4 farts to the universe  </p>
                                <p className="description">we have released 4 farts to the universe  </p>
                                <a href="/#" className="link">check them out <BsArrowRight/> </a>
                        </div>
                </div>

        </div>);
}
export default Release;