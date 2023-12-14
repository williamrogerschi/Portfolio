import { Link } from 'react-router-dom'

function Nav  () {
    return (
        <div className='nav-container'>
            <div className="navbar">
                <div className='main-link'>
                    <Link className='link' to='/Work'>Work</Link>
                </div>
                <div className='main-link'>
                    <Link className='link' to='/About'>About</Link>
                </div>
                <div className='main-link'>
                    <Link className='link' to='/Contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}
export default Nav