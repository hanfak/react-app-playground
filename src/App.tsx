import React from 'react';
import './App.css';
 
function App() {
 
  const [displayMessage, setDisplayMessage] = React.useState(false);
  const [name, setName] = React.useState("");
 
  return (
    <div className="App">
      <p>Yo</p>
    </div>
  );
}
 
export default App;