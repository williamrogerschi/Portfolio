import Nav from './Nav'
import Side from './Side'


const Home = () => {
    return (
        <>
        <div className='home-wrapper'>
                <Side />
                <div className='home-container'>
                    <div className='home-content'>
                        <h2>Billy Rogers</h2>
                        <p>Full-Stack Software Engineer | Father to two cats | Lover of games | Ops</p>
                        <p>General Assembly Alum proficient in the following languages: MongoDB · Django · React.js · Bootstrap · Tailwind CSS · Python  · JavaScript · CSS · HTML5 </p>
                    </div>
                        <Nav/>
                </div>
            </div>
        </>
    )
}
export default Home