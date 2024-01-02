import { Link } from "react-router-dom"
import HomeNav from "./HomeNav"
import './contact.css'
import  { TypeAnimation } from 'react-type-animation'



const Contact = () => {

    
    return (
        <>
            <HomeNav />
            <div className="contact-wrapper">
                <div className="contact-content">
                    <div className="contact-content-container">
                              <div className="hello">
                                <TypeAnimation
                                    sequence={[
                                        'Hello.',
                                        1000,
                                        '',
                                        1000,
                                        'Hello!',
                                        () => {
                                            console.log('Sequence completed')
                                        },
                                    ]}
                                    speed={0.5}
                                    wrapper='span'
                                    cursor={true}
                                    repeat={false}
                                    style={{ fontSize: '1em', display: 'inline-block'}} 
                                    />
                                {/* <h1 className="hello">Hello!</h1> */}
                                </div>  
                        <p className="about-p">A Software Engineer based out of Chicago, IL- looking to make my dreams become a reality!</p>
                        <ul >
                            <li className="li-contact"> Email - william.rogers.chi@gmail.com</li>
                            <li className="li-contact"> Socials - <Link className="li-link" to='https://github.com/williamrogerschi' target="_blank">GitHub </Link> <Link className="li-link" to='https://www.linkedin.com/in/billy-rogers-chi/' target="_blank">LinkedIn</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact