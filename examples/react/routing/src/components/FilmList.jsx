import { Link } from "react-router-dom";
import { films } from "../films.js";

// Render the list, and link each film to its dynamic detail route /films/:id.
function FilmList() {
  return (
    <div>
      <h1>Films</h1>
      <ul className="film-list">
        {films.map((film) => (
          <li key={film.id}>
            <Link to={`/films/${film.id}`}>{film.title}</Link>
            <span className="year"> ({film.year})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmList;
