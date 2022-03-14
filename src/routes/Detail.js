import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

// 영화 상세페이지를 보여주는 역할
function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);   
    const [movie, setMovie] = useState();

    const getMovie = async () => {
        const json = await( 
            await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(async() => {
       getMovie();
    }, []);
  
    return (
        <div>
            {loading ? <h1>Loading</h1> : 
            <Movie 
                id={movie.id}
                coverImage={movie.large_cover_image}
                title={movie.title} 
                summary={movie.summary}
                genres={movie.genres}
            />
            }
        </div>
    );
}
export default Detail;