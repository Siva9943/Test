import React, { useState } from "react";

const NameForm = ({ startGame }) => {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.trim() !== ""){
      startGame(name);
    }
  };

  return (

    <div className="welcome">

      <h1>Lucky Box Challenge</h1>

      <p>Enter your name to start</p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <button>Start Game</button>

      </form>

    </div>

  );
};

export default NameForm;