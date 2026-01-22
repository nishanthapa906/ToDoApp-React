import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className=' bg-green-50 flex justify-center h-[40px]   w-[700px]  mt-3 m-auto  rounded text-xl font-bold shadow shadow-amber-600 space-x-60 '>
            <NavLink  className = " mt-1 rounded-xl bg-orange-500 text-white  w-[80px]  h-[80%] flex justify-center hover:bg-blue-700" to ="/" > Home</NavLink>
            <NavLink className= " mt-1 rounded-xl bg-orange-500 text-white  w-[70px]  h-[80%] flex justify-center hover:bg-blue-700" to ="todo" > ToDo</NavLink>
        </div>
    )
}

export default Header
