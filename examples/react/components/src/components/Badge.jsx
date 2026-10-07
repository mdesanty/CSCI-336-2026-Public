// A tiny reusable component. It takes props (label and color) and returns a
// styled label. Because it is its own component, we can drop a <Badge /> in
// anywhere we need one.
function Badge({ label, color }) {
  return (
    <span className="badge" style={{ backgroundColor: color }}>
      {label}
    </span>
  );
}

export default Badge;
