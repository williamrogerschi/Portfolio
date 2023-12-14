import { Link } from 'react-router-dom'

function HomeNav  () {
    return (
        <div className='hn-container'>
            <div className="sidebar">
                <Link className='home-link' to='/'>Home</Link>
                <div className='home-link'>______</div>
            </div>
        </div>
    )
}
export default HomeNav