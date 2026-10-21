import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// The "golden pattern" for fetching data in React: useEffect + axios, with
// loading and error state driving conditional rendering.
function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: { _limit: 8 },
      })
      .then((response) => setPosts(response.data))
      .catch((err) => setError(err.message || "Something went wrong"))
      .finally(() => setIsLoading(false));
    // reloadKey is in the dependency array, so bumping it re-runs the effect.
  }, [reloadKey]);

  return (
    <div id="data-fetching">
      <h1>Fetching data with useEffect and axios</h1>
      <p className="intro">
        This list is loaded from a public API when the component mounts. Click
        Reload to run the request again and watch the loading state.
      </p>

      <button type="button" onClick={() => setReloadKey((k) => k + 1)}>
        Reload
      </button>

      {isLoading ? (
        <p className="status">Loading posts...</p>
      ) : error ? (
        <p className="status error" role="alert">Error: {error}</p>
      ) : (
        <ul className="posts">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
