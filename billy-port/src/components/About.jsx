import { useEffect, useState } from 'react'
import HomeNav from './HomeNav'
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {


    return (
        <>
            <HomeNav />

            <div className="about-wrapper">
                <div className="about-content">
                    <div className='about-all-container'>
                        <div className='about-img-wrapper'>
                        <img className='headshot' src='./billy.jpeg' />
                            <h1 className='about-animation'>About</h1>
  
                        </div>
                        <div className='about-blurb-container'>
                            <h3 className="about-h3">Versatile software engineer with expertise in the MERN tech stack, complemented by a strong foundation in operations. Skilled in creating dynamic web applications and leveraging RESTful APIs. Key strengths include excellent interpersonal skills for fostering open and effective communication, a natural aptitude for problem-solving, and exceptional attention to detail. Demonstrated ability to thrive under pressure in challenging, multi-functional environments.</h3>
                        </div>
                    </div>


                    <div className='about-cards-wrapper'>
                        <div className='about-cards'>
                            <div className='experience-wrapper'>
                                <div className='experience'>
                                    <p className='experience-header'>Experience</p>
                                </div>
                                <div className='experience-content'>
                                    <span className='about-exp'>- Certificate of completion for Software Engineering Immersive 12 week bootcamp from General Assembly  | </span> <span className='about-exp'>December 2023</span>
                                    <p className='content-exp'>- Degree in Business Administration from Northeastern Illinois University | Graduated May 2021</p>
                                </div>
                            </div>

                            <div className='resume-btn-wrapper'>
                                <a href='https://drive.google.com/file/d/1N5YG8noAxEihHPyu8D1mGjXPN0CNLlCi/view?usp=sharing' target='_blank' className='resume-btn'>Resume</a>
                            </div>
                        </div>

                        <div className='about-cards'>
                            <div className='experience-wrapper'>
                                <div className='experience'>
                                    <p className='experience-header'>Skills</p>
                                </div>
                                <div className='experience-content'>
                                    <span className='about-exp'>- Languages: </span> <span className='about-exp'>JavaScript ◍ HTML ◍ CSS ◍ Python ◍ SQL ◍ Mongo ◍ JSON | Database - MongoDB</span>
                                    <p className='content-exp'>- Libraries and Frameworks: React ◍ Express.js ◍ Django ◍  Bootstrap ◍ Tailwind</p>
                                    <p className='content-exp'>- Other: RESTful Routing ◍ JSON API  ◍  SAP ◍ Salesforce</p>
                                </div>
                            </div>

                            <div className='resume-btn-wrapper'>
                                <Link className='resume-btn' to='/Contact'>Contact</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
