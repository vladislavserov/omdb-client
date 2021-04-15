import { SET_FILMS, SET_FILM } from "./actions";

const initState = {
    film: {}, 
    films: []
}

export const rootReducer = (state = initState, action) => {
    // console.log(state, action.films)
    // console.log({...state.films, action.films})
    switch(action.type) {
        case SET_FILM: {
            const { payload: { film } } = action
            return {
                ...state,
                film, 
            }
        }
        case SET_FILMS: {
            const films  = action.films
            // const { 'films':oldFilms } = state
            const oldFilms = state.films
            // console.log(oldFilms, films)
            // console.log(oldFilms.concat(films))
            const newFilms = oldFilms.concat(films)
            return {
                ...state,
                films: newFilms
                
            }
        }
        default:
            return state
    }
}
