import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Header from "../components/header/Header";

// Movie 컴포넌트 이용해  api 통해 영화 데이터 가져오고 영화 목록 보여주는 역할
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=download_count"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
        <Header />
      {loading ? <h1>Loading...</h1> : 
      movies.map((movie) => (
        <Movie 
          key={movie.id}
          id={movie.id}
          coverImage={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      ))}
    </div>
  );
}

export default Home;