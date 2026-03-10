import React, { useState } from "react";
import NameForm from "./Components/NameForm";
import Game from "./Components/game";
function App(){

  const [playerName,setPlayerName] = useState("");

  return (

    <div>

      {playerName === "" ? (

        <NameForm startGame={setPlayerName} />

      ) : (

        <Game name={playerName} />

      )}

    </div>

  );

}

export default App;