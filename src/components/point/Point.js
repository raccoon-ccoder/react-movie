import styles from './Point.module.css';

function Point({title, genres, rating, desc, coverImg, bgImg}) {
    return (
        <div>
            <img src={bgImg} alt={title} className={styles.bg} />
            <div className={styles.show}>
                <img src={coverImg} alt={title} className={styles.img} />
                <div className={styles.textbox}>
                    <div>
                        <h1 className={styles.title}>{title}</h1>
                    </div>
                    <ul className={styles.list}>
                        <li>Rating : {rating}</li>
                        <li>
                            Genres
                            <ul className={styles.test}>
                                {genres?.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <p className={styles.desc}>{desc}</p>
                </div>
               
            </div>
        </div>
    );
}

export default Point;