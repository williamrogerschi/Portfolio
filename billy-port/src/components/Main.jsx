import { Route, Routes } from 'react-router-dom'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import News from './News'


function Main () {
    return (
        <div className="main">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Work' element={<Work/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/News' element={<News/>}/>
            </Routes>
        </div>
    )
}
export default Main