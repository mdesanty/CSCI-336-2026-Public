# React Router Example

A small single-page app that demonstrates client-side routing with React Router.

- `main.jsx` wraps the app in `<BrowserRouter>`.
- `App.jsx` defines the routes inside `<Routes>`, with a layout route that wraps
  the pages so the nav bar shows everywhere.
- `components/Layout.jsx` holds the nav bar (`NavLink`, with active styling) and
  an `<Outlet />` where the matching page renders.
- `components/FilmList.jsx` maps the data to links pointing at the dynamic route
  `/films/:id`.
- `components/FilmDetail.jsx` reads the `:id` with `useParams` and looks up the film.
- `components/NotFound.jsx` is the catch-all `*` route.

## Running it

```
npm install
npm run dev
```

Then open the app at http://localhost:3000.
