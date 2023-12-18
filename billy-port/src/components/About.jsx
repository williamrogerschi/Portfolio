import HomeNav from './HomeNav'
import './about.css'

const About = () => {
    return (
        <>
            <HomeNav />
            <div className="about-wrapper">
                <div className="about-content">
                    <div className="about-content-container">
                        <h1 className="about">About</h1>
                        <h3 className="about-h3">Billy Rogers, a creative mind.</h3>
                    </div>
                    <div className='experience-wrapper'>
                        <div className='experience'>
                            <p className='experience-header'>Experience</p>
                        </div>
                        <div className='experience-content'>
                            <span className='about-exp'>- General Assembly | </span> <span className='about-exp'>September 2023 - December 2023 | Remote</span>
                            <p className='content-exp'>- Certificate of completion for Software Engineering Immersive 12 week bootcamp.</p>
                            <p className='content-exp'>- Degree in Business Administration from Northeastern Illinois University | Graduated May 2021</p>
                        </div>
                    </div>

                    <div className='resume-btn-wrapper'>
                        <a href='/Resume' type='button' className='resume-btn'>Resume</a>
                    </div>

                    <div className='experience-wrapper'>
                        <div className='experience'>
                            <p className='experience-header'>Skills</p>
                        </div>
                        <div className='experience-content'>
                            <span className='about-exp'>- Languages: </span> <span className='about-exp'>JavaScript ·  HTML · CSS · Python · SQL ·  Mongo · JSON | Database - MongoDB</span>
                            <p className='content-exp'>- Libraries and Frameworks: React · Express.js · Django  ·  Bootstrap  ·  Tailwind</p>
                            <p className='content-exp'>- Other: RESTful Routing · JSON API  ·  SAP · Salesforce</p>
                        </div>
                    </div>

                    <div className='resume-btn-wrapper'>
                        <a href='/Contact' button type='button' className='contact-btn'>Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About
