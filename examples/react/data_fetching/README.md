# Data Fetching Example

A small React app that shows the "golden pattern" for fetching data: `useEffect`
plus `axios`, with loading and error state driving conditional rendering.

- On mount, `useEffect` runs an `axios.get` against a public API.
- `isLoading` shows a loading message until the request settles.
- `error` shows a message if the request fails.
- On success, the posts render with `.map()`.
- A Reload button bumps a value in the effect's dependency array, which re-runs
  the request so you can watch the loading state again.

## Running it

```
npm install
npm run dev
```

Then open the app at http://localhost:3000.
