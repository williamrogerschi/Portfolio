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
                        <p>Software Engineer | Father to two cats | Lover of games | Ops</p>
                        <p>Currently a full time Student at General Assembly.</p>
                    </div>
                        <Nav/>
                </div>
            </div>
        </>
    )
}
export default Home