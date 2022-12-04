// import Card from './Card'

const Tree = () => {
        return (<div className="tree">
            tree
            <div className="container">
                <div className="column">
                    first-column
                    <div className="box">
                        <h2 className="title">
                            title
                        </h2>
                        <p className="description">
                            description
                        </p>
                    </div>
                    <div className="box"></div>
                    <div className="box">
                        <h2 className="title">
                            title
                        </h2>
                        <p className="description">
                            description
                        </p>
                    </div>
                </div>
                <div className="column">
                    second-column
                    <div className="box"></div>
                    <div className="box">
                        <h2 className="title">
                            title
                        </h2>
                        <p className="description">
                            description
                        </p>
                    </div>
                    <div className="box"></div>
                </div>
            </div>
        </div>);
}
export default Tree;