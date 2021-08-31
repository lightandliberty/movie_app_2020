import React from 'react'
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster}){
    return (
        <div class = "movie">
        <img src={poster} alt={title} title={title} />

        <div class = "movie__data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class = "movie__summary">{summary}</p>
        </div>
        </div>
    );
}

// 매개변수 유효성 검사
// 데이터를 확인 후, id를 Movie.propTypes에 추가
Movie.propTypes = {
     id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
 };  // poster는 이미지의 주소를 저장

export default Movie;