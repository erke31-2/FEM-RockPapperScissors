import Home from "./Home";
import Result from "./Result";

import useGame from "../hook/useGame";

const Game = () => {
  const { userSelected, houseSelected } = useGame();

  return (
    <main>
      {userSelected && houseSelected ? (
        <Result userSelected={userSelected} houseSelected={houseSelected} />
      ) : (
        <Home />
      )}
    </main>
  );
};
export default Game;
