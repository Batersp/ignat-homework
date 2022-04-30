import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar}/>

            <div className={s.angle}/>

            <div className={s.content}>
                <span className={s.name}> {props.name}</span>
                <span className={s.text}> {props.message}</span>
                <span className={s.time}> {props.time}</span>
            </div>
        </div>


    )
}


