# Forms Example

A small React app that shows controlled form inputs end to end:

- A text input and a `<select>`, both controlled (each has a `value` and an
  `onChange`), with one `handleChange` serving both via the `name`/computed-key
  pattern.
- A submit handler that calls `event.preventDefault()`, so the page does not
  reload.
- Basic validation: an empty title shows an error and the submission is rejected.
- On a valid submit, the movie is added to a list in state (building a new array
  with the spread operator), and the form resets.

## Running it

```
npm install
npm run dev
```

Then open the app at http://localhost:3000.
