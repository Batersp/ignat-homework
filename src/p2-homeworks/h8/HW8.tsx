import React, {useState} from 'react'
import {homeWorkReducer, sortByAge, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW8.module.css'

export type UserType = Array<elUserType>
export type elUserType = {
    _id: number
    name: string
    age: number
}
const initialPeople: UserType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 56},
]

function HW8() {
    const [people, setPeople] = useState<UserType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: elUserType) => (
        <div className={style.main} key={p._id}>
            <div className={style.name}> {p.name} </div>
            <div className={style.age}> {p.age} </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortUpAC('down')))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, sortByAge(18)))
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <span><SuperButton className={style.btn} onClick={sortUp}>sort up</SuperButton></span>
            <span> <SuperButton className={style.btn} onClick={sortDown}>sort down</SuperButton></span>
            <span> <SuperButton className={style.btn} onClick={check18}>check 18</SuperButton></span>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
