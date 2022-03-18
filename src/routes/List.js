import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Loading from '../components/loading/Loading';
import Movie from '../components/movie/Movie';
import styles from './List.module.css';

function List() {
    const { genre } = useParams();
    const [loading, setLoading] = useState(true);   
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        let api;

        if(genre === "popular") {
            api = `https://yts.mx/api/v2/list_movies.json?sort_by=download_conut&sort_by=year&limit=10`;
        }else {
            api = `https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=year&limit=10`;
        }

        const json = await(await fetch(api)).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    
    useEffect(() => {
        getMovies();
    },[movies]);

    return (
        <div className={styles.list_container}>
            <Header />
            <div className={styles.title_container}>
                <h2 className={styles.title}>{genre}</h2>
            </div>
            {loading ? 
                <div className={styles.loading}><Loading /></div>
                :
                <div className={styles.movie_container}>
                    {movies.map((movie) => (
                        <Movie 
                            key={movie.id}
                            id={movie.id}
                            coverImage={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            }
        </div>
    );
}

export default List;