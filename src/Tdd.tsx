import React from 'react';
import './Tdd.css';
 
function App() {
 
  const [displayMessage, setDisplayMessage] = React.useState(false);
  const [name, setName] = React.useState("");
 
  return (
    <div className="Tdd">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" onChange={(event) => setName(event.currentTarget.value)} />
      <button onClick={() => setDisplayMessage(true)}>Submit</button>
      
      {displayMessage && <p>{`Hello, ${name}!`}</p>}
    </div>
  );
}
 
export default App;