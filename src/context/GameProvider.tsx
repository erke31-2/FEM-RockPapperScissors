import { ReactNode, useState } from "react";
import { SelectionInfo } from "../constants/selections";
import { GameContext, GameContextProps } from "../hook/useGame";

const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialStoredScore = localStorage.getItem("score")
  const initialScore = initialStoredScore ? parseInt(initialStoredScore) : 0
  const [userSelected, setUserSelected] = useState<SelectionInfo | null>(null);
  const [houseSelected, setHouseSelected] = useState<SelectionInfo | null>(null);
  const [score, setScore] = useState(initialScore);
  const [winner, setWinner] = useState<string | null>(null);
  const [showRules, setShowRules] = useState<boolean>(false)

  const resetGame = () => {
    setUserSelected(null);
    setHouseSelected(null);
    setWinner(null)
  };

  const contextValue: GameContextProps = {
    userSelected,
    setUserSelected,
    houseSelected,
    setHouseSelected,
    winner,
    setWinner,
    score,
    setScore,
    resetGame,
    showRules,
    setShowRules
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
export default GameProvider;
