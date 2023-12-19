import HomeNav from './HomeNav'
import './about.css'
import Typed from 'react-typed'

const About = () => {

    const onCompleteTyped = (self) => {
        self.cursor.style.display = 'none'
    }

    return (
        <>
            <HomeNav />
            <div className="about-wrapper">
                <div className="about-content">
                    {/* <h1 className="about">About</h1> */}
                    <div className='about-img-wrapper'>
                    <div className='image-container'>
                        <img className='headshot' src='./billy.jpeg' />
                    </div>
                        <Typed
                            strings={["Aboyut", 'Abo', 'About']}
                            typeSpeed={160}
                            backSpeed={70}
                            backDelay={800}
                            showCursor={true}
                            // onComplete={(self) => onCompleteTyped(self)}
                            cursorChar='|'
                            loopCount={0}
                            className="text"
                        />
                    </div>
                    <div className='about-blurb-container'>
                        <h3 className="about-h3">Versatile software engineer with expertise in the MERN tech stack, complemented by a strong foundation in operations. Skilled in creating dynamic web applications and leveraging RESTful APIs. Key strengths include excellent interpersonal skills for fostering open and effective communication, a natural aptitude for problem-solving, and exceptional attention to detail. Demonstrated ability to thrive under pressure in challenging, multi-functional environments.</h3>
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
                        <a href='https://drive.google.com/file/d/1TA6d3GxuEdSd6F2MXYVBGGBwma55FMzw/view?usp=sharing' target='_blank' className='resume-btn'>Resume</a>
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
                        <a href='/Contact' className='resume-btn'>Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About
