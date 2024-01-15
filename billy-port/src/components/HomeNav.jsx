import { Link, useLocation } from 'react-router-dom'
import React from 'react'

function HomeNav({ isSticky }) {
  return (
    <div className={`home-sidebar ${isSticky ? 'sticky' : ''}`}>
      <Link className="home-link" to="/">
        Home
      </Link>
    </div>
  )
}

export default HomeNav
