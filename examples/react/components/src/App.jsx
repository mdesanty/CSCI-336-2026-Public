import PersonList from './components/PersonList.jsx';
import './App.css';

// App is the top-level component. It owns the data and passes it down as props.
function App() {
  const people = [
    { id: 1, name: 'Ada Lovelace', role: 'Engineer', online: true, isAdmin: true, bio: 'Wrote the first published algorithm.' },
    { id: 2, name: 'Grace Hopper', role: 'Engineer', online: false, isAdmin: true },
    { id: 3, name: 'Alan Turing', role: 'Researcher', online: true, isAdmin: false, bio: 'Pioneered theoretical computer science.' },
    { id: 4, name: 'Katherine Johnson', role: 'Mathematician', online: true, isAdmin: false },
    { id: 5, name: 'Linus Torvalds', role: 'Maintainer', online: false, isAdmin: false }
  ];

  // In JSX, inline styles are written as an object. Property names are camelCase
  // (fontSize, not font-size), and a plain number is treated as pixels, so
  // fontSize: 28 renders as 28px. Defining the object as a const lets us reuse it.
  const headingStyle = {
    color: '#1f2328',
    fontSize: 28,
    borderBottom: '2px solid #d0d7de',
    paddingBottom: 8
  };

  return (
    <div className="app">
      <h1 style={headingStyle}>Team Directory</h1>

      {/* Pass the array down to PersonList as a prop. */}
      <PersonList people={people} />
    </div>
  );
}

export default App;
