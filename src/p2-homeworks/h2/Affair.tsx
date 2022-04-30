import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.second}>
            <span className={s.obj}> {props.affair.name}</span>
            <span className={s.filt}> {props.affair.priority}</span>
            <button className={s.btn} onClick={deleteCallback}>delete</button>
        </div>
    )
}

export default Affair
