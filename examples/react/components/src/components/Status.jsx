// A fragment (<> </>) lets a component return several elements side by side
// without wrapping them in an extra element. Here we return the status dot and
// its label as siblings, so they drop straight into whatever contains <Status />.
function Status({ online }) {
  return (
    <>
      <span className={online ? 'dot online' : 'dot offline'}></span>
      {/* Conditional rendering with a ternary: one of two outputs. */}
      {online ? 'Online' : 'Offline'}
    </>
  );
}

export default Status;
