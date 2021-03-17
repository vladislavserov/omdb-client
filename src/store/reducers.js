import { SET_FILMS, SET_FILM } from "./actions";

const initState = {
    film: {}, 
    films: []
}

export const rootReducer = (state = initState, action) => {
    console.log("ACTION:" , action)
    switch(action.type) {
        case SET_FILM: {
            const { payload: { film } } = action
            return {
                ...state,
                film, 
            }
        }
        case SET_FILMS: {
            const { films } = action
            return {
                ...state,
                films
            }
        }
        default:
            return state
    }
}
