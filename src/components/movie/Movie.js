import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './Movie.module.css';

// 영화 데이터를 이용해 html 요소 만들어주는 컴포넌트 역할
function Movie({id, coverImage, title, year, summary, genres, movie_style}) {
    return  (
      <div className={styles.movie} style={movie_style}>
        <img src={coverImage} alt={title} className={styles.movie__img}/>
        <div>
          <h2 className={styles.movie__title}>
            <Link to={`/movies/${id}`}>{title.length > 50 ? `${title.slice(0, 50)}...` : title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{year}</h3>
        <p className={styles.movie__summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
            {genres && genres.map((genre) => ( // 장르가 없는 영화도 있어서 undefined인지 아닌지 체크
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
    </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string) // string 타입의 요소들이 있는 배열
}

export default Movie;