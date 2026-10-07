import Badge from './Badge.jsx';
import Status from './Status.jsx';

// Props arrive as named attributes on the component. We destructure the ones
// we need right in the parameter list.
function PersonCard({ name, role, online, isAdmin, bio }) {
  // One style object, defined once and reused on more than one element (the
  // role and the bio below both use it).
  const mutedText = { color: '#57606a', fontSize: '0.9rem' };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{name}</h2>

        {/* Conditional rendering with && : the Badge only renders for admins. */}
        {isAdmin && <Badge label="Admin" color="#8250df" />}
      </div>

      <p className="role" style={mutedText}>{role}</p>

      {/* Status is its own component; it returns the dot and label via a fragment. */}
      <p className="status">
        <Status online={online} />
      </p>

      {/* Conditional rendering for an optional prop: show the bio only when
          one was passed in. */}
      {bio && <p className="bio" style={mutedText}>{bio}</p>}
    </div>
  );
}

export default PersonCard;
