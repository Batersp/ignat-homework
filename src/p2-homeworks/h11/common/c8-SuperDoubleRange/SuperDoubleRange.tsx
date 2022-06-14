import React from 'react'
import SuperRange from "../c7-SuperRange/SuperRange";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setValue1: (number: number) => void
    setValue2: (number: number) => void
    value1: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable,
        ...props
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <SuperRange value1={props.value1} setValue1={props.setValue1}/>
        </>
    )
}

export default SuperDoubleRange
