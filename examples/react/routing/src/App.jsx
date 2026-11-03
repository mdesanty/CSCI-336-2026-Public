import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import FilmList from "./components/FilmList.jsx";
import FilmDetail from "./components/FilmDetail.jsx";
import NotFound from "./components/NotFound.jsx";
import "./App.css";

// Each Route maps a URL path to the component to show. The Layout route wraps
// the others so the nav bar appears on every page (via its <Outlet />).
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<FilmList />} />
        <Route path="/films/:id" element={<FilmDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
