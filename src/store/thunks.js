import axios from 'axios';
import { omdbApiKey } from '../config';
import { setFilm, setFilms } from './actions'

export const fetchFilmById = (filmId) => {
  return (dispatch, _getState) => {
    const requestStr = `http://www.omdbapi.com/?i=${filmId}&apikey=${omdbApiKey}`;
    axios.get(requestStr).then((response) => {
      if (response.data.Response === 'True') {
        return dispatch(setFilm({film: response.data}));
      }
    })
  }
}

export const fetchFilmsByQuery = (query) => {
  return (dispatch) => {
    const requestStr = `http://www.omdbapi.com/?s=${query}&apikey=${omdbApiKey}`;
    axios.get(requestStr).then((response) => {
      if (response.data.Response === 'True') {
        dispatch(setFilms(response.data.Search))
      }
    })
  }
}