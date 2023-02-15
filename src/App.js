import React, { useState } from 'react';


function App() {
  const [likes, setLikes] = useState(0);

  
  return (
    <div className="App">
    <h1> {likes}</h1> 
    <button onClick={() => setLikes(likes+1)}>Добавить</button>
    <button onClick={() => setLikes(likes-1)}>Убрать</button> 
    </div>
  );
}

export default App;
