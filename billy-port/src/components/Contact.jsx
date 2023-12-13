import { Link } from "react-router-dom"
import HomeNav from "./HomeNav"
import './contact.css'



const Contact = () => {
    return ( 
        <>
            <div className="contact-wrapper">
                <HomeNav />
                <div className="home-container">
                    <div className="home-content">
                        <h1>Hello World!</h1>
                            <p className="about-p">An aspiring Software Engineer looking to make my dreams become a reality.</p>
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