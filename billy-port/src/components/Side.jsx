import { Link } from 'react-router-dom'

function Side  () {
    return (
        <div className='side-container'>
            <div className="sidebar">
                <Link className='side-link' to='https://github.com/williamrogerschi' target='_blank'>GitHub</Link>
                <Link className='side-link' to='https://www.linkedin.com/in/billy-rogers-chi/' target='_blank'>LinkedIn</Link>
                <div className='nav-link'>________</div>
            </div>
        </div>
    )
}

export default Side