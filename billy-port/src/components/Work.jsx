import './work.scss'


const Work = () => {


    return (
        <>
            <div className='blog-body'>
                <div className="blog">
                    <div className="blog-part is-menu">
                        <a href="/" className="blog-menu">
                            Home
                            <svg fill="none" stroke="currentColor" strokeWidth=".7" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up-right" viewBox="0 0 24 24">
                                <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </a>
                        <a href='https://github.com/williamrogerschi' target='_blank' className="blog-menu">Github</a>
                        <a href='https://www.linkedin.com/in/billy-rogers-chi/' target='_blank' className="blog-menu">LinkedIn</a>
                        <a href="/Contact" className="blog-menu mention">Contact</a>
                        <li href="#" className="blog-menu subscribe">© Billy Rogers || 2023</li>
                    </div>
                    <div className="blog-header blog-is-sticky">
                        <div className="blog-article header-article">
                            <div className="blog-bigtitle">Self</div>
                            <div className="blog-menu rounded small-title">Pinned Issue</div>
                        </div>
                        <div className="blog-article page-number">
                            NO. 01
                        </div>
                    </div>
                    <div className="blog-header-container">
                        <div className="blog-header">
                            <div className="blog-article header-article">
                                <div className="blog-bigtitle">Practice</div>
                                <div className="blog-menu small-title date">12.03.2023</div>
                            </div>
                            <div className="blog-article">
                                <img src="./strava.jpeg" alt="" />
                                <h2>Strava <span>API</span> Stats - Rides - Community</h2>
                                <div className="blog-detail">
                                    <span>By Billy Rogers</span>
                                    <span>3 Min Read</span>
                                </div>
                                <p>This was my first project and we had the choice between building a game or using a restful API. I chose to use an API and wanted to build an APP that would allow a user to login and check their profile, rides, and achievements in a simpler UI than what was currently being offered by Strava.</p>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-down-right" viewBox="0 0 24 24">
                                        <path d="M15 10l5 5-5 5" />
                                        <path d="M4 4v7a4 4 0 004 4h12" />
                                    </svg>
                                    See More
                                </a>
                            </div>
                        </div>
                        <div className="blog-header">
                            <div className="blog-article header-article">
                                <div className="blog-bigtitle">Control</div>
                                <div className="blog-menu small-title date">12.06.2021</div>
                            </div>
                            <div className="blog-article">
                                <img src="./Gwent.webp" alt="" />
                                <h2>Gwent <span>CCG</span> Builder</h2>
                                <div className="blog-detail">
                                    <span>By Billy Rogers</span>
                                    <span>4 Min Read</span>
                                </div>
                                <p>For my second project, I created a personalized card builder based off the CCG 'Gwent'. This project was all about making card customization a breeze for Gwent fans. I had alot of fun creating this, and quickly learned later on- that I would be able to streamline this using React.</p>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-down-right" viewBox="0 0 24 24">
                                        <path d="M15 10l5 5-5 5" />
                                        <path d="M4 4v7a4 4 0 004 4h12" />
                                    </svg>
                                    See More
                                </a>
                            </div>
                        </div>
                        <div className="blog-header">
                            <div className="blog-article header-article">
                                <div className="blog-bigtitle">Love</div>
                                <div className="blog-menu small-title date">12.06.2021</div>
                            </div>
                            <div className="blog-article">
                                <img src="./swork.jpeg" alt="" />
                                <h2>Bike <span>Labs</span> Bike Builder</h2>
                                <div className="blog-detail">
                                    <span>By Billy Rogers</span>
                                    <span>6 Min Read</span>
                                </div>
                                <p>Imagine a platform where bike lovers can log in, check out different bike builds, and even create their own from scratch. I made it happen! With the MERN stack, I created an easy-to-use app that allowed users to log in, explore existing bike builds, and design their own with all the bells and whistles. Thjis was a hub for cyclists to discover, build, and share their passion for bikes. This project was my capstone and I showcased my skills for both frontend and backend magic. By having full CRUD across the app. </p>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-down-right" viewBox="0 0 24 24">
                                        <path d="M15 10l5 5-5 5" />
                                        <path d="M4 4v7a4 4 0 004 4h12" />
                                    </svg>
                                    See More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-part right-blog">
                        <marquee width="100%" direction="left">
                            <span>Now And Then You Miss It Sounds Make You Cry</span>
                            <span>Now In - MoMa Sharing Exhibition NOW</span>
                            <span>NYC Opens After Long Lockdown Check</span>
                        </marquee>
                        <div className="blog-right-title-container">
                            <div className="blog-right-title">
                                Featured Articles
                            </div>
                            <div className="blog-menu rounded">See All</div>
                        </div>
                        <div className="blog-right">
                            <div className="blog-right-container">
                                <div className="blog-title-date">
                                    <div className="blog-right-page">1</div>
                                    <div className="date">12.06.2021</div>
                                </div>
                                <div className="blog-right-page-title">Blonde - Widespread Acclaim</div>
                                <div className="blog-right-page-subtitle">Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's</div>
                            </div>
                            <div className="blog-right-container">
                                <div className="blog-title-date">
                                    <div className="blog-right-page">2</div>
                                    <div className="date">12.06.2021</div>
                                </div>
                                <div className="blog-right-page-title">Introspective Lyrics and Beats</div>
                                <div className="blog-right-page-subtitle">When we toured Scotland we stopped at several selft-sealing hpuses because hotels would</div>
                            </div>
                            <div className="blog-right-container">
                                <div className="blog-title-date">
                                    <div className="blog-right-page">3</div>
                                    <div className="date">12.06.2021</div>
                                </div>
                                <div className="blog-right-page-title">The Language Of Gris: Comples Beauty Of Monochrome</div>
                                <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
                            </div>
                            <div className="blog-right-container">
                                <div className="blog-title-date">
                                    <div className="blog-right-page">4</div>
                                    <div className="date">12.06.2021</div>
                                </div>
                                <div className="blog-right-page-title">A24 IS LAUNCHING ITS OWN BEAUTY BRAND</div>
                                <div className="blog-right-page-subtitle">Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's</div>
                            </div>
                            <div className="blog-right-container">
                                <div className="blog-title-date">
                                    <div className="blog-right-page">5</div>
                                    <div className="date">12.06.2021</div>
                                </div>
                                <div className="blog-right-page-title">Elon Musk's SpaceX is launching a moon satellite</div>
                                <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
                            </div>
                            <div className="blog-right-container">
                                <div className="blog-title-date">
                                    <div className="blog-right-page">6</div>
                                    <div className="date">12.06.2021</div>
                                </div>
                                <div className="blog-right-page-title">What Happens When You Leave Your Old life Behind</div>
                                <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
                            </div>
                            <div className="circle">
                                <div className="circle-title">Leave Your Old Life Behind</div>
                                <div className="circle-subtitle">Don't try to be like someone else, be yourself. Be secure with yourself.</div>
                                <div className="circle-footer">Explore</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Work