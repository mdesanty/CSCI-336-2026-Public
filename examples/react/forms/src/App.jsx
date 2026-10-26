import { useState } from "react";
import "./App.css";

// A small controlled form with per-field validation. The error for a field is
// shown directly under that field and the field is highlighted, mirroring the
// inline validation we will use with Bootstrap later.
function App() {
  const [movies, setMovies] = useState([
    { title: "The Matrix", genre: "Action" },
    { title: "Groundhog Day", genre: "Comedy" }
  ]);
  const [formData, setFormData] = useState({ title: "", genre: "Action" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear this field's error as the user starts correcting it
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (formData.title.trim() === "") {
      nextErrors.title = "Please enter a title.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
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
          <input
            id="title"
            name="title"
            className={errors.title ? "is-invalid" : ""}
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="invalid-feedback">{errors.title}</p>}
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

        <button type="submit">Add movie</button>
      </form>
    </div>
  );
}

export default App;
