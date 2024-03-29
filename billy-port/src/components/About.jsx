import { useEffect, useState, useRef } from 'react'
import HomeNav from './HomeNav'
import './about.css'

const About = () => {
    const [isSticky, setIsSticky] = useState(true)
  
    useEffect(() => {
      setIsSticky(false)
    }, []);
  

    return (
        <div className='about'>
          <HomeNav />
            <div className="about-wrapper">
                <div className="about-content">
                    <div className='about-all-container'>
                        <div className='about-img-wrapper'>
                        <img className='headshot' src='./billy-20.jpg' />
                            <div className='about-animation'>About</div>
                        </div>
                        <div className='about-blurb-container'>
                            <h3 className="about-h3">Versatile software engineer with expertise in the MERN tech stack, complemented by a strong foundation in operations. Skilled in creating dynamic web applications and leveraging RESTful APIs. Key strengths include excellent interpersonal skills for fostering open and effective communication, a natural aptitude for problem-solving, and exceptional attention to detail. Demonstrated ability to thrive under pressure in challenging, multi-functional environments.</h3>
                        </div>
                    </div>

                    <div className='about-cards-wrapper'>
                        <div className='about-cards'>
                            <div className='experience-wrapper'>
                                <div className='experience'>
                                    <p className='experience-header'>Education</p>
                                </div>
                                <div className='experience-content'>
                                    <span className='about-exp'> <span className="prof-span">Software Engineering Certificate</span> 12 week, 400+ hour intensive bootcamp at General Assembly  | </span> <span className='about-exp'>December 2023</span>
                                    <p className='about-exp'> <span className="prof-span">Degree in Business Administration</span> from Northeastern Illinois University | Summa Cum Laude | May 2021</p>
                                </div>
                            </div>

                        </div>

                        <div className='about-cards'>
                            <div className='experience-wrapper'>
                                <div className='experience'>
                                    <p className='experience-header'>Skills</p>
                                </div>
                                <div className='experience-content'>
                                    <span className='about-exp'> <span className="prof-span"> Languages: </span></span> <span className='about-exp'>JavaScript ◍ HTML ◍ CSS ◍ Python ◍ SQL ◍ Mongo ◍ JSON | Database - MongoDB</span>
                                    <p className='about-exp'> <span className="prof-span">Libraries and Frameworks: </span> React ◍ Express.js ◍ Django ◍  Bootstrap ◍ Tailwind</p>
                                    <p className='about-exp'> <span className="prof-span">Other: </span> RESTful Routing ◍ JSON API  ◍  SAP ◍ Salesforce</p>
                                </div>
                            </div>

        <div className='resume-btn-container'>
                            <div className='resume-btn-wrapper'>
                                <a href='https://drive.google.com/file/d/1N5YG8noAxEihHPyu8D1mGjXPN0CNLlCi/view?usp=sharing' target='_blank' className='resume-btn'>Resume</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
