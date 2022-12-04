import icon from '../assets/icon.png';
import super1 from '../assets/super1.png';
import release2 from '../assets/release2.png';
import Card from './Card';

const Free = ({}) => {
        return (<div className='free'>
                <div className="container">
                        <div className="background">
                                <div className="ellipse pink"></div>
                                <div className="ellipse green"></div>
                        </div>
                        <div className="content">
                                <div className="image">
                                        <img src={icon} alt="icccccon" />
                                </div>
                                <h2 className="title">Free NFT for early cocks</h2>
                                <p className="description">
                                        sign up today and you will get whitelisted
                                </p>
                        </div>
                </div>
                <div className="cards">
                        <div className="card1">
                                <Card image={super1} series="Flop" title="purpleman" price={2.99} tag={12983} time={1} />
                        </div>
                        <div className="card2">
                                <Card image={release2} series="Flop" title="purpleman" price={3.95} tag={12983} time={2} />
                        </div>
                </div>
        </div>);
}
export default Free;