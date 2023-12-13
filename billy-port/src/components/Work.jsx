import HomeNav from "./HomeNav"
import './work.css'

const Work = () => {
    return (
        <>
            <HomeNav />
            <div className="work-wrapper">
                <div className="container">
                    <input type="radio" name="slide" id="c1" defaultChecked />
                    <label htmlFor="c1" className="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <h4>Strava API</h4>
                                <p>Tech Stack: HTML5, CSS3, JavaScript</p>
                                <p>API Integration: Strava API</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c2" />
                    <label htmlFor="c2" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h4 className="black">Bike Builder</h4>
                                <p className="black">Tech Stack: MERN | Boostrap</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c3" />
                    <label htmlFor="c3" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h4>Cocktail Party</h4>
                                <p>Tech Stack: MERN</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c4" />
                    <label htmlFor="c4" className="card">
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                                <h4>MERN Pizza Haus</h4>
                                <p>Tech Stack: MERN</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Work