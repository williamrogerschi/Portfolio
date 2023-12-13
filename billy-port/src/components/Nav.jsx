import { Link } from 'react-router-dom'

function Nav  () {
    return (
        <div className='nav-container'>
            <div className="navbar">
                <Link className='link' to='/Work'>Work</Link>
                <Link className='link' to='/About'>About</Link>
                <Link className='link' to='/Contact'>Contact</Link>
            </div>
        </div>
    )
}
export default Nav