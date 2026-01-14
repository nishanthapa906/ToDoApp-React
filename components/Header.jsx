import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div>
            <NavLink to ="/" > Home</NavLink>
            <NavLink to ="todo" > ToDo</NavLink>
        </div>
    )
}

export default Header
