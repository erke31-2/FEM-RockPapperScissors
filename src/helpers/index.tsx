import { selections } from "../constants/selections";

export const getHouseSelected = () => {
  const index = Math.floor(Math.random() * 5);
  return selections[index];
};

export const getWinner = (user: string, house: string): string => {
  const winningRules: Record<string, string[]> = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  if (user === house) {
    return "TIE";
  } else if (winningRules[user]?.includes(house)) {
    return "YOU WIN";
  } else {
    return "YOU LOST";
  }
};
