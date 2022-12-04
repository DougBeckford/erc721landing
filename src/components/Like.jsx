import eth1 from '../assets/eth1.png'
import eth2 from '../assets/eth2.png'

const Like = () => {
        return (<div className='like'>
                <div className="container">
                        <div className="content">
                                <div className="image">
                                        <img src={eth1} alt="eth1" />
                                </div>
                                <h2 className="title">an nft like shit</h2>
                                <p className="description">Don't miss out on the release of this shit</p>
                                <p className="description">Don't miss out on the release of this shit</p>
                        </div>


                        <div className="content">
                                <div className="image">
                                        <img src={eth2} alt="eth2" />
                                </div>
                                <h2 className="title">an nft like shit</h2>
                                <p className="description">Don't miss out on the release of this shit</p>
                                <p className="description">Don't miss out on the release of this shit</p>
                        </div>
                </div>
        </div>);
}
export default Like;