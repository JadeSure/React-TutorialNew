import React, {useState} from "react";

function App() {
  const [name, setName] = useState('')
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default App;
