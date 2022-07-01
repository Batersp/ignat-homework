import React, {ChangeEvent, useState} from 'react';
import {requestAPI} from "./request-api";

export const Request = () => {
    const [value, setValue] = useState(false)
    const [state, setState] = useState<any>(null)

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }


    const onButtonClickHandler = () => {
        requestAPI.putRequest(value)
            .then(res => {
                console.log(res.data)
                setState(res.data.errorText)
            })
            .catch(error => {
                console.log({...error})
                setState(error.code)
            })

    }

    return (
        <div>
            <button onClick={onButtonClickHandler}>BUTTON</button>
            <input
                type="checkbox"
                checked={value}
                onChange={inputChangeHandler}
            />
            <div>{
                state === null
                    ? ''
                    : JSON.stringify(state)}
            </div>
        </div>
    );
};

