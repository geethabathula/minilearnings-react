import React, { useEffect, useRef, useState } from "react";
import "./styles/style.css";

const API_KEY = "1bb8a110";

function MovieReplica() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const inputElement = useRef(null);

    useEffect(() => {
        const controller = new AbortController();
        const apiURL = `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

        const fetchMovieAPI = async (url) => {
            setIsLoading(true);
            try {
                const request = await fetch(url, { signal: controller.signal });
                const response = await request.json();
                setIsLoading(false);
                if (response.Search) {
                    setMovies(response.Search);
                } else {
                    setMovies([]);
                }
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Error fetching movies:", error);
                    setIsLoading(false);
                    setMovies([]);
                }
            }
        };

        fetchMovieAPI(apiURL);

        return () => {
            controller.abort();
        };
    }, [query]);

    useEffect(() => {
        function callback(e) {
            if (document.activeElement === inputElement.current)
                return;
            if (e.code === "Enter") {
                inputElement.current.focus();
                inputElement.current.style.backgroundColor = "#a8dadc";
                setQuery("");
            }
        }
        document.addEventListener("keydown", callback);
        return () => document.removeEventListener("keydown", callback);
    }, [setQuery]);

    function handleSubmit(e) {
        e.preventDefault();
        setQuery("");
    }

    return (
        <div className="container">
            <div className="heading">
                <img src="../images/play.svg" alt="play" />
                <h1>Cine Mate</h1>
                <img src="../images/find.svg" alt="find" />
            </div>

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    ref={inputElement}
                    className="input"
                    placeholder="Search for a movie......"
                />
            </form>
            {isLoading ? (
                <div className="loadingcontainer">
                    <img src="../images/loading.svg" alt="loading" className="loading" />
                </div>
            ) : (
                <MoviesList movies={movies} />
            )}
        </div>
    );
}

function MoviesList({ movies }) {
    return (
        <div className="movies-list">
            {movies.length > 0 && movies.map((movie) => (
                <div className="movie-data" key={movie.imdbID}>
                    <h5>{movie.Title}</h5>
                    <h5>{movie.Year}</h5>
                    {movie.Poster !== "N/A" ? (
                        <img src={movie.Poster} alt={movie.Title} className="poster" />
                    ) : (
                        <img src="https://placehold.co/100x100" alt={movie.Title} className="poster" />
                    )}
                </div>
            ))}
        </div>
    );
}

export default MovieReplica;
