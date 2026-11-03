import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Film Finder</h1>
      <p>A tiny single-page app that shows client-side routing.</p>
      <p>
        Head to the <Link to="/films">film list</Link>, then click a film to see
        its detail page. Watch the URL change, and try the back button.
      </p>
    </div>
  );
}

export default Home;
