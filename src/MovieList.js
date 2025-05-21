// Denna ska hantera min filmlista
import React, { useState, useRef} from 'react';
import Movie from './Movie';

export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "First Movie",
        rating: 5
    }]);

    const inputRef = useRef();
    const ratingRef = useRef();

    function addItem() {
            const title = inputRef.current.value;
            const rating = parseInt(ratingRef.current.value);

            if (title === "") {
                alert("Du måste ange en titel");
                return;
            }

            if (rating === 0) {
                alert("Du måste ange ett betyg");
                return;
            }

            const newID = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

            setMovies([...movies, {
                id: newID,
                title: title,
                rating: rating
            }]);

            inputRef.current.value = "";
            ratingRef.current.value = "0";
        }

    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    function sortMovieByTitle() {
        const sortedMovie = [...movies].sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        });

        setMovies(sortedMovie)
    }

    function sortMovieByRating() {
        const sortedMovie = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovie);
    }


     return (
        <div>
            <input className="form-control mb-3" placeholder="Add New Movie here..." ref={inputRef}></input>

            <select className="form-control mb-3" ref={ratingRef}>
                <option value="0">Välj betyg...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button className="btn btn-success mt-3 mb-3" onClick={addItem}>Spara film</button>

            <ul className="list-group mb-3">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} />) }
            </ul>
            <div className="mb-3">
                <button className="btn btn-primary me-2" onClick={sortMovieByTitle}>Alfabetisk ordning</button>
                <button className="btn btn-primary" onClick={sortMovieByRating}>Betygsordning</button>
            </div>
        </div>
     )
}