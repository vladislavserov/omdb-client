import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FilmSearch from '../../components/FilmSearch';

// const promise = axios.get('https://google.com?q=123')

// promise.then((response) => {}, (err) => {})

const Main = (props) => {
    const { films } = props;
    return (
        <>
            <div className="header">
                <FilmSearch />
            </div>
            { films.map((film) =>
                <>
                    <img src={film.Poster} alt={film.Title}/>
                    <Link to={`/film/${film.imdbID}`}>{film.Title}</Link>
                    <hr/>
                </>
            ) }
        </>
    )
}

const mapStateToProps = (state) => ({ films: state });

export default connect(mapStateToProps)(Main);
