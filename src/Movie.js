import React from 'react'
import PropTypes from 'prop-types';
import './Movie.css'; // Movie컴포넌트에는 Movie.css를 임포트

function Movie({title, year, summary, poster}){
    return (
        <div class = "movie">
        <img src={poster} alt={title} title={title} />

        <div class = "movie__data">
            <h3 class="movie__title">
                {title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class = "movie__summary">{summary}</p>
        </div>
        </div>
    );
}

// 매개변수 유효성 검사
// 데이터를 확인 후, id를 Movie.propTypes에 추가
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
 };  // poster는 이미지의 주소를 저장

export default Movie;