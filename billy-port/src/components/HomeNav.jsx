import { Link } from 'react-router-dom'

function HomeNav  () {
    return (
        <div className='hn-container'>
            <div className="home-sidebar">
                <Link className='home-link' to='/'>Home</Link>
                <div className='home-link'></div>
            </div>
        </div>
    )
}
export default HomeNav