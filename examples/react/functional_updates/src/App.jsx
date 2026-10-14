import { useState } from "react";
import "./App.css";

const DELAY = 1000;

// This example shows why the function form of a state setter matters.
// Each button waits one second, then adds 1 to its counter. If you click a
// button several times before that second is up, the "value form" loses clicks
// (every pending update captured the same stale count) while the "function
// form" counts every one.
function App() {
  const [valueClicks, setValueClicks] = useState(0);
  const [valueCount, setValueCount] = useState(0);
  const [fnClicks, setFnClicks] = useState(0);
  const [fnCount, setFnCount] = useState(0);

  // Susceptible: reads valueCount from the closure, which can be stale.
  const bumpValue = () => {
    setValueClicks((prev) => prev + 1);
    setTimeout(() => setValueCount(valueCount + 1), DELAY);
  };

  // Safe: the updater function always receives React's latest value.
  const bumpFunction = () => {
    setFnClicks((prev) => prev + 1);
    setTimeout(() => setFnCount((prev) => prev + 1), DELAY);
  };

  const reset = () => {
    setValueClicks(0);
    setValueCount(0);
    setFnClicks(0);
    setFnCount(0);
  };

  return (
    <div id="functional-updates">
      <h1>Updating state: value vs. function</h1>
      <p className="intro">
        Each button waits one second, then adds 1 to its counter. Click a button
        several times quickly (before the second is up), then compare its count to
        how many times you clicked.
      </p>

      <div className="panels">
        <div className="panel">
          <h2 className="bad">Value form</h2>
          <p className="code">setCount(count + 1)</p>
          <button type="button" onClick={bumpValue}>Add 1 (after 1s)</button>
          <p className="stat">Clicked: <strong>{valueClicks}</strong></p>
          <p className="stat">Count: <strong>{valueCount}</strong></p>
          {valueClicks > valueCount && (
            <p className="behind">behind by {valueClicks - valueCount}</p>
          )}
        </div>

        <div className="panel">
          <h2 className="good">Function form</h2>
          <p className="code">setCount(prev =&gt; prev + 1)</p>
          <button type="button" onClick={bumpFunction}>Add 1 (after 1s)</button>
          <p className="stat">Clicked: <strong>{fnClicks}</strong></p>
          <p className="stat">Count: <strong>{fnCount}</strong></p>
          {fnClicks > fnCount ? (
            <p className="catching">catching up...</p>
          ) : fnClicks > 0 ? (
            <p className="synced">in sync</p>
          ) : null}
        </div>
      </div>

      <button type="button" className="reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
