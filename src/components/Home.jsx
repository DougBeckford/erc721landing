import home from "../assets/home.png"

const Home = () => {
        return (<div className="home">
                <div className="container">
                        <div className="content">
                                <p className="sub-title">Launching Soon</p>
                                <h1 className="title">An NFT like no other</h1>
                                <p className="description">Don't miss out on the release of our new NFT. Sign Up below to receive update on the go live</p>
                                <button>MINT</button>
                        </div>
                        <div className="image-container">
                                <div className="image">
                                        <img src={home} alt="hommmmmme" />
                                </div>
                                <div className="ellipse-container">
                                        <div className="ellipse pink"></div>
                                        <div className="ellipse orange"></div>
                                </div>
                        </div>
                </div>

        </div>);
}
export default Home;