import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import FilmSearch from '../../components/FilmSearch';

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

const Film = (props) => {
    const { filmId } = useParams();
    const [ film, setFilm ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        // send request 
        const apiKey = '7019ebd8';
        const requestStr = `http://www.omdbapi.com/?i=${filmId}&apikey=${apiKey}`;
        setIsLoading(true);
        axios.get(requestStr).then((response) => {
            setTimeout(() => {
                if (response.data.Response === 'True') {
                    setFilm(response.data);
                    setIsLoading(false);
                }
                console.log(response);
            }, 0)
        }, () => {})
    }, [filmId])

    const renderLoadingPage = () => {
        return (
            <>
                <div style={{width: '490px', margin: 'auto'}}>
                    <iframe src="https://gifer.com/embed/3vTB" width={480} height="545.280" frameBorder={0} allowFullScreen />
                </div>
            </>
        )
    }

    const renderInfoPage = () => {
        return (
            <>
                <div className="background-films-page">
                    <div className="wrapper">
                        <div className="left">
                            <img src={film.Poster} alt={film.Title} className="poster"/>

                        </div>
                        <div className="middle">
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
                        <div className="right"></div>
                    </div>
                </div>
            </>
        )
    }

    const renderPage = () => {
        if (isLoading) {
            return renderLoadingPage();
        } 
         
        return renderInfoPage();
    }

    return (
        <>
            <div className="header">
                <FilmSearch/>
            </div>
            {renderPage()}
        </>
    )
}

export default Film;
