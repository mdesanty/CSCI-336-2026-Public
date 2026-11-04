import { Link, useNavigate } from "react-router-dom";
import { films } from "../films";

function Home() {
  const navigate = useNavigate();

  const surpriseMe = () => {
    const randomId = films[Math.floor(Math.random() * films.length)].id;
    navigate(`/films/${randomId}`);
  };

  return (
    <div>
      <h1>Film Finder</h1>
      <p>A tiny single-page app that shows client-side routing.</p>
      <p>
        Head to the <Link to="/films">film list</Link>, then click a film to see
        its detail page. Watch the URL change, and try the back button.
      </p>
      <p>Or let the app choose for you with code-driven navigation:</p>
      <button className="surprise" onClick={surpriseMe}>Surprise me</button>
    </div>
  );
}

export default Home;
