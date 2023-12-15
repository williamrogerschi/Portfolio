import HomeNav from './HomeNav'
import { Link } from "react-router-dom"
import './projects.css'


const Projects = () => {

    return (                
    <>
    <HomeNav />
            <div className="work-wrapper">
                <div className="work-content">
                    <div className="work-content-container">
                        <h1>Projects</h1>
                        <p className="work-p">
                            "Step into the innovative world of my Software Engineering Immersive journey, where creativity met code! Throughout this transformative bootcamp, I navigated the intricacies of software development, honing my skills to craft diverse and impactful projects. From designing responsive web applications that streamline user experiences to diving deep into backend development for robust functionality, each project reflects my dedication to merging cutting-edge technology with intuitive design. With a focus on collaborative teamwork, problem-solving, and a passion for delivering scalable solutions, my portfolio showcases a dynamic range of projects that demonstrate my growth as a versatile software engineer ready to make a meaningful impact in the tech industry."</p>
                        <ul >
                            <li className="li-contact"> Email - william.rogers.chi@gmail.com</li>
                            <li className="li-contact"> Socials - <Link className="li-link" to='https://github.com/williamrogerschi' target="_blank">GitHub </Link> <Link className="li-link" to='https://www.linkedin.com/in/billy-rogers-chi/' target="_blank">LinkedIn</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='work-list'>
                    <div className="work-container">
                        <a href="#" className="work-li">Strava API</a>
                        {/* <img height={'300px'} width={'400px'} src="./swork.jpeg" /> */}
                        <p>description</p>
                        <p>Tech stack used</p>
                        <p>takeaways</p>
                        </div>
                        <div className="work-container">
                        <a href="#" className="work-li">Strava API</a>
                        {/* <img height={'300px'} width={'400px'} src="./swork.jpeg" /> */}
                        <p>description</p>
                        <p>Tech stack used</p>
                        <p>takeaways</p>
                        </div>
                        <div className="work-container">
                        <a href="#" className="work-li">Strava API</a>
                        {/* <img height={'300px'} width={'400px'} src="./swork.jpeg" /> */}
                        <p>description</p>
                        <p>Tech stack used</p>
                        <p>takeaways</p>
                        </div>
                        <div className="work-container">
                        <a href="#" className="work-li">Strava API</a>
                        {/* <img height={'300px'} width={'400px'} src="./swork.jpeg" /> */}
                        <p>description</p>
                        <p>Tech stack used</p>
                        <p>takeaways</p>
                        </div>
                </div>
            </div>
            </>
    )
}
export default Projects