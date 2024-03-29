import HomeNav from './HomeNav'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './work.css'


const Work = () => {
    const [isSticky, setIsSticky] = useState(true)
  
    useEffect(() => {
      setIsSticky(true)
    }, [])

    return (
        <>
            <HomeNav />
            <div className="work-wrapper">
                <div className="work-content-wrapper">
                    <div className="work-content">
                        <h1 className='work-li'>Projects</h1>
                        <p className="work-p">
                            Step into the innovative world of my Software Engineering Immersive journey, where creativity met code! Throughout this transformative bootcamp, I navigated the intricacies of software development, honing my skills to craft diverse and impactful projects. From designing responsive web applications that streamline user experiences to diving deep into backend development for robust functionality, each project reflects my dedication to merging cutting-edge technology with intuitive design. With a focus on collaborative teamwork, problem-solving, and a passion for delivering scalable solutions, my portfolio showcases a dynamic range of projects that demonstrate my growth as a versatile software engineer ready to make a meaningful impact in the tech industry.</p>
                        <ul className='work-ul'>
                            <li className="li-work"> Email - william.rogers.chi@gmail.com</li>
                            <li className="li-work"> Socials - <Link className="li-link" to='https://github.com/williamrogerschi' target="_blank">GitHub </Link> <Link className="li-link" to='https://www.linkedin.com/in/billy-rogers-chi/' target="_blank">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <div className='work-list'>

                    <div className="work-container">
                            <div className='work-img-wrapper'>
                                <div className='work-title-wrapper'>
                                    <p  className="work-li"><span className='title'>Bike Labs </span></p>
                                    <div className='work-p-container'>
                                        <p className='work-li-p'>A bicycle created in `THE LAB`.</p>
                                        <p className='work-li-p'>Tech Stack: MERN ◍ CSS ◍ Bootstrap ◍ MongoDB</p>
                                    </div>
                                </div>
                                <div className='project-img-wrapper'>
                                    <div className='project-img-container'>
                                        <a href="https://bike-labs.netlify.app/" target='_blank' ><img className='project-img' src='./aethos-grainy-2.jpg' /></a>
                                    </div>
                                </div>
                            </div>
                            <p className='work-li-desc'>Imagine a platform where bike lovers can log in, check out different bike builds, and even create their own from scratch. I made it happen! With the MERN stack, I created an easy-to-use app that allowed users to log in, explore existing bike builds, and design their own with all the bells and whistles. This was a hub for cyclists to discover, build, and share their passion for bikes. This project was my capstone and I showcased my skills for both frontend and backend magic. By having full CRUD across the app <strong>[ Login: 'Wumpy' ]</strong>.</p>
                        </div>


                        <div className="work-container">
                            <div className='work-img-wrapper'>
                                <div className='work-title-wrapper'>
                                    <p className="work-li"><span className='title'>Strava API </span></p>
                                    <div className='work-p-container'>
                                        <p className='work-li-p'>Stats.Rides.Community.</p>
                                        <p className='work-li-p'>Tech Stack: HTML ◍ CSS ◍ JavaScript</p>
                                    </div>
                                </div>
                                <div className='project-img-wrapper'>
                                    <div className='project-img-container'>
                                        <a href="https://strava-api.netlify.app/" target='_blank' ><img className='project-img' src='./strava-grainy-2.png' /></a>
                                    </div>
                                </div>
                            </div>
                            <p className='work-li-desc'>This was my first project and we had the choice between building a game or using a restful API. I chose to use an API and wanted to build an APP that would allow a user to login and check their profile, rides, and achievements in a simpler UI than what was currently being offered by Strava.</p>
                        </div>

                        <div className="work-container">
                            <div className='work-img-wrapper'>
                                <div className='work-title-wrapper'>
                                    <p className="work-li"><span className='title'>Gothic Brief</span></p>
                                    <div className='work-p-container'>
                                        <p className='work-li-p'>A brief look into the Gothic Era.</p>
                                        <p className='work-li-p'>Tech Stack:  GSAP ◍ CSS ◍ JavaScript ◍ HTML</p>
                                    </div>
                                </div>
                                <div className='project-img-wrapper'>
                                    <div className='project-img-container'>
                                        <a href="https://gothic-brief.netlify.app/" target='_blank' ><img className='project-img' src='./hero-grainy.png' /></a>
                                    </div>
                                </div>
                            </div>
                            <p className='work-li-desc'>This was my first time using GSAP and while I still have a lot to learn, I feel like I learned alot. This project is a brief look into the Gothic Era using GSAP and CSS to give the page a sort of modern vibe on a Medieval time period.</p>
                        </div>

                        <div className="work-container">
                            <div className='work-img-wrapper'>
                                <div className='work-title-wrapper'>
                                    <p className="work-li"><span className='title'>Cocktail Party </span></p>
                                    <div className='work-p-container'>
                                        <p className='work-li-p'>What's a party without some cocktails and some recipes...</p>
                                        <p className='work-li-p'>Tech Stack: MERN ◍ REST API ◍ CSS</p>
                                    </div>
                                </div>
                                <div className='project-img-wrapper'>
                                    <div className='project-img-container'>
                                        <a href="https://cocktail-party-ga.netlify.app/" target='_blank'  ><img className='project-img' src='./cocktails-grainy-2.jpg' /></a>
                                    </div>
                                </div>
                            </div>
                            <p className='work-li-desc'>Cocktail Party, a hackathon project, uses React to tap into a cocktail recipe API. I focused on perfecting React mapping and rendering cards to create a user-friendly interface. The aim was simple: help users effortlessly discover cocktail recipes by browsing, searching, and filtering within the app. This project refined my API integration skills and showcased an easy-to-use platform for cocktail enthusiasts.</p>
                        </div>

                        <div className="work-container">
                            <div className='work-img-wrapper'>
                                <div className='work-title-wrapper'>
                                    <p className="work-li"><span className='title'>MERN Pizza Haus </span></p>
                                    <div className='work-p-container'>
                                        <p className='work-li-p'>Pizza made with the MERN stack, or toppings...</p>
                                        <p className='work-li-p'>Tech Stack: MERN ◍ CSS ◍ Bootstrap ◍ MongoDB</p>
                                    </div>
                                </div>
                                <div className='project-img-wrapper'>
                                    <div className='project-img-container'>
                                        <a href="https://mern-haus.netlify.app/" target='_blank' ><img className='project-img' src='./mern-haus-grainy.jpg' /></a>
                                    </div>
                                </div>
                            </div>
                            <p className='work-li-desc'>Collaborated on a pizza ordering web app as part of a group project during a coding bootcamp, employing the MERN stack (MongoDB, Express.js, React, Node.js). The app facilitates user registration, login, menu browsing, order customization, cart management, and secure order processing. For the styling we utilized CSS and Bootstrap.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Work