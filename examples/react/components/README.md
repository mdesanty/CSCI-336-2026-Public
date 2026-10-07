# React Components Example

A small, dependency-light React app that demonstrates the core building blocks of
React. It is meant to be used alongside the Components, Component Props,
Conditional Rendering, and Rendering from a List lessons.

## What it shows

- **Components** - `App`, `PersonList`, `PersonCard`, and `Badge` are each their
  own component, composed together.
- **Component props** - `App` passes the data down to `PersonList`, which passes
  each person's fields down to `PersonCard` as named props.
- **Rendering from a list** - `PersonList` uses `.map()` to turn an array of
  people into a list of `PersonCard` components, each with a `key`.
- **Conditional rendering** - `PersonCard` shows an Admin badge only for admins
  (`&&`), an Online / Offline status (ternary), and a bio only when one was
  provided. `PersonList` renders an empty-state message when there are no people.

## File layout

```
src/
  App.jsx                top-level component, owns the data
  components/
    PersonList.jsx       receives the array, maps it to cards
    PersonCard.jsx       receives one person's props, renders a card
    Badge.jsx            tiny reusable presentational component
```

## Running it

```
npm install
npm run dev
```

Then open the app at http://localhost:3000.
