import { Link } from 'react-router-dom'

function HomeNav  () {
    return (
        <div className='side-container'>
            <div className="sidebar">
                <Link className='home-link' to='/'>Home</Link>
                <div className='home-side-link'>___________</div>
            </div>
        </div>
    )
}
export default HomeNav