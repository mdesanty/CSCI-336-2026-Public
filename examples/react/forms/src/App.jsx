import { useState } from "react";
import "./App.css";

// A small controlled form: text input + select, a submit handler that calls
// preventDefault and validates, then adds the movie to a list in state.
function App() {
  const [movies, setMovies] = useState([
    { title: "The Matrix", genre: "Action" },
    { title: "Groundhog Day", genre: "Comedy" }
  ]);
  const [formData, setFormData] = useState({ title: "", genre: "Action" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.title.trim() === "") {
      setError("Please enter a title.");
      return;
    }

    setError("");
    setMovies((prev) => [...prev, { title: formData.title, genre: formData.genre }]);
    setFormData({ title: "", genre: "Action" });
  };

  return (
    <div id="movie-form">
      <h1>Movies</h1>
      <ul className="movies">
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} <span className="genre">({movie.genre})</span>
          </li>
        ))}
      </ul>

      <h2>Add a movie</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>

        <div className="field">
          <label htmlFor="genre">Genre</label>
          <select id="genre" name="genre" value={formData.genre} onChange={handleChange}>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
          </select>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Add movie</button>
      </form>
    </div>
  );
}

export default App;
