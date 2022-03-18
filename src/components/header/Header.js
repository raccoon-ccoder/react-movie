import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    })
    return (
        <header className={`${styles.header} ${scrollPosition < 10 ? styles.original_header : styles.changed_header}`}>
            <Link to="/" className={styles.logo}>
                <i className="fab fa-neos"></i>
                <strong>ETFLEX</strong>
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <Link to="/genres/popular">Popular</Link>
                    </li>
                    <li>
                        <Link to="/genres/action">Action</Link>
                    </li>
                    <li>
                        <Link to="/genres/romance">Romance</Link>
                    </li>
                    <li>
                        <Link to="/genres/thriller">Thriller</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;