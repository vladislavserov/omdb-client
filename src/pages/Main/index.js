import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const { films, dispatch } = props;

    return (
        <>
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
