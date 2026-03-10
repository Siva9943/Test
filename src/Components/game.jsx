import React, { useState } from "react";
import { funnyResults } from "../data";
import MysteryBox from "./MysteryBox";

const Game = ({ name }) => {

  const [message,setMessage] = useState("");

  const revealMessage = () => {

    const random =
      funnyResults[Math.floor(Math.random()*funnyResults.length)];

    setMessage(`${name}, ${random}`);

    setTimeout(()=>{
      setMessage("");
    },3000);

  };

  return(

    <div>

      <h2>Welcome {name} 😈</h2>

      <div className="grid">

        {[...Array(40)].map((_,index)=>(
          <MysteryBox key={index} onReveal={revealMessage}/>
        ))}

      </div>

      {message && (

        <div className="popup">
          {message}
        </div>

      )}

    </div>

  );

};

export default Game;