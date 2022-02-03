import React from 'react';

function Clickme() {
    const sayHello = () => {
        console.log("Hello")
    };

  return (
       <div>
      <h3>This is Button Component</h3>
      <button onClick={sayHello}>Press </button>
    </div>
  )
 
}

export default Clickme;
