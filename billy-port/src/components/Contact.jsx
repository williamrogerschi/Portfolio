import { Link } from "react-router-dom"
import HomeNav from "./HomeNav"
import './contact.css'
// import Typed from 'react-typed'




const Contact = () => {

    const onCompleteTyped = (self) => {
        self.cursor.style.display = 'none'
    }

    return (
        <>
            <HomeNav />
            <div className="contact-wrapper">
                <div className="contact-content">
                    <div className="contact-content-container">
                            {/* <Typed
                                    strings={["Hello.", '', 'Hello!']}
                                    typeSpeed={160}
                                    backSpeed={100}
                                    backDelay={1000}
                                    showCursor={true}
                                    // onComplete={(self) => onCompleteTyped(self)}
                                    cursorChar='|'
                                    loopCount={0}
                                    className="text"
                                /> */}
                              <div className="hello">
                                <h1 className="hello">Hello!</h1>
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