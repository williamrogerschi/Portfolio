import Nav from './Nav'
import Side from './Side'


const Home = () => {

    return (
        <>
            <Side />
            <div className='home-wrapper'>
                <div className='home-container'>
                    <div className='home-content'>
                        <h2>Billy Rogers</h2>
                        <p className='headline-p'>Full-Stack Web Developer | Cat Dad | Ops</p>
                        <p className='home-p'><span className='prof-span'>Proficient in: </span>
                            React.js ◍ MongoDB ◍ Mongoose ◍ Express ◍ Bootstrap ◍ Tailwind CSS ◍ Python ◍ Django ◍  Node.js ◍ CSS ◍ HTML5 </p>
                    </div>
                    <Nav />
                </div>
            </div>
        </>
    )
}
export default Home