import { NavLink, Outlet } from "react-router-dom";

// The layout holds the shared nav bar and an <Outlet />, which is where the
// matching child route renders. NavLink adds an "active" class on the current
// page so we can style it.
function Layout() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <div id="routing-example">
      <nav className="nav">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/films" className={linkClass}>Films</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
