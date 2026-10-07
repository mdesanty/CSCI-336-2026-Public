import PersonCard from './PersonCard.jsx';

// PersonList receives the whole array of people as a single prop, then builds
// one PersonCard per person.
function PersonList({ people }) {
  // Conditional rendering: handle the empty case before we try to map.
  if (people.length === 0) {
    return <p>No team members to display.</p>;
  }

  return (
    <div className="person-list">
      {/* Rendering from a list: .map() turns each data object into a component.
          The key gives React a stable id so it can track each card. */}
      {people.map((person) => (
        <PersonCard
          key={person.id}
          name={person.name}
          role={person.role}
          online={person.online}
          isAdmin={person.isAdmin}
          bio={person.bio}
        />
      ))}
    </div>
  );
}

export default PersonList;
