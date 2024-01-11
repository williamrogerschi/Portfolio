import { Route, Routes } from 'react-router-dom'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import Home from './Home'


function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Work' element={<Work/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </div>
    )
}
export default Main