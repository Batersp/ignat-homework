const SET_LOADING = 'SET_LOADING'

type InitStateType = {
    loading: boolean
}

const initState: InitStateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {...state, loading: action.payload.bool}
        }
        default: return state
    }
}

export type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (bool: boolean) => {
   return {
       type: SET_LOADING,
       payload: {bool}
   } as const

} // fix any