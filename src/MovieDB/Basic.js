import { useEffect, useState } from "react";
import "./styles/style.css";

const API_KEY = "1bb8a110";

function Basic() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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


    function handleSubmit(e) {
        e.preventDefault();
        setQuery("");
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>
                Movies List
            </h1>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {
                isLoading ?
                    <div className="loading">
                        <img src="../images/loading.svg" alt="loading" style={{ height: "80px", width: "80px" }} />
                    </div>
                    : <MoviesList movies={movies} />
            }

        </>
    );
}

function MoviesList({ movies }) {
    return (
        <div>
            {movies.length > 0 && movies.map((movie) => {
                return (
                    <div className="movie-data" key={movie.imdbID}>
                        <h5>{movie.Title}</h5>
                        <h5>{movie.Year}</h5>
                        {movie.Poster !== "N/A" ? <img src={movie.Poster} alt={movie.Title} style={{ height: "100px", width: "100px" }} /> :
                            <img src="https://placehold.co/100x100" alt={movie.Title} />}

                    </div>
                );
            })
            }
        </div>
    )
}
export default Basic;