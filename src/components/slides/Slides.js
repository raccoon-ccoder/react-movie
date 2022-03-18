import Movie from "../movie/Movie";
import Loading from "../loading/Loading";
import styles from './Slides.module.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Slides({title, api}) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [trans, setTrans] = useState(0);

    const getMovies = async () => {
        const json = await (
        await fetch(api)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    const onLeft = () => {
        console.log(trans);
        if(trans < 0) {
            setTrans((prev) => (prev + 360));
        }
    }

    const onRight = () => {
        if(trans > -2520) {
            setTrans((prev) => (prev - 360));
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <Link to={`/genres/${title.toLowerCase()}`}>
                <h1 className={styles.title}>
                    <i className="fas fa-external-link-alt fa-lg"></i>
                    <span className={styles.title_text}>{title}</span>
                </h1>
                </Link>
            </div>
            {loading ? null : (
             <div className={styles.arrow_container}>
                <button className={styles.arrow} onClick={onLeft}>
                    <i className="fas fa-caret-square-left"></i>
                </button>
                <button className={styles.arrow} onClick={onRight}>
                    <i className="fas fa-caret-square-right"></i>
                </button>
             </div>  
           )}
            <div className={styles.movies_container}>
                <div className={styles.movies} style={{transform: `translateX(${trans}px)`}}>            
                { loading ? 
                    <div className={styles.loading}><Loading /></div> : 
                    movies.map((movie) => (
                        <Movie 
                            key={movie.id}
                            id={movie.id}
                            coverImage={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            summary=""
                            genres={movie.genres}
                            movie_style={{
                                minWidth: "360px",
                                height: "280px"
                            }}
                        />
                    ))
                } 
                </div>
            </div>
        </div>
    );
}

export default Slides;