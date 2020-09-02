import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}){
return <div className="movie">
    <img src={poster} className="movie_poster"/>
    <div className= "movie__data">
        <h3 className = "movie_title">{title}</h3>
        <h4 className = "movie_year">{year}</h4>
        <ul className="movie_genres">
        {
            genres.map((genre, index)=>{
                return <li key={index} className="genres_genre">
                    {genre}
                    </li>
            })
        }   
        </ul>
        <p className="movie_summary">{summary}</p>
    </div>
</div>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;