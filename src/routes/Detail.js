import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Point from '../components/point/Point';
import Header from '../components/header/Header';
import styles from './Detail.module.css';
import Loading from '../components/loading/Loading';

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
        <div className={styles.detail_container}>
            <Header />
                {loading ? 
                    <div>
                        <Loading />
                    </div>
                : 
                    <Point 
                        title={movie.title_long}
                        genres={movie.genres}
                        rating={movie.rating}
                        desc={movie.description_intro}
                        coverImg={movie.medium_cover_image}
                        bgImg={movie.background_image}
                    />
                }
            
        </div>
    );
}
export default Detail;