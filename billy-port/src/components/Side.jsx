import { Link } from 'react-router-dom'

function Side  () {
    return (
            <div className="sidebar">
                <Link className='side-link' to='https://github.com/williamrogerschi' target='_blank'>GitHub</Link>
                <Link className='side-link' to='https://www.linkedin.com/in/billy-rogers-chi/' target='_blank'>LinkedIn</Link>
            </div>
    )
}

export default Side