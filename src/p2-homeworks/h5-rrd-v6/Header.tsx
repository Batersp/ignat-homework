import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";


function Header() {
    return (
        <div>
            <span> <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink> </span>
            <span> <NavLink to={PATH.JUNIOR}>junior</NavLink> </span>
            <span> <NavLink to={PATH.JUNIORPLUS}>junior+</NavLink> </span>

        </div>
    )
}

export default Header
