import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        clearInterval(timerId) // stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())// setDate

        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true) // show
    }
    const onMouseLeave = () => {
        setShow(false) // close
    }

    const stringTime = date?.toLocaleTimeString() || <br/>

    /*t ? [date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
            ':',
            date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
            ':',
            date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()] :
        ''*/// fix with date
    const stringDate = date?.toLocaleDateString() || <br/>
    /*[date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
        '.',
        date.getUTCMonth() < 10 ? '0' + date.getUTCMonth() : date.getUTCMonth(),
        '.',
        date.getFullYear()]*/ // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            ) : (<br/>)
            }

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
