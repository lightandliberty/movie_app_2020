import React from 'react'
import PropTypes from 'prop-types';
import './Movie.css'; // Movie컴포넌트에는 Movie.css를 임포트
import { Link } from 'react-router-dom';

function Movie({title, year, summary, poster, genres}){
    return (
        <div className = "movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: { year, title, summary, poster, genres },
                }}
            >
                <img src={poster} alt={title} title={title} />
                <div className = "movie__data">
                    <h3 className="movie__title">
                        {title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre,index)=>{
                            return (
                            <li key={index} className="movie__genre">{genre}</li>
                            );
                        })}
                    </ul>
                    <p className = "movie__summary">{summary.slice(0, 180)}...</p> 
                </div>
            </Link>
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, // 문자열을 원소로 하는 배열
 };  // poster는 이미지의 주소를 저장

export default Movie;