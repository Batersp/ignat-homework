const CHANGE_THEME = 'CHANGE_THEME'


type InitStateType = {
    theme: string
}

const initState: InitStateType = {
    theme: 'red'
}


export const themeReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.payload.theme};
        }
        default:
            return state;
    }
};
type ActionType = ChangeThemeCType
type ChangeThemeCType = ReturnType<typeof changeThemeC>

export const changeThemeC = (theme: string) => {
    return {
        type: CHANGE_THEME,
        payload: {theme}
    } as const
}; // fix any