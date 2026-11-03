import { useParams, Link } from "react-router-dom";
import { films } from "../films.js";

// useParams reads the :id from the URL. We use it to find the right film.
function FilmDetail() {
  const { id } = useParams();
  const film = films.find((f) => f.id === Number(id));

  // The id might not match any film (for example /films/999).
  if (!film) {
    return (
      <div>
        <h1>Film not found</h1>
        <Link to="/films">Back to the list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{film.title}</h1>
      <p className="meta">{film.year} &middot; Directed by {film.director}</p>
      <p>{film.summary}</p>
      <Link to="/films">Back to the list</Link>
    </div>
  );
}

export default FilmDetail;
