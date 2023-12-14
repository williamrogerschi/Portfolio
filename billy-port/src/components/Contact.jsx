import { Link } from "react-router-dom"
import HomeNav from "./HomeNav"
import './contact.css'



const Contact = () => {
    return ( 
        <>
            <div className="contact-wrapper">
                <HomeNav />
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="header-wrapper">
                            <h1>Hello!</h1>
                        </div>
                        <div className="contact-content-container">
                            <p className="about-p">An aspiring Software Engineer based out of Chicago, IL- looking to make my dreams become a reality!</p>
                            <ul >
                                <li className="li-contact"> Email - william.rogers.chi@gmail.com</li>
                                <li className="li-contact"> Socials - <Link className="li-link" to='https://github.com/williamrogerschi' target="_blank">GitHub </Link> <Link className="li-link" to='https://www.linkedin.com/in/billy-rogers-chi/' target="_blank">LinkedIn</Link></li>
                            </ul>
                            </div>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Contact