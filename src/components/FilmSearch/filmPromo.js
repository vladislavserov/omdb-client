import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import FilmSearch from '../../components/FilmSearch';
import { fetchFilmById } from '../../store/thunks'
// const film = {
//     "Title":"Star Wars: Episode IV - A New Hope",
//     "Year":"1977", 
//     "Rated":"PG",
//     "Released":"25 May 1977",
//     "Runtime":"121 min",
//     "Genre":"Action, Adventure, Fantasy, Sci-Fi",
//     "Director":"George Lucas",
//     "Writer":"George Lucas",
//     "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
//     "Plot":"The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.",
//     "Language":"English",
//     "Country":"USA",
//     "Awards":"Won 6 Oscars. Another 52 wins & 29 nominations.",
//     "Poster":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
//     "Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"90/100"}],"Metascore":"90","imdbRating":"8.6","imdbVotes":"1,208,256","imdbID":"tt0076759",
//     "Type":"movie",
//     "DVD":"N/A",
//     "BoxOffice":"N/A",
//     "Production":"Lucasfilm Ltd.",
//     "Website":"N/A",
//     "Response":"True"
// }

const FilmPromo = ({film}) => {
  console.log(film)
    return (
      <>
      <div style={{display:"flex", flexDirection:"row"}}>
      <div><img src={film.Poster} alt={film.Title} className="poster"/></div>
      <div>
        <div className="title">
          <h1>{film.Title}</h1>
        </div>
        <h3>About:</h3>
        <p>Year :       {film.Year}</p>
        <p>Released :   {film.Released}</p>
        <p>Genre :      {film.Genre}</p>
        <p>Director :   {film.Director}</p>
        <p>Actors :     {film.Actors}</p>
        <p>Awards :     {film.Awards}</p>
        <Link to='/'>Home</Link>
      </div>
      </div>
      </>
  
    )
  }


export default FilmPromo;