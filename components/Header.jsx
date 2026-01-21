import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className=' bg-green-50 flex justify-center   w-[700px]   m-auto mt-5 rounded text-xl font-bold shadow shadow-amber-600 space-x-60 '>
            <NavLink  className = " rounded-xl bg-orange-500 text-white  w-[80px] flex justify-center hover:bg-blue-700" to ="/" > Home</NavLink>
            <NavLink className= "rounded-xl bg-orange-500 text-white  w-[70px] flex justify-center hover:bg-blue-700" to ="todo" > ToDo</NavLink>
        </div>
    )
}

export default Header
