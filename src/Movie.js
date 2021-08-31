import React from 'react'
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster}){
    return <h4>{title}</h4>; // title만 우선 출력
}

// 데이터를 확인 후, id를 Movie.propTypes에 추가
Movie.propTypes = {
     id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, };  // poster는 이미지의 주소를 저장

export default Movie;