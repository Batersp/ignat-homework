import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (t: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

const allBtnFilterClasses = props.filter === 'all'? s.btnfilter : ''
const highBtnFilterClasses = props.filter === 'high'? s.btnfilter : ''
const middleBtnFilterClasses = props.filter === 'middle'? s.btnfilter : ''
const lowBtnFilterClasses = props.filter === 'low'? s.btnfilter : ''

    return (
        <div className={s.main}>

            {mappedAffairs.length > 0
            ? mappedAffairs
            : <div className={s.second}>Таких задач нет</div>}

            <button
                className={allBtnFilterClasses}
                onClick={setAll}>All
            </button>
            <button
                className={highBtnFilterClasses}
                onClick={setHigh}>High
            </button>
            <button
                className={middleBtnFilterClasses}
                onClick={setMiddle}>Middle
            </button>
            <button
                className={lowBtnFilterClasses}
                onClick={setLow}>Low
            </button>
        </div>
    )
}

export default Affairs
