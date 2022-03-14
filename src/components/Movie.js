import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 영화 데이터를 이용해 html 요소 만들어주는 컴포넌트 역할
function Movie({id, coverImage, title, summary, genres}) {
    return  <div>
    <img src={coverImage} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul>  
      {genres && genres.map((genre) => ( // 장르가 없는 영화도 있어서 undefined인지 아닌지 체크
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string) // string 타입의 요소들이 있는 배열
}

export default Movie;