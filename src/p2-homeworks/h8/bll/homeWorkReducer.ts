import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType, action: tsarType): UserType => { // need to fix any
    switch (action.type) {
        case "SORT": {
            if (action.payload.sort === 'up') {
                return [...state].sort((a, b) => a.name < b.name ? -1 : 1)
            } else {
                return [...state].sort((a, b) => a.name < b.name ? -1 : 1).reverse()
            }
        }
        case "CHECK": {
            return state.filter(el => el.age >= action.payload.age)
        }

        default:
            return state
    }
}

type tsarType = SortUpACType | SortByAgeACType

export type SortUpACType = ReturnType<typeof sortUpAC>
export type SortByAgeACType = ReturnType<typeof sortByAge>

export const sortUpAC = (sort: string) => {
    return {
        type: 'SORT',
        payload: {sort}
    } as const
}


export const sortByAge = (age: number) => {
    return {
        type: 'CHECK',
        payload: {age}
    } as const
}