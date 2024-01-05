import HomeNav from './HomeNav'
import { Link } from "react-router-dom"
import './work.css'


const Work = () => {

    return (
        <>
            <HomeNav />
            <div className="work-wrapper">
                <div className= "work-content-wrapper">
                <div className="work-content">
                    <h1>Projects</h1>
                    <p className="work-p">
                        Step into the innovative world of my Software Engineering Immersive journey, where creativity met code! Throughout this transformative bootcamp, I navigated the intricacies of software development, honing my skills to craft diverse and impactful projects. From designing responsive web applications that streamline user experiences to diving deep into backend development for robust functionality, each project reflects my dedication to merging cutting-edge technology with intuitive design. With a focus on collaborative teamwork, problem-solving, and a passion for delivering scalable solutions, my portfolio showcases a dynamic range of projects that demonstrate my growth as a versatile software engineer ready to make a meaningful impact in the tech industry.</p>
                    <ul className='work-ul'>
                        <li className="li-work"> Email - william.rogers.chi@gmail.com</li>
                        <li className="li-work"> Socials - <Link className="li-link" to='https://github.com/williamrogerschi' target="_blank">GitHub </Link> <Link className="li-link" to='https://www.linkedin.com/in/billy-rogers-chi/' target="_blank">LinkedIn</Link></li>
                    </ul>
                </div>
                <div className='work-list'>
                    <div className="work-container">
                        <a href="https://strava-api.netlify.app/" target='_blank' className="work-li"><span className='title'>Strava API </span><span className='arrow'> 🡢 </span></a>
                        <div className='work-p-container'>
                        <p className='work-li-p'>Stats.Rides.Community.</p>
                        <p className='work-li-p'>Tech Stack: HTML ◍ CSS ◍ JavaScript</p>
                        </div>
                        <p className='work-li-desc'>This was my first project and we had the choice between building a game or using a restful API. I chose to use an API and wanted to build an APP that would allow a user to login and check their profile, rides, and achievements in a simpler UI than what was currently being offered by Strava.</p>
                    </div>
                    <div className="work-container">
                        <a href="https://mern-haus.netlify.app/" className="work-li"><span className='title'>MERN Pizza Haus </span><span className='arrow'> 🡢 </span></a>
                        <div className='work-p-container'>
                        <p className='work-li-p'>Pizza made with the MERN stack, or toppings...</p>
                        <p className='work-li-p'>Tech Stack: MERN ◍ CSS ◍ Bootstrap ◍ MongoDB</p>
                        </div>
                        <p className='work-li-desc'>Collaborated on a pizza ordering web app as part of a group project during a coding bootcamp, employing the MERN stack (MongoDB, Express.js, React, Node.js). The app facilitates user registration, login, menu browsing, order customization, cart management, and secure order processing. For the styling we utilized CSS and Bootstrap.</p>
                    </div>
                    <div className="work-container">
                        <a href="https://cocktail-party-ga.netlify.app/" target='_blank' className="work-li"><span className='title'>Cocktail Party </span><span className='arrow'> 🡢 </span></a>
                        <div className='work-p-container'>
                        <p className='work-li-p'>What's a party without some cocktails and some recipes...</p>
                        <p className='work-li-p'>Tech Stack: MERN ◍ REST API</p>
                        </div>
                        <p className='work-li-desc'>Cocktail Party, a hackathon project, uses React to tap into a cocktail recipe API. I focused on perfecting React mapping and rendering cards to create a user-friendly interface. The aim was simple: help users effortlessly discover cocktail recipes by browsing, searching, and filtering within the app. This project refined my API integration skills and showcased an easy-to-use platform for cocktail enthusiasts.</p>
                    </div>
                    <div className="work-container">
                        <a href="https://bike-labs.netlify.app/" target='_blank' className="work-li"><span className='title'>Bike Labs </span><span className='arrow'> 🡢 </span></a>
                        <div className='work-p-container'>
                        <p className='work-li-p'>A bicycle created in `THE LAB`.</p>
                        <p className='work-li-p'>Tech Stack: MERN ◍ CSS ◍ Bootstrap ◍ MongoDB</p>
                        </div>
                        <p className='work-li-desc'>Imagine a platform where bike lovers can log in, check out different bike builds, and even create their own from scratch. I made it happen! With the MERN stack, I created an easy-to-use app that allowed users to log in, explore existing bike builds, and design their own with all the bells and whistles. Thjis was a hub for cyclists to discover, build, and share their passion for bikes. This project was my capstone and I showcased my skills for both frontend and backend magic. By having full CRUD across the app.</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Work