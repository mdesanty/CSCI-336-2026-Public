# Functional State Updates Example

A small React app that shows why a state setter's **function form** matters.

Each button waits one second, then adds 1 to its counter. Click a button several
times quickly, before the delay finishes, and compare the counter to how many
times you clicked:

- **Value form** - `setCount(count + 1)` reads `count` from the closure. The
  overlapping clicks all captured the same stale value, so they collapse into a
  single increment and the counter falls behind.
- **Function form** - `setCount(prev => prev + 1)` hands React an updater. React
  always calls it with the latest value, so every click is counted.

The lesson: when the next state depends on the current state, use the function
form.

## Running it

```
npm install
npm run dev
```

Then open the app at http://localhost:3000.
