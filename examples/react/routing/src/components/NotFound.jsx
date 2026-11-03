import { Link } from "react-router-dom";

// The catch-all "*" route renders this for any URL that does not match.
function NotFound() {
  return (
    <div>
      <h1>404: Page not found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default NotFound;
