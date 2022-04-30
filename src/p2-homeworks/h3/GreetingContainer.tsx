import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (n: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        if (e.currentTarget.value === ' ') {
            setName('')
            setError('ERROR')
        } else if (e.currentTarget.value.length > 0) {
            setError('')
        } else {
            setError('ERROR')
        }


    }
    const addUser = () => {
        if(name) {
        alert(`Hello' ${name.trim()} !`) // need to fix
            addUserCallback(name.trim())
            setName('')
        }
    }

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key ==='Enter' && addUser()
    }

    const totalUsers = users.length // need to fix


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPress={onKeyPress}
        />
    )
}

export default GreetingContainer
