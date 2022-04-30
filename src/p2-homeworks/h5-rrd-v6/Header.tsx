import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.okno}>
            <span> <NavLink to={PATH.PRE_JUNIOR} className={s.preJunior}>pre-junior</NavLink> </span>
            <span> <NavLink to={PATH.JUNIOR} className={s.junior}>junior</NavLink> </span>
            <span> <NavLink to={PATH.JUNIORPLUS} className={s.juniorplus}>junior+</NavLink> </span>

        </div>
    )
}

export default Header
