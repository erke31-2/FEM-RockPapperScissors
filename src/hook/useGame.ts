import { createContext, useContext } from "react";
import { SelectionInfo } from "../constants/selections";

export interface GameContextProps {
  userSelected: SelectionInfo | null;
  houseSelected: SelectionInfo | null;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setUserSelected: React.Dispatch<React.SetStateAction<SelectionInfo | null>>;
  setHouseSelected: React.Dispatch<React.SetStateAction<SelectionInfo | null>>;
  winner: string | null;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  resetGame: () => void;
  showRules: boolean;
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GameContext = createContext<GameContextProps>({
  userSelected: null,
  houseSelected: null,
  score: 0,
  setScore: () => {
    console.log("Hello");
  },
  setUserSelected: () => {
    console.log("Hello");
  },
  setHouseSelected: () => {
    console.log("Hello");
  },
  winner: null,
  setWinner: () => {
    console.log("Hello");
  },
  resetGame: () => {
    console.log("Hello");
  },
  showRules: false,
  setShowRules: () => {
    console.log("Hello");
  },
});
const useGame = () => {
  return useContext(GameContext);
};

export default useGame;
